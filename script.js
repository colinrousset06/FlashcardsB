const decks = [
    // --- CATÉGORIE 1 : ANALYSE DE FOURIER ---
    {
        id: "theoremes-1",
        category: "ANALYSE DE FOURIER",
        title: "1. Chapitre 1 : Théorèmes du cours",
        color: "#d97736", // Orange
        icon: "📜",
        description: "Enoncés, hypothèses et équivalences de tous les théorèmes fondamentaux des espaces vectoriels normés.",
        cards: [
            {
                question: "Théorème 3.1 (Lemme de Lebesgue)\nHypothèses : K ⊂ E compact et (Ui)i∈I recouvrement ouvert de K.",
                answer: "Énoncé : Il existe δ > 0 tel que toute boule de rayon < δ et centrée en un point de K est incluse dans un des Ui[cite: 11]."
            },
            {
                question: "Théorème 3.2 (Lebesgue-Borel)\nHypothèses : K ⊂ E espace vectoriel normé.",
                answer: "Équivalence : K est un compact si et seulement si de tout recouvrement d'ouverts de K on peut en extraire un recouvrement fini[cite: 12]."
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
                question: "Théorème 5.1 (Équivalence des normes en dimension finie)\nHypothèses : E espace vectoriel de dimension finie muni de deux normes.",
                answer: "Énoncé : Toutes les normes sont équivalentes (∃ C1, C2 > 0 tels que C1||x||a ≤ ||x||b ≤ C2||x||a)[cite: 19]."
            },
            {
                question: "Théorème de la projection orthogonale (Espaces de Hilbert)\nHypothèses : H espace de Hilbert, F ⊂ H sous-espace fermé.",
                answer: "Énoncé : Pour tout x ∈ H, il existe un unique y ∈ F (projection) tel que ||x-y|| = inf_{z∈F} ||x-z||, caractérisé par x-y ⊥ F[cite: 21]."
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
        title: "2. Chapitre 1 : Preuves & Démos",
        color: "#689f78", // Vert
        icon: "✍️",
        description: "Démonstrations détaillées des inégalités, caractérisations des fermés et propriétés topologiques.",
        cards: [
            {
                question: "Preuve de l'Inégalité de Cauchy-Schwarz (Prop. 1.1)",
                answer: "On étudie f(t) = ||x-ty||₂² = ||x||₂² - 2t⟨x,y⟩ + t²||y||₂² ≥ 0. Son discriminant Δ ≤ 0 donne le résultat[cite: 8]."
            },
            {
                question: "Preuve de l'Inégalité de Minkowski (Prop. 1.2)",
                answer: "On utilise la convexité de t ↦ tᵖ pour p ≥ 1 et une sommation composante par composante[cite: 9]."
            },
            {
                question: "Preuve de la caractérisation séquentielle d'un fermé (Prop. 3.2)",
                answer: "(⇒) Toute limite de suite de F est dans F si F est fermé. (⇐) Si toute suite convergente a sa limite dans A, on construit an ∈ A ∩ B(x, 1/n) pour montrer que Ā ⊂ A[cite: 13]."
            },
            {
                question: "Preuve de la continuité par les ouverts (Prop. 3.4)",
                answer: "(i ⇒ ii) L'image réciproque d'un ouvert U par f est ouverte en encadrant par des boules de rayon r et δ[cite: 14]."
            },
            {
                question: "Preuve du Lemme de Lebesgue (Théorème 3.1)",
                answer: "Par l'absurde, si l'on suppose qu'il existe une suite de boules n'appartenant à aucun Ui, la compacité permet d'extraire une sous-suite menant à une contradiction[cite: 11, 23]."
            },
            {
                question: "Preuve de l'équivalence des normes en dimension finie (Théorème 5.1)",
                answer: "En identifiant E à ℝⁿ, f(x) = ||x|| est continue sur la sphère unité compacte S et y atteint ses bornes strictements positives m et M[cite: 19, 20]."
            }
        ]
    },
    {
        id: "propos-1",
        category: "ANALYSE DE FOURIER",
        title: "3. Chapitre 1 : Propositions & Exemples",
        color: "#5b8cb9", // Bleu
        icon: "💡",
        description: "Inégalités fondamentales, semi-normes, normes usuelles, stabilité topologique et espaces de Banach.",
        cards: [
            {
                question: "Proposition 1.1 & 1.2 : Inégalités fondamentales",
                answer: "Cauchy-Schwarz : |⟨x,y⟩| ≤ ||x||₂||y||₂ dans ℝⁿ. Minkowski : ||x+y||ᵖ ≤ ||x||ᵖ + ||y||ᵖ[cite: 8, 9]."
            },
            {
                question: "Définition d'une Semi-norme vs Norme (Défs 1.2 & 1.3)",
                answer: "Semi-norme : homogénéité et sous-additivité (peut s'annuler hors de 0). Norme : semi-norme séparée (||x|| = 0 ⟹ x = 0)[cite: 9, 10]."
            },
            {
                question: "Proposition 3.1 : Stabilité des ouverts et des fermés",
                answer: "Union quelconque et intersection finie d'ouverts = ouvert. Intersection quelconque et union finie de fermés = fermé[cite: 12]."
            },
            {
                question: "Définitions topologiques : Intérieur, Adhérence, Frontière (Défs 3.5, 3.6, 3.7)",
                answer: "Intérieur : plus grand ouvert inclus. Adhérence : ensemble des points dont toute boule rencontre l'ensemble. Frontière : Adhérence privée de l'intérieur[cite: 13, 14]."
            },
            {
                question: "Exemples de compacité (Exemple 3.2)",
                answer: "[0,1] est compact (fermé et borné). ]0,1[ n'est pas compact (non fermé). La boule fermée B̄(0,1) est compacte dans ℝⁿ[cite: 16]."
            },
            {
                question: "Proposition 4.6 : Espace C(K,E) des fonctions continues",
                answer: "Pour K compact et E espace de Banach, C(K,E) muni de la norme uniforme ||f||∞ = sup_{x∈K} ||f(x)||_E est un espace de Banach[cite: 18, 19]."
            }
        ]
    },

    // --- CATÉGORIE 2 : OPTIMISATION & RECHERCHE OPÉRATIONNELLE ---
    {
        id: "opti-theoremes",
        category: "OPTIMISATION & RECHERCHE",
        title: "1. Chapitre 1 : Théorèmes & Conditions",
        color: "#e056fd", // Violet vif
        icon: "⚡",
        description: "Conditions nécessaires du 1er ordre (CN1), conditions suffisantes du 2nd ordre (CS2) et qualifs de contraintes.",
        cards: [
            {
                question: "Condition Nécessaire du 1er ordre (CN1 - Optimisation libre)",
                answer: "Si x* est une solution (max/min), alors le gradient s'annule : ∇f(x*) = 0 ⟺ ∂f/∂xi = 0 pour tout i[cite: 37]."
            },
            {
                question: "Conditions Suffisantes du 2nd ordre (CS2 - Théorème 1)",
                answer: "Si x* est stationnaire : Hessien défini positif ⟹ minimum local ; Hessien défini négatif ⟹ maximum local ; Hessien non défini (déterminant < 0) ⟹ point selle[cite: 37]."
            },
            {
                question: "Théorème 2 (Extrema globaux via le Hessien)",
                answer: "Si le Hessien de f est semi-défini positif (resp. négatif) sur tout le domaine Df, alors le point stationnaire x* est un minimum global (resp. maximum global)[cite: 38]."
            },
            {
                question: "Conditions de qualification des contraintes d'égalité",
                answer: "Pour utiliser le Lagrangien, il suffit que la matrice jacobienne Jg (de taille p×n) soit de rang maximal p à l'optimum x*, ou que les fonctions contraintes soient linéaires[cite: 42]."
            }
        ]
    },
    {
        id: "opti-preuves",
        category: "OPTIMISATION & RECHERCHE",
        title: "2. Chapitre 1 : Outils Mathématiques & Matrices",
        color: "#f0932b", // Orange doré
        icon: "📊",
        description: "Gradient, Hessien, mineurs principaux, matrices définies positives/négatives et convexité.",
        cards: [
            {
                question: "Définition de la Matrice Hessienne (Hessien)",
                answer: "Matrice symétrique des dérivées partielles secondes : H(x) = (∂²f / ∂xi ∂j) pour i,j = 1...n[cite: 31]."
            },
            {
                question: "Caractérisation d'une matrice définie positive / négative via les mineurs",
                answer: "Définie positive ⟺ tous les n mineurs principaux diagonaux sont > 0. Définie négative ⟺ les mineurs alternent de signe en commençant par < 0[cite: 32, 33]."
            },
            {
                question: "Définition d'un ensemble convexe (Définition 1.2.5)",
                answer: "Un ensemble S est convexe si pour tout x, y ∈ S et tout t ∈ [0,1], le segment tx + (1-t)y ∈ S (tout segment reliant deux points est à l'intérieur)[cite: 34]."
            },
            {
                question: "Lien entre convexité/concavité et le Hessien (Proposition)",
                answer: "f est strictement convexe (resp. concave) si et seulement si son Hessien D²f(x) est défini positif (resp. défini négatif) sur S[cite: 36]."
            }
        ]
    },
    {
        id: "opti-propos",
        category: "OPTIMISATION & RECHERCHE",
        title: "3. Chapitre 1 : Lagrangien & Hessien Bordé",
        color: "#badc58", // Vert clair
        icon: "🎯",
        description: "Optimisation sous contraintes d'égalité, fonction du Lagrangien et méthode du Hessien bordé.",
        cards: [
            {
                question: "Introduction du Lagrangien (Contraintes d'égalité)",
                answer: "Pour max f(x,y) s.c. g(x,y)=0, on définit L(x,y,λ) = f(x,y) - λg(x,y). L'optimum s'obtient là où la différentielle de L s'annule[cite: 41]."
            },
            {
                question: "Signification économique du multiplicateur de Lagrange (λ)",
                answer: "Il donne (au signe près) une approximation de la variation de la fonction objectif f lorsqu'on augmente d'une unité la constante de la contrainte[cite: 41]."
            },
            {
                question: "Condition Nécessaire du 1er ordre avec Lagrangien (CN1)",
                answer: "Un point critique (x*, λ*) annule simultanément toutes les dérivées partielles premières du Lagrangien par rapport à chaque variable xi et à chaque multiplicateur λj[cite: 42]."
            },
            {
                question: "Méthode du Hessien Bordé (H_B) pour l'optimisation sous contraintes",
                answer: "Matrice formée du Hessien de L bordé par les gradients des p contraintes. Les (n-p) derniers mineurs principaux diagonaux permettent de classifier les extrema (max, min ou selle)[cite: 43]."
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

    // Si on est dans l'onglet "Tous", on insère les séparateurs par catégorie
    if (activeCategory === "Tous" && !query) {
        let lastCategory = null;
        filteredDecks.forEach(deck => {
            if (deck.category !== lastCategory) {
                if (lastCategory !== null) {
                    const separator = document.createElement('hr');
                    separator.className = 'category-separator';
                    decksGrid.appendChild(separator);
                }
                const titleElem = document.createElement('div');
                titleElem.className = 'category-separator-title';
                titleElem.textContent = deck.category;
                decksGrid.appendChild(titleElem);
                lastCategory = deck.category;
            }
            decksGrid.appendChild(createDeckCardElement(deck));
        });
    } else {
        filteredDecks.forEach(deck => {
            decksGrid.appendChild(createDeckCardElement(deck));
        });
    }
}

function createDeckCardElement(deck) {
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
    return card;
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
