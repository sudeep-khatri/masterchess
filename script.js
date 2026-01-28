// Chess piece image URLs from Wikimedia Commons
const pieceImages = {
    '♔': 'https://upload.wikimedia.org/wikipedia/commons/4/42/Chess_klt45.svg',
    '♕': 'https://upload.wikimedia.org/wikipedia/commons/1/15/Chess_qlt45.svg',
    '♖': 'https://upload.wikimedia.org/wikipedia/commons/7/72/Chess_rlt45.svg',
    '♗': 'https://upload.wikimedia.org/wikipedia/commons/b/b1/Chess_blt45.svg',
    '♘': 'https://upload.wikimedia.org/wikipedia/commons/7/70/Chess_nlt45.svg',
    '♙': 'https://upload.wikimedia.org/wikipedia/commons/4/45/Chess_plt45.svg',
    '♚': 'https://upload.wikimedia.org/wikipedia/commons/f/f0/Chess_kdt45.svg',
    '♛': 'https://upload.wikimedia.org/wikipedia/commons/4/47/Chess_qdt45.svg',
    '♜': 'https://upload.wikimedia.org/wikipedia/commons/f/ff/Chess_rdt45.svg',
    '♝': 'https://upload.wikimedia.org/wikipedia/commons/9/98/Chess_bdt45.svg',
    '♞': 'https://upload.wikimedia.org/wikipedia/commons/e/ef/Chess_ndt45.svg',
    '♟': 'https://upload.wikimedia.org/wikipedia/commons/c/c7/Chess_pdt45.svg'
};

