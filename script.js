// Flipper: The Memory Teaser Game! 
// Where images play hide and seek with students' brains 

// DOM Element Treasure Hunt 
const imageUpload = document.getElementById('imageUpload');     // Image smuggler 
const addCardBtn = document.getElementById('addCard');          // Card spawner 
const resetBtn = document.getElementById('resetCards');         // Nuclear reset button 
const cardContainer = document.getElementById('cardContainer'); // Card playground 
const flipDurationInput = document.getElementById('flipDuration'); // Speed dial for brain torture 
const cardCounter = document.getElementById('cardCounter');     // Scorekeeper of chaos 

// Global Variables: The Puppet Masters 
let cardCount = 0;        // How many brain-melting cards we've created
let selectedImage = null; // The secret weapon of confusion 

// Image Kidnapper  Steals images from unsuspecting users
imageUpload.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
            // Muahahaha! Image captured in the memory trap 
            selectedImage = e.target.result;
        };
        reader.readAsDataURL(file);
    }
});

// Card Summoner: Bringing chaos into the classroom 
addCardBtn.addEventListener('click', () => {
    if (!selectedImage) {
        // Oops! Forgot to upload an image? Nice try, sneaky teacher! 
        alert('Please select an image first! No image, no fun! ');
        return;
    }
    createCard(selectedImage);
    updateCardCounter();
});

// The Big Red RESET Button: Destroyer of Worlds 
resetBtn.addEventListener('click', () => {
    // KABOOM! Everything goes back to zero 
    cardContainer.innerHTML = '';
    cardCount = 0;
    updateCardCounter();
    selectedImage = null;
    imageUpload.value = '';
});

// Card Factory: Where Memory Meets Mischief 
function createCard(imageUrl) {
    cardCount++; // Another victim enters the arena! 
    const card = document.createElement('div');
    card.className = 'card';
    
    card.innerHTML = `
        <div class="card-inner">
            <div class="card-front">
                ${cardCount}  
            </div>
            <div class="card-back">
                <img src="${imageUrl}" alt="Card ${cardCount} - Blink and you'll miss it! ">
            </div>
        </div>
    `;

    // Card Flip Mechanism: The Brain Teaser 
    card.addEventListener('click', () => {
        const cardInner = card.querySelector('.card-inner');
        const duration = parseInt(flipDurationInput.value);
        
        // Anti-Spam Protection: No button mashing allowed! 
        if (cardInner.style.transform === 'rotateY(180deg)') return;
        
        // FLIP! Quick as a ninja, gone in a flash 
        cardInner.style.transition = `transform ${duration}ms`;
        cardInner.style.transform = 'rotateY(180deg)';
        
        // Back to hiding! 
        setTimeout(() => {
            cardInner.style.transform = 'rotateY(0deg)';
        }, duration);
    });

    cardContainer.appendChild(card);
}

// Scorekeeper: Tracking the Chaos 
function updateCardCounter() {
    cardCounter.textContent = cardCount; // Keeping count of brain-melting cards! 
}

// Initialization: Let the Mind Games Begin! 
document.addEventListener('DOMContentLoaded', () => {
    flipDurationInput.value = 200; // Perfect amount of confusion 
    updateCardCounter();
});
