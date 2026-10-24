// Decks complets sous la catégorie unique "ANALYSE DE FOURIER" avec des couleurs et styles distincts
const decks = [
    {
        id: "theoremes-1",
        category: "ANALYSE DE FOURIER",
        title: "1. Théorèmes du Cours",
        color: "#d97736", // Orange
        icon: "📜",
        description: "Enoncés et hypothèses de tous les théorèmes fondamentaux du chapitre (Lebesgue, Heine, Banach, etc.).",
        cards: [
            {
                question: "Théorème 3.1 (Lemme de Lebesgue)\nHypothèses : K ⊂ E compact et (Ui) recouvrement ouvert.",
                answer: "Énoncé : Il existe δ > 0 tel que toute boule de rayon < δ centrée en un point de K est incluse dans l'un des Ui[cite: 11]."
            },
            {
                question: "Théorème 3.2 (Lebesgue-Borel)\nHypothèses : K ⊂ E espace vectoriel normé.",
                answer: "Équivalence : K est compact si et seulement si de tout recouvrement d'ouverts de K on peut extraire un recouvrement fini[cite: 12]."
            },
            {
                question: "Théorème 3.3 (Heine-Borel)\nHypothèses : Sous-ensemble de ℝⁿ.",
                answer: "Équivalence : Un sous-ensemble de ℝⁿ est compact si et seulement s'il est fermé et borné[cite: 15]."
            },
            {
                question: "Théorème 3.4 (Bolzano-Weierstrass dans ℝⁿ)\nHypothèses : Suite (xk) dans ℝⁿ.",
                answer: "Énoncé : Toute suite bornée dans ℝⁿ admet une sous-suite convergente[cite: 16]."
            },
            {
                question: "Théorème 4.1 (Heine)\nHypothèses : f : K → ℝ continue, K ⊂ ℝⁿ compact.",
                answer: "Énoncé : Toute fonction continue sur un compact est uniformément continue[cite: 18]."
            },
            {
                question: "Théorème 5.1 (Équivalence des normes en dimension finie)\nHypothèses : E espace vectoriel de dimension finie.",
                answer: "Énoncé : Toutes les normes sur E sont équivalentes (∃ C1, C2 > 0 tels que C1||x||a ≤ ||x||b ≤ C2||x||a)[cite: 19]."
            },
            {
                question: "Théorème de la projection orthogonale (Espaces de Hilbert)\nHypothèses : H espace de Hilbert, F ⊂ H sous-espace vectoriel fermé.",
                answer: "Énoncé : Pour tout x ∈ H, il existe un unique y ∈ F tel que ||x-y|| = inf_{z∈F} ||x-z|| (caractérisé par x-y ⊥ F)[cite: 21]."
            },
            {
                question: "Théorème de représentation de Riesz (Espaces de Hilbert)\nHypothèses : H espace de Hilbert, f ∈ H* (forme linéaire continue).",
                answer: "Énoncé : Il existe un unique y ∈ H tel que f(x) = ⟨x, y⟩ pour tout x ∈ H[cite: 21]."
            }
        ]
    },
    {
        id: "preuves-1",
        category: "ANALYSE DE FOURIER",
        title: "2. Démonstrations & Preuves",
        color: "#689f78", // Vert
        icon: "✍️",
        description: "Démos détaillées des inégalités, caractérisations topologiques et propriétés de complétude.",
        cards: [
            {
                question: "Preuve de l'Inégalité de Cauchy-Schwarz (Prop. 1.1)",
                answer: "On étudie f(t) = ||x-ty||₂² ≥ 0 ce qui donne un trinôme en t dont le discriminant Δ ≤ 0, d'où le résultat[cite: 8]."
            },
            {
                question: "Preuve de l'Inégalité de Minkowski (Prop. 1.2)",
                answer: "On utilise la convexité de la fonction t ↦ tᵖ pour p ≥ 1 et une sommation adéquate sur les composantes[cite: 9]."
            },
            {
                question: "Preuve de la caractérisation séquentielle d'un fermé (Prop. 3.2)",
                answer: "(⇒) Limite de suite dans un fermé reste dans le fermé. (⇐) Si toute suite convergente de A a sa limite dans A, on construit an ∈ A ∩ B(x, 1/n) pour prouver que Ā ⊂ A[cite: 13]."
            },
            {
                question: "Preuve de la continuité par les ouverts (Prop. 3.4)",
                answer: "(i ⇒ ii) L'image réciproque d'un ouvert par une application continue est ouverte en passant par les boules de rayon r et δ[cite: 14]."
            },
            {
                question: "Preuve du Lemme de Lebesgue (Théorème 3.1)",
                answer: "Par l'absurde, on suppose l'existence d'une suite dont les boules n'appartiennent à aucun Ui, et on utilise la compacité pour extraire une sous-suite convergente menant à une contradiction[cite: 11, 23]."
            },
            {
                question: "Preuve de l'équivalence des normes en dimension finie (Théorème 5.1)",
                answer: "On identifie E à ℝⁿ, la fonction f(x) = ||x|| est continue sur la sphère unité compacte S, elle y atteint ses bornes m et M strictements positives[cite: 19, 20]."
            }
        ]
    },
    {
        id: "propos-1",
        category: "ANALYSE DE FOURIER",
        title: "3. Propositions & Exemples",
        color: "#5b8cb9", // Bleu
        icon: "💡",
        description: "Définitions clés, semi-normes, normes usuelles, stabilité topologique et espaces de Banach.",
        cards: [
            {
                question: "Définition d'une Semi-norme vs Norme (Défs 1.2 & 1.3)",
                answer: "Semi-norme : homogénéité et sous-additivité (peut s'annuler hors de 0). Norme : semi-norme telle que ||x|| = 0 ⟹ x = 0[cite: 9, 10]."
            },
            {
                question: "Exemples de normes usuelles (Proposition 2.1)",
                answer: "Norme p sur ℝⁿ (||x||ᵖ = ∑|xi|ᵖ)^(1/p), norme infini ||x||∞ = max|xi|, et norme uniforme sur C([a,b]) ||f||∞ = sup|f(t)|[cite: 10, 11]."
            },
            {
                question: "Proposition 3.1 : Stabilité des ouverts et fermés",
                answer: "Union quelconque et intersection finie d'ouverts = ouvert. Intersection quelconque et union finie de fermés = fermé[cite: 12]."
            },
            {
                question: "Définitions de l'Intérieur, Adhérence et Frontière (Défs 3.5, 3.6, 3.7)",
                answer: "Intérieur : plus grand ouvert inclus. Adhérence : ensemble des points dont toute boule rencontre l'ensemble. Frontière : Adhérence privée de l'intérieur[cite: 13, 14]."
            },
            {
                question: "Exemples de compacité (Exemple 3.2)",
                answer: "[0,1] est compact (fermé et borné dans ℝ). ]0,1[ n'est pas compact (non fermé). La boule fermée B̄(0,1) est compacte dans ℝⁿ[cite: 16]."
            },
            {
                question: "Proposition 4.6 : Espace C(K,E)",
                answer: "Pour K compact et E espace de Banach, l'espace C(K,E) muni de la norme uniforme ||f||∞ = sup||f(x)||_E est un espace de Banach (complet)[cite: 18, 19]."
            }
        ]
    }
];

let activeCategory = "Tous";
let currentDeck = null;
let currentCardIndex = 0;
let score = 0;

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

function renderFilters() {
    const categoriesCount = {};
    decks.forEach(d => {
        categoriesCount[d.category] = (categoriesCount[d.category] || 0) + 1;
    });

    filterPills.innerHTML = '';
    
    const allBtn = document.createElement('button');
    allBtn.className = `pill ${activeCategory === 'Tous' ? 'active' : ''}`;
    allBtn.textContent = `Tous (${decks.length})`;
    allBtn.onclick = () => filterCategory('Tous');
    filterPills.appendChild(allBtn);

    Object.keys(categoriesCount).forEach(cat => {
        const btn = document.createElement('button');
        btn.className = `pill ${activeCategory === cat ? 'active' : ''}`;
        btn.textContent = `${cat} (${categoriesCount[cat]})`;
        btn.onclick = () => filterCategory(cat);
        filterPills.appendChild(btn);
    });
}

function filterCategory(cat) {
    activeCategory = cat;
    renderFilters();
    renderDecks();
}

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
                    <span class="category-tag" style="color: ${deck.color};">${deck.category}</span>
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

renderFilters();
renderDecks();
