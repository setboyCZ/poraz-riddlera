document.addEventListener('DOMContentLoaded', () => {
    let lives = 6; // Počet životů

    // Funkce pro kontrolu odpovědi
    const checkAnswer = (input, correctAnswer) => {
        const userAnswer = input.value.trim().toLowerCase();
        if (userAnswer === correctAnswer) {
            showPowEffect();
            removeLife();
            input.disabled = true; // Zablokuje pole po správné odpovědi
            input.nextElementSibling.disabled = true; // Zablokuje tlačítko
        } else {
            showErrorEffect();
        }
    };

    // Odebere jeden život a aktualizuje zobrazení
    const removeLife = () => {
        if (lives > 0) {
            lives--;
            const livesElement = document.getElementById('lives');
            livesElement.textContent = '❤️ '.repeat(lives) + '🖤 '.repeat(6 - lives);

            // Zkontroluje, zda hráč vyhrál
            if (lives === 0) {
                showVictoryScreen();
            }
        }
    };

    const showPowEffect = () => {
        const powImage = document.getElementById('pow-image');
        powImage.classList.remove('hidden');
        powImage.style.opacity = 1;
    
        // Skryje obrázek po 1 sekundě
        setTimeout(() => {
            powImage.style.opacity = 0;
            setTimeout(() => {
                powImage.classList.add('hidden');
            }, 500); // Časový zpoždění pro skrytí po animaci
        }, 1000);
    };
    

    // Zobrazení efektu při chybě
    const showErrorEffect = () => {
        const errorOverlay = document.createElement('div');
        errorOverlay.id = 'error-overlay';
        document.body.appendChild(errorOverlay);
        errorOverlay.classList.add('active');

        setTimeout(() => {
            errorOverlay.classList.remove('active');
            errorOverlay.remove();
        }, 1000);
    };

    // Zobrazení výherní obrazovky
    const showVictoryScreen = () => {
        const victory = document.getElementById('victory');
        victory.classList.remove('hidden');
        victory.style.opacity = 1; // Zviditelní výherní obrazovku
        victory.style.pointerEvents = 'all';
    };

    // Přidání event listenerů na tlačítka "Zkontrolovat"
    const buttons = document.querySelectorAll('.check-answer');
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const input = button.previousElementSibling; // Najde odpovídající textové pole
            const correctAnswer = button.getAttribute('data-correct');
            checkAnswer(input, correctAnswer);
        });
    });

    // Inicializace životů na začátku
    const livesElement = document.getElementById('lives');
    livesElement.textContent = '❤️ '.repeat(lives);
});

document.addEventListener('DOMContentLoaded', () => {
    const bgImage = document.getElementById('background-image');
    let x = Math.random() * window.innerWidth; // Výchozí pozice X
    let y = Math.random() * window.innerHeight; // Výchozí pozice Y
    let dx = (Math.random() - 0.5) * 2; // Směr pohybu X
    let dy = (Math.random() - 0.5) * 2; // Směr pohybu Y
    const speed = 2; // Rychlost pohybu

    function moveBackground() {
        x += dx * speed;
        y += dy * speed;

        // Odrážení od hranic okna
        if (x <= 0 || x >= window.innerWidth - bgImage.offsetWidth) dx *= -1;
        if (y <= 0 || y >= window.innerHeight - bgImage.offsetHeight) dy *= -1;

        bgImage.style.transform = `translate(${x}px, ${y}px)`;

        requestAnimationFrame(moveBackground);
    }

    moveBackground();
});
document.addEventListener('DOMContentLoaded', () => {
    const giveUpButton = document.getElementById('give-up');
    const giveUpScreen = document.getElementById('give-up-screen');
    const retryButton = document.getElementById('retry');

    // Zobrazení správných odpovědí
    giveUpButton.addEventListener('click', () => {
        giveUpScreen.classList.remove('hidden');
        giveUpScreen.style.opacity = 1;
        giveUpScreen.style.pointerEvents = 'all';
    });

    // Restart stránky
    retryButton.addEventListener('click', () => {
        location.reload(); // Obnoví stránku
    });
});

// Zobrazení výherní obrazovky

const showVictoryScreen = () => {
    const victory = document.getElementById('victory');
    victory.classList.remove('hidden'); // Zviditelní výherní obrazovku
    victory.style.opacity = 1;
    victory.style.pointerEvents = 'all';

    const fightAgainButton = document.getElementById('fight-again');
    if (fightAgainButton) {
        fightAgainButton.addEventListener('click', () => {
            location.reload(); // Obnoví stránku
        });
    }
};


document.addEventListener('DOMContentLoaded', () => {
    const emojiContainer = document.getElementById('question-emojis');
    const emojis = [];
    const numEmojis = 242; // Počet emotikonů
    const speed = 2; // Rychlost pohybu

    // Vytvoří 42 emotikonů a přidá je do kontejneru
    for (let i = 0; i < numEmojis; i++) {
        const emoji = document.createElement('div');
        emoji.classList.add('question-emoji');
        emoji.textContent = '❓';
        emoji.style.top = `${Math.random() * window.innerHeight}px`;
        emoji.style.left = `${Math.random() * window.innerWidth}px`;
        emojiContainer.appendChild(emoji);

        // Každý emotikon má náhodnou rychlost a směr
        emojis.push({
            element: emoji,
            dx: (Math.random() - 0.5) * speed,
            dy: (Math.random() - 0.5) * speed,
            x: parseFloat(emoji.style.left),
            y: parseFloat(emoji.style.top),
        });
    }

    // Funkce pro pohyb emotikonů
    function moveEmojis() {
        emojis.forEach(emoji => {
            emoji.x += emoji.dx;
            emoji.y += emoji.dy;

            // Odrážení od hranic obrazovky
            if (emoji.x < 0 || emoji.x > window.innerWidth - 20) emoji.dx *= -1;
            if (emoji.y < 0 || emoji.y > window.innerHeight - 20) emoji.dy *= -1;

            // Aktualizace pozice
            emoji.element.style.transform = `translate(${emoji.x}px, ${emoji.y}px)`;
        });

        requestAnimationFrame(moveEmojis); // Plynulá animace
    }

    moveEmojis();
});

document.addEventListener('DOMContentLoaded', () => {
    const introImage = document.getElementById('intro-image');

    // Zobrazí obrázek při načtení stránky
    introImage.classList.add('active');

    // Skryje obrázek po 3 sekundách
    setTimeout(() => {
        introImage.classList.remove('active');
    }, 3000);
});

document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.check-answer');

    // Funkce pro zobrazení emotikonů pěsti
    const showPunchEmojis = (x, y) => {
        const emojiContainer = document.createElement('div');
        emojiContainer.classList.add('punch-emoji');
        emojiContainer.textContent = '👊';

        // Nastavení počáteční pozice emotikonu
        emojiContainer.style.left = `${x}px`;
        emojiContainer.style.top = `${y}px`;

        document.body.appendChild(emojiContainer);

        // Odstranění emotikonu po 2 sekundách
        setTimeout(() => {
            emojiContainer.remove();
        }, 2000);
    };

    // Přidání obsluhy kliknutí na tlačítka „Zkontrolovat“
    buttons.forEach(button => {
        button.addEventListener('click', (event) => {
            const rect = button.getBoundingClientRect();

            // Zobrazí emotikony pěsti poblíž tlačítka
            for (let i = 0; i < 20; i++) {
                const randomX = rect.left + Math.random() * rect.width;
                const randomY = rect.top + Math.random() * rect.height;
                showPunchEmojis(randomX, randomY);
            }
        });
    });
});
