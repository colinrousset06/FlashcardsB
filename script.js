const decks = [
    {
        id: "eco-1",
        category: "ÉCO-CONCEPTION",
        icon: "🌱",
        title: "Écoconception - Cours 1 (L'Homme par nature)",
        description: "Retrouvez les notions clés, définitions et concepts abordés lors du premier cours...",
        cards: [
            { question: "Qu'est-ce que l'écoconception ?", answer: "Prise en compte de l'environnement dès la conception d'un produit." },
            { question: "Quel est l'objectif principal ?", answer: "Réduire les impacts environnementaux sur tout le cycle de vie." }
        ]
    },
    {
        id: "eco-2",
        category: "ÉCO-CONCEPTION",
        icon: "🌱",
        title: "Écoconception - Cours 2 (Cycle de vie et Méthodologie ACV)",
        description: "Approfondissement des méthodologies d'analyse, des étapes du cycle de vie et d...",
        cards: [
            { question: "Que signifie ACV ?", answer: "Analyse du Cycle de Vie." },
            { question: "Quelles sont les 4 étapes de l'ACV ?", answer: "Objectifs, Inventaire, Évaluation des impacts, Interprétation." }
        ]
    },
    {
        id: "opti-1",
        category: "OPTIMISATION ET RECHERCHE OPÉRATIONNELLE",
        icon: "⚙️",
        title: "Optimisation & Recherche Opérationnelle",
        description: "Fiche de révision sur l'optimisation libre, la convexité, les multiplicateurs de Lagrange ...",
        cards: [
            { question: "Qu'est-ce qu'un multiplicateur de Lagrange ?", answer: "Une méthode pour trouver les extrémums sous contraintes d'égalité." }
        ]
    },
    {
        id: "num-1",
        category: "MÉTHODES NUMÉRIQUES",
        icon: "📊",
        title: "Méthodes Numériques",
        description: "Concepts clés sur la résolution d'équations et l'intégration numérique.",
        cards: [
            { question: "À quoi sert la méthode de Newton ?", answer: "À trouver les zéros d'une fonction d'une variable réelle." }
        ]
    }
];

let activeCategory = "Tous";
let currentDeck = null;
let currentCardIndex = 0;
let score = 0;

// Éléments DOM
const decksGrid = document.getElementById('decks-grid');
const filterPills = document.getElementById('filter-pills');
const searchInput = document.getElementById('search-input');
const catalogCount = document.getElementById('catalog-count');

const galleryView = document.getElementById('gallery-view');
const studyView = document.getElementById('study-view');
const scoreView = document.getElementById('score-view');

const flashcard = document.getElementById('flashcard');
const cardFront = document.getElementById('card-front');
const cardBack = document.getElementById('card-back');
const studyDeckTitle = document.getElementById('study-deck-title');
const progressCounter = document.getElementById('progress-counter');

// 1. GÉNÉRER LES FILTRES
function renderFilters() {
    const categoriesCount = {};
    decks.forEach(d => {
        categoriesCount[d.category] = (categoriesCount[d.category] || 0) + 1;
    });

    filterPills.innerHTML = '';
    
    // Bouton TOUS
    const allBtn = document.createElement('button');
    allBtn.className = `pill ${activeCategory === 'Tous' ? 'active' : ''}`;
    allBtn.textContent = `Tous (${decks.length})`;
    allBtn.onclick = () => filterCategory('Tous');
    filterPills.appendChild(allBtn);

    // Pilules des catégories
    Object.keys(categoriesCount).forEach(cat => {
        const btn = document.createElement('button');
        btn.className = `pill ${activeCategory === cat ? 'active' : ''}`;
        btn.textContent = `${formatCategoryName(cat)} (${categoriesCount[cat]})`;
        btn.onclick = () => filterCategory(cat);
        filterPills.appendChild(btn);
    });
}

function formatCategoryName(cat) {
    if (cat.length > 25) return cat.substring(0, 22) + '...';
    return cat.charAt(0) + cat.slice(1).toLowerCase();
}

function filterCategory(cat) {
    activeCategory = cat;
    renderFilters();
    renderDecks();
}

// 2. AFFICHER LES DECKS (Sans boutons de suppression)
function renderDecks() {
    const query = searchInput.value.toLowerCase();
    
    const filteredDecks = decks.filter(deck => {
        const matchCategory = activeCategory === "Tous" || deck.category === activeCategory;
        const matchQuery = deck.title.toLowerCase().includes(query) || deck.description.toLowerCase().includes(query);
        return matchCategory && matchQuery;
    });

    catalogCount.textContent = `${filteredDecks.length} catalogue${filteredDecks.length > 1 ? 's' : ''} disponible${filteredDecks.length > 1 ? 's' : ''}`;
    decksGrid.innerHTML = '';

    filteredDecks.forEach(deck => {
        const card = document.createElement('div');
        card.className = 'deck-card';
        card.innerHTML = `
            <div>
                <div class="deck-header">
                    <span class="category-tag">${deck.category}</span>
                    <span class="deck-icon">${deck.icon || '📖'}</span>
                </div>
                <h3 class="deck-title">${deck.title}</h3>
                <p class="deck-desc">${deck.description}</p>
            </div>
            <div class="deck-footer">
                <span class="cards-count">${deck.cards.length} cartes</span>
                <button class="study-link" onclick="startStudy('${deck.id}')">Étudier →</button>
            </div>
        `;
        decksGrid.appendChild(card);
    });
}

// 3. VUE ÉTUDE
function startStudy(deckId) {
    currentDeck = decks.find(d => d.id === deckId);
    currentCardIndex = 0;
    score = 0;

    studyDeckTitle.textContent = currentDeck.title;
    galleryView.classList.add('hidden');
    scoreView.classList.add('hidden');
    studyView.classList.remove('hidden');

    displayCard();
}

function displayCard() {
    const card = currentDeck.cards[currentCardIndex];
    cardFront.textContent = card.question;
    cardBack.textContent = card.answer;
    progressCounter.textContent = `Carte ${currentCardIndex + 1} sur ${currentDeck.cards.length}`;
    flashcard.classList.remove('flipped');
}

function answerCard(isCorrect) {
    if (isCorrect) score++;
    currentCardIndex++;

    if (currentCardIndex < currentDeck.cards.length) {
        displayCard();
    } else {
        showResults();
    }
}

function showResults() {
    studyView.classList.add('hidden');
    scoreView.classList.remove('hidden');

    document.getElementById('final-score').textContent = `${score} / ${currentDeck.cards.length}`;
    document.getElementById('score-feedback').textContent = 
        score === currentDeck.cards.length ? "Félicitations, maîtrise parfaite !" : "Continuez vos révisions !";
}

// ÉVÉNEMENTS & ÉCOUTEURS
flashcard.onclick = () => flashcard.classList.toggle('flipped');
document.getElementById('flip-btn').onclick = () => flashcard.classList.toggle('flipped');
document.getElementById('correct-btn').onclick = () => answerCard(true);
document.getElementById('wrong-btn').onclick = () => answerCard(false);

document.getElementById('back-to-decks-btn').onclick = () => {
    studyView.classList.add('hidden');
    galleryView.classList.remove('hidden');
};

document.getElementById('home-btn').onclick = () => {
    scoreView.classList.add('hidden');
    galleryView.classList.remove('hidden');
};

document.getElementById('restart-deck-btn').onclick = () => startStudy(currentDeck.id);
searchInput.oninput = renderDecks;

// INITIALISATION
renderFilters();
renderDecks();