// Board configurations for each opening
const boardConfigs = {
    heroBoard: [
        ['♜', '♞', '♝', '♛', '♚', '♝', '♞', '♜'],
        ['♟', '♟', '♟', '♟', '♟', '♟', '♟', '♟'],
        ['', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', ''],
        ['♙', '♙', '♙', '♙', '♙', '♙', '♙', '♙'],
        ['♖', '♘', '♗', '♕', '♔', '♗', '♘', '♖']
    ],
    italianGame: [
        ['♜', '♞', '♝', '♛', '♚', '', '', '♜'],
        ['♟', '♟', '♟', '♟', '', '♟', '♟', '♟'],
        ['', '', '♞', '', '', '', '', ''],
        ['', '', '♝', '', '♟', '', '', ''],
        ['', '', '♗', '', '♙', '', '', ''],
        ['', '', '', '', '', '♘', '', ''],
        ['♙', '♙', '♙', '♙', '', '♙', '♙', '♙'],
        ['♖', '♘', '♗', '♕', '♔', '', '', '♖']
    ],
    ruyLopez: [
        ['♜', '♞', '♝', '♛', '♚', '♝', '', '♜'],
        ['♟', '♟', '♟', '♟', '', '♟', '♟', '♟'],
        ['', '', '♞', '', '', '', '', ''],
        ['', '♗', '', '', '♟', '', '', ''],
        ['', '', '', '', '♙', '', '', ''],
        ['', '', '', '', '', '♘', '', ''],
        ['♙', '♙', '♙', '♙', '', '♙', '♙', '♙'],
        ['♖', '♘', '♗', '♕', '♔', '', '', '♖']
    ],
    queensGambit: [
        ['♜', '♞', '♝', '♛', '♚', '♝', '♞', '♜'],
        ['♟', '♟', '♟', '', '♟', '♟', '♟', '♟'],
        ['', '', '', '', '', '', '', ''],
        ['', '', '', '♟', '', '', '', ''],
        ['', '', '♙', '♙', '', '', '', ''],
        ['', '', '', '', '', '', '', ''],
        ['♙', '♙', '', '', '♙', '♙', '♙', '♙'],
        ['♖', '♘', '♗', '♕', '♔', '♗', '♘', '♖']
    ],
    londonSystem: [
        ['♜', '♞', '♝', '♛', '♚', '♝', '♞', '♜'],
        ['♟', '♟', '♟', '', '♟', '♟', '♟', '♟'],
        ['', '', '', '', '', '', '', ''],
        ['', '', '', '♟', '', '', '', ''],
        ['', '', '', '♙', '', '♗', '', ''],
        ['', '', '', '', '', '', '', ''],
        ['♙', '♙', '♙', '', '♙', '♙', '♙', '♙'],
        ['♖', '♘', '', '♕', '♔', '♗', '♘', '♖']
    ],
    sicilianDefense: [
        ['♖', '♘', '♗', '♔', '♕', '♗', '♘', '♖'],
        ['♙', '♙', '♙', '', '♙', '♙', '♙', '♙'],
        ['', '', '', '', '', '', '', ''],
        ['', '', '', '', '♙', '', '', ''],
        ['', '', '', '', '', '♟', '', ''],
        ['', '', '', '', '', '', '', ''],
        ['♟', '♟', '♟', '♟', '', '♟', '♟', '♟'],
        ['♜', '♞', '♝', '♚', '♛', '♝', '♞', '♜']
    ],
    frenchDefense: [
        ['♖', '♘', '♗', '♔', '♕', '♗', '♘', '♖'],
        ['♙', '♙', '♙', '', '♙', '♙', '♙', '♙'],
        ['', '', '', '', '', '', '', ''],
        ['', '', '', '', '♙', '', '', ''],
        ['', '', '', '', '', '', '', ''],
        ['', '', '', '♟', '', '', '', ''],
        ['♟', '♟', '♟', '♟', '', '♟', '♟', '♟'],
        ['♜', '♞', '♝', '♚', '♛', '♝', '♞', '♜']
    ],
    caroKann: [
        ['♖', '♘', '♗', '♔', '♕', '♗', '♘', '♖'],
        ['♙', '♙', '♙', '', '', '♙', '♙', '♙'],
        ['', '', '', '', '', '', '', ''],
        ['', '', '', '♙', '♙', '', '', ''],
        ['', '', '', '♟', '', '', '', ''],
        ['', '', '♟', '', '', '', '', ''],
        ['♟', '♟', '♟', '♟', '', '♟', '♟', '♟'],
        ['♜', '♞', '♝', '♚', '♛', '♝', '♞', '♜']
    ],
    kingsIndian: [
        ['♖', '♘', '♗', '♔', '♕', '♗', '', '♖'],
        ['♙', '♙', '♙', '♙', '', '', '♙', '♙'],
        ['', '', '', '', '', '♘', '', ''],
        ['', '', '', '', '', '♙', '♙', ''],
        ['', '', '', '', '', '', '', ''],
        ['', '♟', '♞', '', '', '', '', ''],
        ['♟', '♝', '♟', '♟', '♟', '♟', '♟', '♟'],
        ['♜', '', '', '♚', '♛', '♝', '♞', '♜']
    ]
};

// Create a chessboard
function createChessboard(boardId, config) {
    const board = document.getElementById(boardId);
    if (!board) return;

    board.innerHTML = '';
    
    for (let row = 0; row < 8; row++) {
        for (let col = 0; col < 8; col++) {
            const square = document.createElement('div');
            square.className = 'square';
            
            // Alternate colors
            if ((row + col) % 2 === 0) {
                square.classList.add('white');
            } else {
                square.classList.add('black');
            }
            
            // Add piece if exists
            const piece = config[row][col];
            if (piece && pieceImages[piece]) {
                const pieceElement = document.createElement('img');
                pieceElement.className = 'piece';
                pieceElement.src = pieceImages[piece];
                pieceElement.alt = piece;
                pieceElement.draggable = false;
                square.appendChild(pieceElement);
            }
            
            board.appendChild(square);
        }
    }
}

// Animate pieces on hero board
function animateHeroBoard() {
    const heroBoard = document.getElementById('heroBoard');
    if (!heroBoard) return;

    const squares = heroBoard.querySelectorAll('.square');
    
    // Highlight random squares periodically
    setInterval(() => {
        const randomIndex = Math.floor(Math.random() * squares.length);
        const square = squares[randomIndex];
        
        if (square.querySelector('.piece')) {
            square.classList.add('highlight');
            setTimeout(() => {
                square.classList.remove('highlight');
            }, 1500);
        }
    }, 3000);
}

// Intersection Observer for scroll animations
function setupScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    });

    document.querySelectorAll('.scroll-fade').forEach(element => {
        observer.observe(element);
    });
}

// Smooth scroll for navigation links
function setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offsetTop = target.offsetTop - 80; // Account for fixed header
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Interactive piece dragging effect
function setupPieceInteraction() {
    document.querySelectorAll('.chessboard').forEach(board => {
        const squares = board.querySelectorAll('.square');
        
        squares.forEach(square => {
            square.addEventListener('click', function() {
                // Remove previous selection
                board.querySelectorAll('.square').forEach(s => {
                    s.style.transform = '';
                    s.style.zIndex = '';
                });
                
                // Highlight clicked square
                if (this.querySelector('.piece')) {
                    this.style.transform = 'scale(1.03)';
                    this.style.zIndex = '100';
                    
                    // Reset after animation
                    setTimeout(() => {
                        this.style.transform = '';
                        this.style.zIndex = '';
                    }, 300);
                }
            });
        });
    });
}

