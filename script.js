
const galleries = {
    webdev: {
        title: "Développement Web",
        cards: [
            { question: "Que signifie HTML ?", answer: "HyperText Markup Language" },
            { question: "À quoi sert le CSS ?", answer: "À styliser et mettre en forme les pages HTML." },
            { question: "Quel est le rôle du JS ?", answer: "Rendre les pages web dynamiques et interactives." }
        ]
    },
    anglais: {
        title: "Vocabulaire Anglais",
        cards: [
            { question: "To achieve", answer: "Accomplir / Réussir" },
            { question: "Improvement", answer: "Amélioration" },
            { question: "Knowledge", answer: "Connaissance / Savoir" }
        ]
    }
};

let currentDeckKey = null;
let currentCardIndex = 0;
let score = 0;

// Éléments du DOM
const galleryView = document.getElementById('gallery-view');
const cardView = document.getElementById('card-view');
const resultsView = document.getElementById('results-view');

const deckList = document.getElementById('deck-list');
const currentDeckTitle = document.getElementById('current-deck-title');
const flashcard = document.getElementById('flashcard');
const cardFront = document.getElementById('card-front');
const cardBack = document.getElementById('card-back');
const counter = document.getElementById('counter');

const flipBtn = document.getElementById('flip-btn');
const correctBtn = document.getElementById('correct-btn');
const wrongBtn = document.getElementById('wrong-btn');
const backToGalleryBtn = document.getElementById('back-to-gallery');
const restartBtn = document.getElementById('restart-btn');
const homeBtn = document.getElementById('home-btn');

// Initialiser la vue des galeries
function initGalleries() {
    deckList.innerHTML = '';
    Object.keys(galleries).forEach(key => {
        const deck = galleries[key];
        const cardElem = document.createElement('div');
        cardElem.className = 'deck-card';
        cardElem.innerHTML = `
            <h3>${deck.title}</h3>
            <p>${deck.cards.length} cartes</p>
        `;
        cardElem.addEventListener('click', () => startDeck(key));
        deckList.appendChild(cardElem);
    });
}

// Démarrer une galerie
function startDeck(key) {
    currentDeckKey = key;
    currentCardIndex = 0;
    score = 0;

    currentDeckTitle.textContent = galleries[key].title;
    
    galleryView.classList.add('hidden');
    resultsView.classList.add('hidden');
    cardView.classList.remove('hidden');

    displayCard();
}

// Afficher la carte actuelle
function displayCard() {
    const deck = galleries[currentDeckKey];
    const card = deck.cards[currentCardIndex];

    cardFront.textContent = card.question;
    cardBack.textContent = card.answer;
    counter.textContent = `Carte ${currentCardIndex + 1} sur ${deck.cards.length}`;

    flashcard.classList.remove('flipped');
}

// Passer à la carte suivante ou afficher le score
function handleAnswer(isCorrect) {
    if (isCorrect) score++;

    const deck = galleries[currentDeckKey];
    currentCardIndex++;

    if (currentCardIndex < deck.cards.length) {
        displayCard();
    } else {
        showResults();
    }
}

// Afficher les résultats
function showResults() {
    const deck = galleries[currentDeckKey];
    cardView.classList.add('hidden');
    resultsView.classList.remove('hidden');

    const scoreDisplay = document.getElementById('final-score');
    const scoreMessage = document.getElementById('score-message');

    scoreDisplay.textContent = `${score} / ${deck.cards.length}`;

    if (score === deck.cards.length) {
        scoreMessage.textContent = "Parfait ! Vous maîtrisez ce paquet à 100% 🏆";
    } else if (score >= deck.cards.length / 2) {
        scoreMessage.textContent = "Bien joué ! Encore un petit effort 💪";
    } else {
        scoreMessage.textContent = "Continuez à réviser, ça va venir ! 📖";
    }
}

// Événements
flashcard.addEventListener('click', () => flashcard.classList.toggle('flipped'));
flipBtn.addEventListener('click', () => flashcard.classList.toggle('flipped'));

correctBtn.addEventListener('click', () => handleAnswer(true));
wrongBtn.addEventListener('click', () => handleAnswer(false));

backToGalleryBtn.addEventListener('click', () => {
    cardView.classList.add('hidden');
    galleryView.classList.remove('hidden');
});

homeBtn.addEventListener('click', () => {
    resultsView.classList.add('hidden');
    galleryView.classList.remove('hidden');
});

restartBtn.addEventListener('click', () => startDeck(currentDeckKey));

// Lancement au chargement de la page
initGalleries();
