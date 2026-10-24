/ Tes flashcards (tu peux en ajouter autant que tu veux !)
const flashcardsData = [
    { question: "Qu'est-ce que HTML ?", answer: "Un langage de balisage pour structurer des pages web." },
    { question: "Qu'est-ce que CSS ?", answer: "Un langage pour styliser et mettre en page le HTML." },
    { question: "Qu'est-ce que JavaScript ?", answer: "Un langage de programmation pour rendre les pages web interactives." }
];

let currentIndex = 0;

const flashcard = document.getElementById('flashcard');
const cardFront = document.getElementById('card-front');
const cardBack = document.getElementById('card-back');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const flipBtn = document.getElementById('flip-btn');
const counter = document.getElementById('counter');

// Fonction pour afficher la carte actuelle
function displayCard() {
    const currentCard = flashcardsData[currentIndex];
    cardFront.textContent = currentCard.question;
    cardBack.textContent = currentCard.answer;
    counter.textContent = `Carte ${currentIndex + 1} sur ${flashcardsData.length}`;
    
    // S'assurer que la carte revient sur la face avant
    flashcard.classList.remove('flipped');
}

// Retourner la carte au clic ou via le bouton
function flipCard() {
    flashcard.classList.toggle('flipped');
}

flashcard.addEventListener('click', flipCard);
flipBtn.addEventListener('click', flipCard);

// Bouton Suivant
nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % flashcardsData.length;
    displayCard();
});

// Bouton Précédent
prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + flashcardsData.length) % flashcardsData.length;
    displayCard();
});

// Initialisation au chargement
displayCard();