// Add parallax effect to hero section
function setupParallax() {
    // Disable parallax on mobile devices to prevent glitches
    if (window.innerWidth <= 768) return;
    
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const hero = document.querySelector('.hero');
        
        if (hero && scrolled < hero.offsetHeight) {
            hero.style.transform = `translateY(${scrolled * 0.5}px)`;
        }
    });
}

// Header scroll effect
function setupHeaderEffect() {
    const header = document.querySelector('.header');
    let lastScroll = 0;
    
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 100) {
            header.style.background = 'rgba(44, 62, 80, 1)';
            header.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.3)';
        } else {
            header.style.background = 'rgba(44, 62, 80, 0.95)';
            header.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.1)';
        }
        
        lastScroll = currentScroll;
    });
}

// Initialize random piece movements on boards
function animateBoards() {
    // Removed automatic floating animation for a cleaner look
}

// Add typing effect to hero title
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.textContent = '';
    
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Create all chessboards
    Object.keys(boardConfigs).forEach(boardId => {
        createChessboard(boardId, boardConfigs[boardId]);
    });
    
    // Setup all interactions and animations
    setupScrollAnimations();
    setupSmoothScroll();
    setupPieceInteraction();
    setupParallax();
    setupHeaderEffect();
    animateHeroBoard();
    animateBoards();
    setupSidebar();
    
    // Initialize puzzles and tips
    if (typeof chessPuzzles !== 'undefined') {
        loadPuzzles();
        setupPuzzleFilters();
    }
    
    if (typeof chessTips !== 'undefined') {
        loadTips();
    }
    
    // Add dynamic effects
    setTimeout(() => {
        const cards = document.querySelectorAll('.opening-card');
        cards.forEach((card, index) => {
            card.style.animationDelay = `${index * 0.1}s`;
        });
    }, 100);
});

// Setup sidebar functionality
function setupSidebar() {
    const hamburger = document.getElementById('hamburger');
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('sidebarOverlay');
    const closeSidebar = document.getElementById('closeSidebar');
    const sidebarLinks = document.querySelectorAll('.sidebar-link');
    
    // Open sidebar
    hamburger?.addEventListener('click', () => {
        sidebar.classList.add('active');
        overlay.classList.add('active');
        hamburger.classList.add('active');
        document.body.style.overflow = 'hidden';
    });
    
    // Close sidebar function
    const closeSidebarMenu = () => {
        sidebar.classList.remove('active');
        overlay.classList.remove('active');
        hamburger.classList.remove('active');
        document.body.style.overflow = '';
    };
    
    // Close sidebar with close button
    closeSidebar?.addEventListener('click', closeSidebarMenu);
    
    // Close sidebar when clicking overlay
    overlay?.addEventListener('click', closeSidebarMenu);
    
    // Close sidebar when clicking a link
    sidebarLinks.forEach(link => {
        link.addEventListener('click', closeSidebarMenu);
    });
}

// Load and display puzzles
function loadPuzzles(filter = 'all') {
    const container = document.getElementById('puzzleContainer');
    if (!container) return;
    
    container.innerHTML = '';
    
    let filteredPuzzles = chessPuzzles;
    if (filter !== 'all') {
        filteredPuzzles = chessPuzzles.filter(p => p.type === filter);
    }
    
    filteredPuzzles.forEach(puzzle => {
        const puzzleCard = createPuzzleCard(puzzle);
        container.appendChild(puzzleCard);
    });
    
    // Create chess boards after cards are in DOM
    setTimeout(() => {
        filteredPuzzles.forEach(puzzle => {
            const boardElement = document.getElementById(`puzzle-board-${puzzle.id}`);
            if (boardElement) {
                createChessboard(`puzzle-board-${puzzle.id}`, puzzle.board);
            }
        });
    }, 50);
    
    // Setup scroll animations for new elements
    setupScrollAnimations();
}

// Create a puzzle card element
function createPuzzleCard(puzzle) {
    const card = document.createElement('div');
    card.className = 'puzzle-card scroll-fade';
    
    const difficultyClass = `difficulty-${puzzle.difficulty}`;
    
    card.innerHTML = `
        <div class="puzzle-header">
            <span class="puzzle-number">Puzzle #${puzzle.id}</span>
            <span class="puzzle-difficulty ${difficultyClass}">${puzzle.difficulty.toUpperCase()}</span>
        </div>
        <span class="puzzle-type">${getPuzzleTypeLabel(puzzle.type)}</span>
        <div class="puzzle-board-container">
            <div class="chessboard" id="puzzle-board-${puzzle.id}"></div>
        </div>
        <p class="puzzle-description">${puzzle.description}</p>
        <p style="font-weight: 600; color: #555; margin-bottom: 0.5rem;">${puzzle.toMove === 'white' ? 'White' : 'Black'} to move</p>
        <div class="puzzle-actions">
            <button class="solution-btn" onclick="toggleSolution(${puzzle.id})">Show Solution</button>
        </div>
        <div class="solution-content" id="solution-${puzzle.id}">
            <div class="solution-box">
                <h4>Solution:</h4>
                <div class="move-sequence">${puzzle.solution.moves}</div>
                <p>${puzzle.solution.explanation}</p>
            </div>
        </div>
    `;
    
    return card;
}

