// Decks basés sur le Chapitre 1 du cours (Espaces Vectoriels Normés)
const decks = [
    {
        id: "theoremes-1",
        category: "THÉORÈMES",
        icon: "📜",
        title: "Chapitre 1 : Théorèmes du cours",
        description: "Hypothèses et énoncés des théorèmes clés (Lemme de Lebesgue, Lebesgue-Borel, Heine, Bolzano-Weierstrass, Équivalence des normes)...",
        cards: [
            {
                question: "Théorème 3.1 (Lemme de Lebesgue) :\nHypothèses : K ⊂ E compact et (Ui)i∈I recouvrement ouvert de K.",
                answer: "Fin / Énoncé : Il existe δ > 0 tel que toute boule de rayon < δ et centrée en un point de K est incluse dans un des Ui (∃δ > 0, ∀x ∈ K, ∃i, B(x, δ) ⊂ Ui)[cite: 11]."
            },
            {
                question: "Théorème 3.2 (Lebesgue-Borel) :\nHypothèses : K ⊂ E espace vectoriel normé.",
                answer: "Fin / Équivalence : K est un compact si et seulement si de tout recouvrement d'ouverts de K on peut en extraire un recouvrement fini[cite: 12]."
            },
            {
                question: "Théorème 3.3 (Heine-Borel) :\nHypothèses : Un sous-ensemble de ℝⁿ.",
                answer: "Fin / Équivalence : Il est compact si et seulement s'il est fermé et borné[cite: 15]."
            },
            {
                question: "Théorème 3.4 (Bolzano-Weierstrass dans ℝⁿ) :\nHypothèses : Toute suite (xk) dans ℝⁿ.",
                answer: "Fin / Équivalence : Si la suite est bornée, elle admet une sous-suite convergente[cite: 16]."
            },
            {
                question: "Théorème 4.1 (Heine) :\nHypothèses : f : K → ℝ continue, avec K ⊂ ℝⁿ compact.",
                answer: "Fin / Équivalence : f est uniformément continue sur K[cite: 18]."
            },
            {
                question: "Théorème 5.1 (Équivalence des normes en dimension finie) :\nHypothèses : E espace vectoriel de dimension finie muni de deux normes ||·||a et ||·||b.",
                answer: "Fin / Équivalence : Toutes les normes sont équivalentes (∃C1, C2 > 0 tels que C1||x||a ≤ ||x||b ≤ C2||x||a)[cite: 19]."
            }
        ]
    },
    {
        id: "preuves-1",
        category: "DÉMONSTRATIONS",
        icon: "✍️",
        title: "Chapitre 1 : Preuves & Démos",
        description: "Démonstrations des propositions et théorèmes fondamentaux du cours...",
        cards: [
            {
                question: "Preuve de l'Inégalité de Cauchy-Schwarz dans ℝⁿ (Prop. 1.1)",
                answer: "On pose f(t) = ||x-ty||₂² ≥ 0 = ||x||₂² - 2t⟨x,y⟩ + t²||y||₂². C'est un trinôme quadratique positif ou nul, donc son discriminant Δ ≤ 0, ce qui donne 4⟨x,y⟩² - 4||x||₂²||y||₂² ≤ 0[cite: 8]."
            },
            {
                question: "Preuve de la caractérisation séquentielle d'un fermé (Prop. 3.2)",
                answer: "(⇒) Si F est fermé, toute limite de suite de F est dans F. (⇐) Si toute suite convergente de F a sa limite dans F, on montre que Ā ⊂ A en choisissant an ∈ A ∩ B(x, 1/n) pour tout x ∈ Ā, d'où an → x ∈ A[cite: 13]."
            },
            {
                question: "Preuve du Lemme de Lebesgue (Théorème 3.1)",
                answer: "Par l'absurde, si pour tout δ il existe xn ∈ K dont la boule B(xn, 1/n) n'est dans aucun Ui. Par compacité, xn admet une sous-suite xnk → x ∈ K. x ∈ Uj (ouvert), donc B(x, ε) ⊂ Uj, ce qui contredit le choix pour k grand[cite: 11, 23]."
            },
            {
                question: "Preuve de l'équivalence continuité ⇔ images réciproques d'ouverts (Prop. 3.4)",
                answer: "(i ⇒ ii) Si U est ouvert dans Y et x ∈ f⁻¹(U), f(x) a une boule B_Y(f(x), r) ⊂ U. Par continuité, il existe δ > 0 tel que B_X(x, δ) ⊂ f⁻¹(U). (ii ⇒ i) Réciproque par voisinage et boules ouvertes[cite: 14]."
            }
        ]
    },
    {
        id: "propositions-1",
        category: "PROPOSITIONS & EXEMPLES",
        icon: "💡",
        title: "Chapitre 1 : Propositions & Exemples",
        description: "Inégalités fondamentales, semi-normes, propriétés topologiques et exemples usuels...",
        cards: [
            {
                question: "Proposition 1.1 & 1.2 : Inégalités fondamentales dans ℝⁿ",
                answer: "Cauchy-Schwarz : |⟨x,y⟩| ≤ ||x||₂ ||y||₂. Minkowski : ||x+y||ₚ ≤ ||x||ₚ + ||y||ₚ pour 1 ≤ p < ∞[cite: 8, 9]."
            },
            {
                question: "Définition et Exemple de Semi-norme (Définition 1.2)",
                answer: "Vérifie l'homogénéité p(λx) = |λ|p(x) et l'inégalité triangulaire p(x+y) ≤ p(x)+p(y), mais peut s'annuler sur un vecteur non nul. Exemple : p(f) = ∫ₐᵇ |f(t)|dt sur C([a,b])[cite: 9]."
            },
            {
                question: "Proposition 3.1 : Stabilité des ouverts et des fermés",
                answer: "L'union quelconque et l'intersection finie d'ouverts sont ouvertes. L'intersection quelconque et l'union finie de fermés sont fermées[cite: 12]."
            },
            {
                question: "Exemples de compacts et non-compacts (Exemple 3.2)",
                answer: "[0,1] ⊂ ℝ est compact (fermé et borné). L'intervalle ]0,1[ n'est pas compact (non fermé). La boule fermée B̄(0,1) est compacte dans ℝⁿ[cite: 16]."
            },
            {
                question: "Proposition 4.6 : Espace des fonctions continues sur un compact",
                answer: "Soit K ⊂ ℝⁿ compact et (E, ||·||_E) un Banach. L'ensemble C(K,E) muni de la norme uniforme ||f||∞ = sup_{x∈K} ||f(x)||_E est un espace de Banach[cite: 18, 19]."
            }
        ]
    }
];

// Couleurs distinctes par catégorie
const categoryColors = {
    "THÉORÈMES": "#d97736",          // Orange
    "DÉMONSTRATIONS": "#689f78",       // Vert
    "PROPOSITIONS & EXEMPLES": "#5b8cb9" // Bleu
};

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
        const cardColor = categoryColors[deck.category] || "var(--accent-orange)";
        const card = document.createElement('div');
        card.className = 'deck-card';
        card.innerHTML = `
            <div>
                <div class="deck-header">
                    <span class="category-tag" style="color: ${cardColor};">${deck.category}</span>
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