// Toggle puzzle solution
function toggleSolution(puzzleId) {
    const solution = document.getElementById(`solution-${puzzleId}`);
    solution.classList.toggle('active');
    
    const button = event.target;
    if (solution.classList.contains('active')) {
        button.textContent = 'Hide Solution';
    } else {
        button.textContent = 'Show Solution';
    }
}

// Get puzzle type label
function getPuzzleTypeLabel(type) {
    const labels = {
        'checkmate': 'Checkmate',
        'sacrifice': 'Brilliant Sacrifice',
        'winning': 'Win Material',
        'tactics': 'Tactical Motif'
    };
    return labels[type] || type;
}

// Setup puzzle filter buttons
function setupPuzzleFilters() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remove active class from all buttons
            filterBtns.forEach(b => b.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');
            
            // Load filtered puzzles
            const filter = this.getAttribute('data-filter');
            loadPuzzles(filter);
        });
    });
}

// Load and display tips
function loadTips() {
    loadTipCategory('openingTips', chessTips.opening);
    loadTipCategory('middlegameTips', chessTips.middlegame);
    loadTipCategory('endgameTips', chessTips.endgame);
    loadTipCategory('tacticalTips', chessTips.tactical);
    loadTipCategory('ratingTips', chessTips.rating);
}

// Load a category of tips
function loadTipCategory(containerId, tips) {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    tips.forEach(tip => {
        const tipElement = createTipElement(tip);
        container.appendChild(tipElement);
    });
}

// Create a tip element
function createTipElement(tip) {
    const tipDiv = document.createElement('div');
    tipDiv.className = 'tip-item';
    
    tipDiv.innerHTML = `
        <div class="tip-header" onclick="toggleTip(this)">
            <span class="tip-title">Tip #${tip.id}: ${tip.title}</span>
            <span class="tip-toggle">▼</span>
        </div>
        <div class="tip-content">
            <div class="tip-body">
                <p>${tip.content}</p>
            </div>
        </div>
    `;
    
    return tipDiv;
}

// Toggle tip expansion
function toggleTip(header) {
    const tipItem = header.parentElement;
    tipItem.classList.toggle('active');
}

// Add mouse trail effect on hero section
let mouseX = 0;
let mouseY = 0;

document.querySelector('.hero')?.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    
    const hero = document.querySelector('.hero');
    const rect = hero.getBoundingClientRect();
    const x = ((mouseX - rect.left) / rect.width - 0.5) * 5;
    const y = ((mouseY - rect.top) / rect.height - 0.5) * 5;
    
    const board = document.querySelector('.hero-chess');
    if (board) {
        board.style.transform = `perspective(1000px) rotateY(${x}deg) rotateX(${-y}deg)`;
        board.style.transition = 'transform 0.3s ease-out';
    }
});

// Reset board transform when mouse leaves
document.querySelector('.hero')?.addEventListener('mouseleave', () => {
    const board = document.querySelector('.hero-chess');
    if (board) {
        board.style.transform = '';
    }
});

// Add keyboard navigation
document.addEventListener('keydown', (e) => {
    const sections = ['home', 'white-openings', 'black-openings', 'puzzles', 'tips', 'about'];
    const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (!element) return false;
        const rect = element.getBoundingClientRect();
        return rect.top <= 100 && rect.bottom >= 100;
    });
    
    if (!currentSection) return;
    
    const currentIndex = sections.indexOf(currentSection);
    
    if (e.key === 'ArrowDown' && currentIndex < sections.length - 1) {
        const nextSection = document.getElementById(sections[currentIndex + 1]);
        if (nextSection) {
            nextSection.scrollIntoView({ behavior: 'smooth' });
        }
    } else if (e.key === 'ArrowUp' && currentIndex > 0) {
        const prevSection = document.getElementById(sections[currentIndex - 1]);
        if (prevSection) {
            prevSection.scrollIntoView({ behavior: 'smooth' });
        }
    }
});

console.log('Chess Openings Masterclass loaded successfully! ♔');
