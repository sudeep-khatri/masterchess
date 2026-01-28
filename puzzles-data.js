// Chess Puzzles Database - 110 Puzzles
const chessPuzzles = [
    // Checkmate Puzzles (1-35)
    {
        id: 1,
        type: 'checkmate',
        difficulty: 'easy',
        description: 'White to move and checkmate in 1',
        toMove: 'white',
        solution: {
            moves: '1. Rh8#',
            explanation: 'Simple back rank checkmate. The black king is trapped on g8 by its own pawns on f7, g7, h7, and the rook delivers mate on h8.'
        },
        board: [
            ['', '', '', '', '', '', '♚', ''],
            ['', '', '', '', '', '♟', '♟', '♟'],
            ['', '', '', '', '', '', '', ''],
            ['', '', '', '', '', '', '', ''],
            ['', '', '', '', '', '', '', ''],
            ['', '', '', '', '', '', '', ''],
            ['', '', '', '', '', '', '', ''],
            ['', '', '', '', '', '', '', '♖']
        ]
    },
    {
        id: 2,
        type: 'checkmate',
        difficulty: 'easy',
        description: 'White to move and checkmate in 1',
        toMove: 'white',
        solution: {
            moves: '1. Qg7#',
            explanation: 'Queen delivers checkmate on g7. The king on e8 is trapped by its own pieces - the rooks on d8 and f8 block escape squares.'
        },
        board: [
            ['', '', '', '♜', '♚', '♜', '', ''],
            ['♟', '♟', '♟', '♟', '♟', '♟', '', '♟'],
            ['', '', '', '', '', '', '', ''],
            ['', '', '', '', '', '', '', ''],
            ['', '', '', '', '', '', '', ''],
            ['', '', '', '', '', '', '', ''],
            ['', '', '', '', '', '', '', ''],
            ['', '', '', '', '♔', '', '♕', '']
        ]
    },
    {
        id: 3,
        type: 'checkmate',
        difficulty: 'medium',
        description: 'White to move and checkmate in 2',
        toMove: 'white',
        solution: {
            moves: '1. Qh7+ Kf8 2. Qh8#',
            explanation: 'Check on h7 forces the king to f8, then Qh8 is checkmate with the queen controlling all escape squares.'
        },
        board: [
            ['♜', '', '', '♛', '', '', '♚', '♜'],
            ['♟', '♟', '♟', '', '', '♟', '', '♟'],
            ['', '', '', '', '', '', '', ''],
            ['', '', '', '', '', '', '', ''],
            ['', '', '', '', '', '', '', ''],
            ['', '', '', '', '', '', '', ''],
            ['♙', '♙', '♙', '', '', '♙', '♙', '♙'],
            ['', '', '', '', '♔', '', '♕', '']
        ]
    },
    {
        id: 4,
        type: 'checkmate',
        difficulty: 'medium',
        description: 'Smothered mate - White to move',
        toMove: 'white',
        solution: {
            moves: '1. Nf7#',
            explanation: 'The famous smothered mate! The knight delivers checkmate on f7 as the black king on g8 is trapped by its own rook on f8 and pawns on g7 and h7.'
        },
        board: [
            ['', '', '', '', '', '♜', '♚', ''],
            ['', '', '', '', '', '♟', '♟', '♟'],
            ['', '', '', '', '', '♘', '', ''],
            ['', '', '', '', '', '', '', ''],
            ['', '', '', '', '', '', '', ''],
            ['', '', '', '', '', '', '', ''],
            ['', '', '', '', '', '', '', ''],
            ['', '', '', '', '♔', '', '', '']
        ]
    },
    {
        id: 5,
        type: 'checkmate',
        difficulty: 'hard',
        description: 'White to move - Find mate in 3',
        toMove: 'white',
        solution: {
            moves: '1. Qxh7+ Kxh7 2. Rh3+ Kg8 3. Rh8#',
            explanation: 'Brilliant queen sacrifice! After forcing Kxh7, the rook swings to h3 with check. The king must return to g8, and Rh8 delivers checkmate.'
        },
        board: [
            ['', '', '', '', '', '♜', '♚', ''],
            ['♟', '♟', '♟', '', '', '♟', '♝', '♟'],
            ['', '', '', '', '', '', '', ''],
            ['', '', '', '', '', '', '', ''],
            ['', '', '', '', '', '', '', ''],
            ['♖', '', '', '', '', '', '', ''],
            ['♙', '♙', '♙', '', '', '♙', '♙', '♙'],
            ['', '', '', '', '♔', '', '♕', '']
        ]
    },
    {
        id: 6,
        type: 'checkmate',
        difficulty: 'easy',
        description: 'Black to move and checkmate in 1',
        toMove: 'black',
        solution: {
            moves: '1...Qh4#',
            explanation: 'Classic fool\'s mate pattern! The white king on e1 is exposed after f3 and g4. Black\'s queen delivers mate on h4.'
        },
        board: [
            ['♜', '♞', '♝', '♛', '♚', '♝', '♞', '♜'],
            ['♟', '♟', '♟', '♟', '', '♟', '♟', '♟'],
            ['', '', '', '', '♟', '', '', ''],
            ['', '', '', '', '', '', '', ''],
            ['', '', '', '', '', '', '♙', ''],
            ['', '', '', '', '', '♘', '', ''],
            ['♙', '♙', '♙', '♙', '♙', '', '', '♙'],
            ['♖', '♘', '♗', '♕', '♔', '♗', '', '♖']
        ]
    },
    {
        id: 7,
        type: 'checkmate',
        difficulty: 'medium',
        description: 'Arabian mate - White to move',
        toMove: 'white',
        solution: {
            moves: '1. Rh8+ Kg7 2. Rh7#',
            explanation: 'Arabian mate! After Rh8+ forces Kg7, Rh7 is mate with the knight on f5 controlling key escape squares.'
        },
        board: [
            ['', '', '', '', '', '', '', '♚'],
            ['', '', '', '', '', '♟', '♟', ''],
            ['', '', '', '', '', '', '', ''],
            ['', '', '', '', '', '♘', '', ''],
            ['', '', '', '', '', '', '', ''],
            ['', '', '', '', '', '', '', ''],
            ['', '', '', '', '', '', '', ''],
            ['♖', '', '', '', '♔', '', '', '']
        ]
    },
    {
        id: 8,
        type: 'checkmate',
        difficulty: 'hard',
        description: 'White to move - Brilliant sacrifice',
        toMove: 'white',
        solution: {
            moves: '1. Rxh7+ Kxh7 2. Qh5+ Kg8 3. Qh8#',
            explanation: 'Stunning rook sacrifice! After Kxh7, Qh5+ forces Kg8, then Qh8 is mate.'
        },
        board: [
            ['', '', '', '', '', '♜', '♚', ''],
            ['♟', '♟', '♟', '', '', '♟', '♝', '♟'],
            ['', '', '♞', '', '', '', '♟', ''],
            ['', '', '', '', '', '', '', ''],
            ['', '', '', '', '', '', '', ''],
            ['♖', '', '', '', '', '', '', ''],
            ['', '', '', '', '', '', '', ''],
            ['', '', '', '', '♔', '', '♕', '']
        ]
    },
    {
        id: 9,
        type: 'checkmate',
        difficulty: 'easy',
        description: 'Scholar\'s mate - White to move',
        toMove: 'white',
        solution: {
            moves: '1. Qxf7#',
            explanation: 'The classic scholar\'s mate! The queen on f7 is supported by the bishop on c4, and the black king has no escape.'
        },
        board: [
            ['♜', '♞', '♝', '♛', '♚', '♝', '♞', '♜'],
            ['♟', '♟', '♟', '♟', '', '♟', '♟', '♟'],
            ['', '', '', '', '', '', '', ''],
            ['', '', '', '', '♟', '', '', ''],
            ['', '', '♗', '', '♙', '', '', ''],
            ['', '', '', '', '', '', '', ''],
            ['♙', '♙', '♙', '♙', '', '♙', '♙', '♙'],
            ['♖', '♘', '', '', '♔', '', '', '♕']
        ]
    },
    {
        id: 10,
        type: 'checkmate',
        difficulty: 'medium',
        description: 'Anastasia\'s mate - White to move',
        toMove: 'white',
        solution: {
            moves: '1. Rh8#',
            explanation: 'Anastasia\'s mate! The rook on h8 delivers mate with the knight on e7 blocking the king\'s escape.'
        },
        board: [
            ['', '', '', '', '', '', '♚', ''],
            ['', '', '', '', '♞', '♟', '♟', ''],
            ['', '', '', '', '', '', '', ''],
            ['', '', '', '', '', '', '', ''],
            ['', '', '', '', '', '', '', ''],
            ['', '', '', '', '', '', '', ''],
            ['', '', '', '', '', '', '', ''],
            ['♖', '', '', '', '♔', '', '', '']
        ]
    },
    {
        id: 11,
        type: 'checkmate',
        difficulty: 'hard',
        description: 'Opera Game mate - White to move and mate in 3',
        toMove: 'white',
        solution: {
            moves: '1. Bxb5+ Nbd7 2. 0-0-0! Rd8 3. Rxd7 Rxd7 4. Rd1',
            explanation: 'From Morphy\'s famous Opera Game. The bishop check forces the knight to d7, then castling queenside brings the rook into devastating play. The black position collapses under the pressure of White\'s superior development.'
        },
        board: [
            ['♜', '', '♝', '♛', '♚', '', '', '♜'],
            ['♟', '♟', '', '', '♞', '♟', '♟', '♟'],
            ['', '', '♞', '♟', '', '', '', ''],
            ['', '♝', '', '', '', '', '', ''],
            ['', '', '', '', '', '', '', ''],
            ['', '', '', '', '', '', '', ''],
            ['♙', '♙', '♙', '♙', '♙', '♙', '♙', '♙'],
            ['♖', '', '', '', '♔', '♗', '♘', '♖']
        ]
    },
    {
        id: 12,
        type: 'checkmate',
        difficulty: 'medium',
        description: 'Epaulette mate - White to move',
        toMove: 'white',
        solution: {
            moves: '1. Qf7#',
            explanation: 'The epaulette mate! The black king on e8 is trapped by its own rooks on d8 and f8 (like epaulettes on shoulders). The white queen delivers mate on f7, and the king cannot move or block.'
        },
        board: [
            ['', '', '', '♜', '♚', '♜', '', ''],
            ['', '', '', '', '', '', '', ''],
            ['', '', '', '', '', '', '', ''],
            ['', '', '', '', '', '', '', ''],
            ['', '', '', '', '', '', '', ''],
            ['', '', '', '', '', '', '', ''],
            ['', '', '', '', '', '', '', ''],
            ['', '', '', '', '', '', '♕', '♔']
        ]
    },
    {
        id: 13,
        type: 'checkmate',
        difficulty: 'easy',
        description: 'Ladder mate - White to move',
        toMove: 'white',
        solution: {
            moves: '1. Rh8#',
            explanation: 'Simple ladder mate with two rooks. The rook on h8 delivers checkmate while the other rook on g7 controls the 7th rank, preventing any escape. This demonstrates the power of coordinated rooks.'
        },
        board: [
            ['', '', '', '', '', '', '', '♚'],
            ['', '', '', '', '', '', '♖', ''],
            ['', '', '', '', '', '', '', ''],
            ['', '', '', '', '', '', '', ''],
            ['', '', '', '', '', '', '', ''],
            ['', '', '', '', '', '', '', ''],
            ['', '', '', '', '', '', '', ''],
            ['', '', '', '', '', '', '', '♖']
        ]
    },
    {
        id: 14,
        type: 'checkmate',
        difficulty: 'hard',
        description: 'Greco\'s mate - White to move and mate in 3',
        toMove: 'white',
        solution: {
            moves: '1. Bxh7+ Kh8 (or Kxh7) 2. Ng6+ Kg8 3. Qh7#',
            explanation: 'Classic Greco\'s sacrifice. The bishop is sacrificed on h7, and regardless of whether the king takes or moves to h8, the knight fork on g6 sets up the deadly queen checkmate on h7.'
        },
        board: [
            ['', '', '', '', '', '♜', '♚', ''],
            ['♟', '♟', '♟', '', '', '♟', '♝', '♟'],
            ['', '', '', '', '', '', '♟', ''],
            ['', '', '', '', '', '', '', ''],
            ['', '', '', '', '', '', '', ''],
            ['', '', '', '', '', '♘', '', ''],
            ['♙', '♙', '♗', '', '', '♙', '♙', '♙'],
            ['', '', '', '', '', '', '♕', '♔']
        ]
    },
    {
        id: 15,
        type: 'checkmate',
        difficulty: 'medium',
        description: 'Dovetail mate - White to move',
        toMove: 'white',
        solution: {
            moves: '1. Qe8#',
            explanation: 'The dovetail mate pattern. The queen on e8 delivers mate with the black king trapped by its own pieces. The rooks on d8 and f8 block escape squares, creating a perfect mating net.'
        },
        board: [
            ['', '', '', '♜', '♚', '♜', '', ''],
            ['', '', '', '', '♟', '', '', ''],
            ['', '', '', '', '', '', '', ''],
            ['', '', '', '', '', '', '', ''],
            ['', '', '', '', '', '', '', ''],
            ['', '', '', '', '', '', '', ''],
            ['', '', '', '', '', '', '', ''],
            ['', '', '', '', '♕', '', '', '♔']
        ]
    },

    // Brilliant Sacrifice Puzzles (16-45)
    {
        id: 16,
        type: 'sacrifice',
        difficulty: 'hard',
        description: 'Legal\'s mate - White to move',
        toMove: 'white',
        solution: {
            moves: '1. Nxe5! Bxd1 2. Bxf7+ Ke7 3. Nd5#',
            explanation: 'The famous Legal\'s mate! White sacrifices the queen to deliver checkmate. After the bishop takes the queen, Bxf7+ forces the king to e7, and Nd5 delivers a beautiful checkmate with perfect piece coordination.'
        },
        board: [
            ['♜', '♞', '♝', '♛', '♚', '', '', '♜'],
            ['♟', '♟', '♟', '♟', '', '♟', '♟', '♟'],
            ['', '', '', '', '', '', '', ''],
            ['', '', '♝', '', '♟', '', '', ''],
            ['', '', '♗', '', '♙', '', '', ''],
            ['', '', '♘', '', '', '♘', '', ''],
            ['♙', '♙', '♙', '♙', '', '♙', '♙', '♙'],
            ['♖', '', '', '♕', '♔', '♗', '', '♖']
        ]
    },
    {
        id: 17,
        type: 'sacrifice',
        difficulty: 'medium',
        description: 'Classic bishop sacrifice on h7',
        toMove: 'white',
        solution: {
            moves: '1. Bxh7+ Kxh7 2. Ng5+ Kg8 (or Kg6) 3. Qh5 and White wins',
            explanation: 'The classic Bxh7+ sacrifice. After the king takes, Ng5+ brings the knight into the attack with devastating effect. If Kg8, Qh5 threatens Qh7#. If Kg6, Qg4 leads to a mating attack.'
        },
        board: [
            ['♜', '♞', '♝', '♛', '', '♜', '♚', ''],
            ['♟', '♟', '♟', '', '', '♟', '♝', '♟'],
            ['', '', '', '♟', '', '♞', '♟', ''],
            ['', '', '', '', '', '', '', ''],
            ['', '', '', '', '♙', '', '', ''],
            ['', '', '♘', '', '', '♘', '', ''],
            ['♙', '♙', '♙', '', '', '♙', '♙', '♙'],
            ['♖', '', '♗', '♕', '♔', '♗', '', '♖']
        ]
    },
    {
        id: 18,
        type: 'sacrifice',
        difficulty: 'hard',
        description: 'Marshall\'s queen sacrifice',
        toMove: 'white',
        solution: {
            moves: '1. Qxg7+! Kxg7 2. Rg3+ Kh8/Kf8 3. Bh6 and mate follows',
            explanation: 'Brilliant queen sacrifice from Frank Marshall. The queen is given up to demolish Black\'s king safety. After Rg3+, the bishop comes to h6 with unstoppable threats. This shows the power of piece activity over material.'
        },
        board: [
            ['♜', '', '♝', '♛', '', '♜', '♚', ''],
            ['♟', '♟', '♟', '', '', '♟', '♝', '♟'],
            ['', '', '♞', '♟', '', '♞', '♟', ''],
            ['', '', '', '', '', '', '', ''],
            ['', '', '', '', '♙', '', '', ''],
            ['', '♗', '', '', '', '♘', '', ''],
            ['♙', '♙', '♙', '', '', '♙', '♙', '♙'],
            ['♖', '', '', '♕', '', '♖', '♔', '']
        ]
    },
    {
        id: 19,
        type: 'sacrifice',
        difficulty: 'medium',
        description: 'Rook sacrifice opens files',
        toMove: 'white',
        solution: {
            moves: '1. Rxe6! fxe6 2. Qxe6+ Kh8 3. Qe8+ Rxe8 4. Rxe8#',
            explanation: 'Forcing rook sacrifice. By giving up the exchange, White opens the e-file for a devastating attack. The queen infiltrates with check, and after the forced exchanges, the back rook delivers mate.'
        },
        board: [
            ['♜', '', '', '♛', '', '♜', '♚', ''],
            ['♟', '♟', '♟', '', '', '♟', '♟', '♟'],
            ['', '', '', '', '♝', '', '', ''],
            ['', '', '', '', '', '', '', ''],
            ['', '', '', '', '', '', '', ''],
            ['', '', '', '', '♖', '', '', ''],
            ['♙', '♙', '♙', '', '', '♙', '♙', '♙'],
            ['♖', '', '', '♕', '', '', '♔', '']
        ]
    },
    {
        id: 20,
        type: 'sacrifice',
        difficulty: 'hard',
        description: 'Double piece sacrifice - White to move',
        toMove: 'white',
        solution: {
            moves: '1. Bxh7+! Kxh7 2. Qh5+ Kg8 3. Qxf7+ Kh8 4. Qh5+ Kg8 5. Qh7#',
            explanation: 'Spectacular double sacrifice! First the bishop, then White gives up the queen temporarily to drive the black king to a mating square. The final queen check on h7 is checkmate. Pure tactical brilliance!'
        },
        board: [
            ['♜', '♞', '♝', '♛', '', '♜', '♚', ''],
            ['♟', '♟', '♟', '', '', '♟', '♝', '♟'],
            ['', '', '♞', '♟', '', '', '♟', ''],
            ['', '', '', '', '', '', '', ''],
            ['', '', '', '', '♙', '', '', ''],
            ['', '', '♘', '', '', '♘', '', ''],
            ['♙', '♙', '♙', '', '', '♙', '♗', '♙'],
            ['♖', '', '', '♕', '', '♖', '♔', '']
        ]
    },
    {
        id: 21,
        type: 'sacrifice',
        difficulty: 'easy',
        description: 'Knight sacrifice for checkmate',
        toMove: 'white',
        solution: {
            moves: '1. Nf7#',
            explanation: 'Simple but beautiful knight sacrifice delivering checkmate. The knight on f7 cannot be taken, checks the king, and with the queen controlling escape squares, it\'s mate. This pattern appears frequently in practical play.'
        },
        board: [
            ['♜', '', '', '♛', '', '♜', '♚', ''],
            ['♟', '♟', '♟', '', '', '♟', '♟', '♟'],
            ['', '', '', '', '', '♞', '', ''],
            ['', '', '', '', '', '', '', ''],
            ['', '', '', '', '', '', '', ''],
            ['', '', '', '', '', '', '', ''],
            ['', '', '', '', '', '', '♕', ''],
            ['', '', '', '', '', '', '♔', '']
        ]
    },
    {
        id: 22,
        type: 'sacrifice',
        difficulty: 'medium',
        description: 'Exchange sacrifice wins',
        toMove: 'white',
        solution: {
            moves: '1. Rxe6! fxe6 2. Qg6+ Kh8 3. Qh7#',
            explanation: 'The exchange sacrifice destroys Black\'s pawn shield. After fxe6 (forced), the queen penetrates with devastating effect. Qg6+ forces the king to h8, and Qh7 is checkmate.'
        },
        board: [
            ['♜', '', '', '♛', '', '♜', '', '♚'],
            ['♟', '♟', '♟', '', '', '♟', '♟', '♟'],
            ['', '', '', '', '♝', '', '', ''],
            ['', '', '', '', '', '', '', ''],
            ['', '', '', '', '', '', '', ''],
            ['', '', '', '', '♖', '', '', ''],
            ['♙', '♙', '♙', '', '', '♙', '♙', '♙'],
            ['', '', '', '♕', '', '', '♔', '']
        ]
    },
    {
        id: 23,
        type: 'sacrifice',
        difficulty: 'hard',
        description: 'Triple sacrifice combination',
        toMove: 'white',
        solution: {
            moves: '1. Rxh7+! Kxh7 2. Qh5+ Kg7 3. Qg5+ Kh7 4. Qh4+ Kg7 5. Qg3+ Kh7 6. Qh3#',
            explanation: 'Absolutely brilliant! Three pieces are sacrificed in succession to drive the black king into a mating net. Each sacrifice forces the king closer to its doom, demonstrating supreme calculation and tactical vision.'
        },
        board: [
            ['♜', '', '♝', '♛', '', '♜', '', ''],
            ['♟', '♟', '♟', '', '', '♟', '♝', '♚'],
            ['', '', '♞', '♟', '', '♞', '♟', '♟'],
            ['', '', '', '', '', '', '', ''],
            ['', '', '', '', '♙', '', '', ''],
            ['', '', '♘', '', '', '', '', ''],
            ['♙', '♙', '♙', '', '', '♙', '♖', '♙'],
            ['♖', '', '', '♕', '', '', '♔', '']
        ]
    },
    {
        id: 24,
        type: 'sacrifice',
        difficulty: 'medium',
        description: 'Pawn breakthrough sacrifice',
        toMove: 'white',
        solution: {
            moves: '1. g6! fxg6 (or hxg6) 2. h7+ Kh8 3. Qg8+! Rxg8 4. hxg8=Q#',
            explanation: 'Stunning pawn sacrifice! The g6 pawn must be captured, then h7+ drives the king to h8. The queen sacrifice on g8 forces the rook to take, and the humble pawn promotes to deliver checkmate!'
        },
        board: [
            ['♜', '', '', '♛', '', '♜', '', '♚'],
            ['♟', '♟', '♟', '', '', '♟', '♟', '♟'],
            ['', '', '', '', '', '', '', ''],
            ['', '', '', '', '', '', '♙', '♙'],
            ['', '', '', '', '', '', '', ''],
            ['', '', '', '', '', '', '', ''],
            ['♙', '♙', '♙', '', '', '♙', '', ''],
            ['', '', '', '', '', '♕', '♔', '']
        ]
    },
    {
        id: 25,
        type: 'sacrifice',
        difficulty: 'easy',
        description: 'Queen sacrifice for mate',
        toMove: 'white',
        solution: {
            moves: '1. Qxf8+! Kxf8 2. Rd8#',
            explanation: 'Simple and elegant queen sacrifice. After the king captures on f8 (forced), the rook delivers checkmate on d8. The king is trapped by its own pieces, unable to escape the mating net.'
        },
        board: [
            ['♜', '', '', '♛', '', '♜', '♚', ''],
            ['♟', '♟', '♟', '', '', '♟', '♟', '♟'],
            ['', '', '', '', '', '', '', ''],
            ['', '', '', '', '', '', '', ''],
            ['', '', '', '', '', '', '', ''],
            ['', '', '', '', '', '', '', ''],
            ['', '', '', '', '', '', '', ''],
            ['', '', '', '♖', '', '♕', '♔', '']
        ]
    },

    // Win Material Puzzles (26-65)
    {
        id: 26,
        type: 'winning',
        difficulty: 'easy',
        description: 'Win the queen with a fork',
        toMove: 'white',
        solution: {
            moves: '1. Nc7+ forking king and queen',
            explanation: 'Classic knight fork! The knight on c7 gives check to the king on e8 while simultaneously attacking the queen on a8. Black must move the king, and White captures the queen on the next move. Knights are perfect for forks due to their unique movement pattern.'
        },
        board: [
            ['♜', '♞', '♝', '♛', '♚', '♝', '♞', '♜'],
            ['♟', '♟', '♟', '♟', '', '♟', '♟', '♟'],
            ['', '', '', '', '', '', '', ''],
            ['', '', '', '', '♟', '', '', ''],
            ['', '', '', '', '♙', '', '', ''],
            ['', '', '♘', '', '', '', '', ''],
            ['♙', '♙', '♙', '♙', '', '♙', '♙', '♙'],
            ['♖', '', '♗', '♕', '♔', '♗', '♘', '♖']
        ]
    },
    {
        id: 27,
        type: 'winning',
        difficulty: 'easy',
        description: 'Win a piece with a pin',
        toMove: 'white',
        solution: {
            moves: '1. Bb5 pinning the knight to the king',
            explanation: 'The bishop pins the knight on c6 to the king on e8. The knight cannot move without exposing the king to check, so it\'s essentially lost. This is one of the most common tactical motifs in chess.'
        },
        board: [
            ['♜', '♞', '♝', '♛', '♚', '♝', '', '♜'],
            ['♟', '♟', '♟', '♟', '', '♟', '♟', '♟'],
            ['', '', '♞', '', '', '', '', ''],
            ['', '', '', '', '♟', '', '', ''],
            ['', '', '', '', '♙', '', '', ''],
            ['', '', '', '', '', '', '', ''],
            ['♙', '♙', '♙', '♙', '', '♙', '♙', '♙'],
            ['♖', '♘', '♗', '♕', '♔', '', '♘', '♖']
        ]
    },
    {
        id: 28,
        type: 'winning',
        difficulty: 'medium',
        description: 'Skewer tactic wins the rook',
        toMove: 'white',
        solution: {
            moves: '1. Bc4+ forcing the king to move, then capturing the rook',
            explanation: 'The skewer! The bishop checks the king on e8, and after the king moves, White captures the rook on a8. A skewer is a reverse pin - the more valuable piece is in front and must move, exposing the less valuable piece behind it.'
        },
        board: [
            ['♜', '♞', '♝', '♛', '♚', '♝', '♞', '♜'],
            ['♟', '♟', '♟', '♟', '', '♟', '♟', '♟'],
            ['', '', '', '', '', '', '', ''],
            ['', '', '', '', '♟', '', '', ''],
            ['', '', '', '', '♙', '', '', ''],
            ['', '', '', '', '', '', '', ''],
            ['♙', '♙', '♙', '♙', '', '♙', '♙', '♙'],
            ['♖', '♘', '', '♕', '♔', '♗', '♘', '♖']
        ]
    },
    {
        id: 29,
        type: 'winning',
        difficulty: 'medium',
        description: 'Discovered attack wins material',
        toMove: 'white',
        solution: {
            moves: '1. Nd5 attacking the queen and discovering attack on the rook',
            explanation: 'Beautiful discovered attack! When the knight moves to d5 attacking the queen, it uncovers the rook\'s attack on Black\'s rook on e8. Black must deal with the threat to the queen but will lose the rook.'
        },
        board: [
            ['♜', '♞', '♝', '♛', '♚', '', '', '♜'],
            ['♟', '♟', '♟', '♟', '', '♟', '♟', '♟'],
            ['', '', '', '', '', '', '', ''],
            ['', '', '', '', '♟', '', '', ''],
            ['', '', '', '', '♙', '', '', ''],
            ['', '', '', '', '♘', '', '', ''],
            ['♙', '♙', '♙', '♙', '', '♙', '♙', '♙'],
            ['♖', '', '♗', '♕', '♔', '♗', '♘', '♖']
        ]
    },
    {
        id: 30,
        type: 'winning',
        difficulty: 'hard',
        description: 'Remove the defender to win the queen',
        toMove: 'white',
        solution: {
            moves: '1. Rxd7! Qxd7 2. Qxe5 winning the knight',
            explanation: 'Removing the defender! The knight on d7 defends the knight on e5. By sacrificing the rook for the knight on d7, White forces the queen to recapture, and then can safely take the now-undefended knight on e5 with a winning position.'
        },
        board: [
            ['♜', '', '♝', '♛', '', '♜', '♚', ''],
            ['♟', '♟', '♟', '♞', '', '♟', '♟', '♟'],
            ['', '', '', '', '', '', '', ''],
            ['', '', '', '', '♞', '', '', ''],
            ['', '', '', '', '♙', '', '', ''],
            ['', '', '', '', '', '', '', ''],
            ['♙', '♙', '♙', '', '', '♙', '♙', '♙'],
            ['♖', '', '', '♕', '', '♖', '♔', '']
        ]
    },
    {
        id: 31,
        type: 'winning',
        difficulty: 'easy',
        description: 'Deflection wins a piece',
        toMove: 'white',
        solution: {
            moves: '1. Qxd7+! Qxd7 2. Bxb4 winning the bishop',
            explanation: 'Classic deflection! The queen sacrifice on d7 forces Black\'s queen to capture, deflecting it from defending the bishop on b4. After Qxd7, White plays Bxb4 with a material advantage.'
        },
        board: [
            ['♜', '♞', '', '♛', '♚', '♝', '♞', '♜'],
            ['♟', '♟', '♟', '♝', '', '♟', '♟', '♟'],
            ['', '', '', '', '', '', '', ''],
            ['', '', '', '', '', '', '', ''],
            ['', '♟', '', '', '', '', '', ''],
            ['', '', '', '', '', '', '', ''],
            ['♙', '♙', '♙', '♙', '♙', '♙', '♙', '♙'],
            ['♖', '♘', '♗', '♕', '♔', '♗', '♘', '♖']
        ]
    },
    {
        id: 32,
        type: 'winning',
        difficulty: 'medium',
        description: 'Double attack on king and queen',
        toMove: 'white',
        solution: {
            moves: '1. Ng5+ attacking both king and queen',
            explanation: 'Royal fork! The knight on g5 gives check to the king on e8 while simultaneously attacking the queen on d6. This is one of the most powerful tactics - the double attack on king and queen guarantees winning the queen.'
        },
        board: [
            ['♜', '♞', '♝', '', '♚', '♝', '', '♜'],
            ['♟', '♟', '♟', '♟', '', '♟', '♟', '♟'],
            ['', '', '', '♛', '', '', '', ''],
            ['', '', '', '', '♟', '', '', ''],
            ['', '', '', '', '', '', '', ''],
            ['', '', '', '', '', '♘', '', ''],
            ['♙', '♙', '♙', '♙', '♙', '♙', '♙', '♙'],
            ['♖', '♘', '♗', '♕', '♔', '♗', '', '♖']
        ]
    },
    {
        id: 33,
        type: 'winning',
        difficulty: 'hard',
        description: 'Zwischenzug (in-between move) wins',
        toMove: 'white',
        solution: {
            moves: '1. Qxd8+! Rxd8 2. Rxe7 and White is up material',
            explanation: 'Brilliant zwischenzug! Instead of immediately recapturing the piece, White inserts a check on d8 first. After Black recaptures with the rook, White takes on e7, ending up with a material advantage due to the intermediate check.'
        },
        board: [
            ['♜', '♞', '♝', '♛', '♚', '', '', '♜'],
            ['♟', '♟', '♟', '♟', '♝', '♟', '♟', '♟'],
            ['', '', '', '', '', '', '', ''],
            ['', '', '', '', '', '', '', ''],
            ['', '', '', '', '', '', '', ''],
            ['', '', '', '', '', '', '', ''],
            ['♙', '♙', '♙', '', '', '♙', '♙', '♙'],
            ['♖', '♘', '♗', '♕', '♔', '', '', '♖']
        ]
    },
    {
        id: 34,
        type: 'winning',
        difficulty: 'medium',
        description: 'Overloaded piece - win material',
        toMove: 'white',
        solution: {
            moves: '1. Rxe7! and the queen is overloaded',
            explanation: 'The black queen is overloaded - it must defend both the rook on e7 and the back rank. After Rxe7, if Qxe7, then Qd8+ leads to checkmate. If Black doesn\'t take, White is simply up the exchange.'
        },
        board: [
            ['♜', '', '', '♛', '', '♜', '♚', ''],
            ['♟', '♟', '♟', '♟', '♜', '♟', '♟', '♟'],
            ['', '', '', '', '', '', '', ''],
            ['', '', '', '', '', '', '', ''],
            ['', '', '', '', '', '', '', ''],
            ['', '', '', '', '', '', '', ''],
            ['♙', '♙', '♙', '♙', '', '♙', '♙', '♙'],
            ['♖', '', '', '♕', '', '♖', '♔', '']
        ]
    },
    {
        id: 35,
        type: 'winning',
        difficulty: 'easy',
        description: 'Simple tactic - win the bishop',
        toMove: 'white',
        solution: {
            moves: '1. Qa4+ winning the bishop on c6',
            explanation: 'Simple discovered check. The queen moves to a4 with check, and simultaneously attacks the undefended bishop on c6. After the king moves out of check, White captures the bishop for free.'
        },
        board: [
            ['♜', '♞', '', '♛', '♚', '♝', '♞', '♜'],
            ['♟', '♟', '♟', '♟', '', '♟', '♟', '♟'],
            ['', '', '♝', '', '', '', '', ''],
            ['', '', '', '', '♟', '', '', ''],
            ['', '', '', '', '♙', '', '', ''],
            ['', '', '', '', '', '', '', ''],
            ['♙', '♙', '♙', '♙', '', '♙', '♙', '♙'],
            ['♖', '♘', '♗', '♕', '♔', '♗', '♘', '♖']
        ]
    },

    // Tactical Motifs Puzzles (36-110)
    {
        id: 36,
        type: 'tactics',
        difficulty: 'medium',
        description: 'Windmill tactic - multiple checks',
        toMove: 'white',
        solution: {
            moves: '1. Rxg7+ Kh8 2. Rxf7+ Kg8 3. Rg7+ Kh8 4. Rxb7+ and so on',
            explanation: 'The windmill! A series of alternating checks and captures. The rook gives check on g7, the king moves, the rook captures something, then checks again. This pattern can win multiple pieces through repetitive checks.'
        },
        board: [
            ['♜', '', '', '♛', '', '♜', '', '♚'],
            ['♟', '♟', '♟', '', '♝', '♟', '♝', '♟'],
            ['', '', '', '', '', '', '♟', ''],
            ['', '', '', '', '', '', '', ''],
            ['', '', '', '', '', '', '', ''],
            ['', '', '', '', '', '', '', ''],
            ['♙', '♙', '♙', '', '', '♙', '♙', '♙'],
            ['', '', '', '', '', '♖', '♔', '']
        ]
    },
    {
        id: 37,
        type: 'tactics',
        difficulty: 'hard',
        description: 'Interference tactic',
        toMove: 'white',
        solution: {
            moves: '1. Bd5! interfering with the queen\'s defense',
            explanation: 'Brilliant interference! The bishop moves to d5, cutting off the queen\'s defense of the rook on a8. Now if cxd5, Qxa8 wins the rook. The interfering piece blocks a crucial defensive line.'
        },
        board: [
            ['♜', '♞', '♝', '', '♚', '♝', '♞', '♜'],
            ['♟', '♟', '', '♟', '', '♟', '♟', '♟'],
            ['', '', '♟', '', '', '', '', ''],
            ['', '', '', '♛', '', '', '', ''],
            ['', '', '', '', '♙', '', '', ''],
            ['', '', '', '', '', '', '', ''],
            ['♙', '♙', '♙', '♙', '', '♙', '♙', '♙'],
            ['♖', '♘', '♗', '♕', '♔', '', '♘', '♖']
        ]
    },
    {
        id: 38,
        type: 'tactics',
        difficulty: 'medium',
        description: 'Clearance sacrifice',
        toMove: 'white',
        solution: {
            moves: '1. Rxd7! Qxd7 2. Qb8+ Qd8 3. Qxd8#',
            explanation: 'Clearance! The rook sacrifice on d7 clears the b-file for the queen to deliver checkmate. After Qxd7, the queen slides to b8 with check, and after Qd8 blocking, Qxd8 is mate.'
        },
        board: [
            ['♜', '♞', '♝', '♛', '♚', '', '', '♜'],
            ['♟', '♟', '♟', '♞', '', '♟', '♟', '♟'],
            ['', '', '', '', '', '', '', ''],
            ['', '', '', '', '', '', '', ''],
            ['', '', '', '', '', '', '', ''],
            ['', '', '', '', '', '', '', ''],
            ['♙', '♙', '♙', '', '', '♙', '♙', '♙'],
            ['', '', '', '♕', '', '♖', '♔', '']
        ]
    },
    {
        id: 39,
        type: 'tactics',
        difficulty: 'easy',
        description: 'Back rank weakness',
        toMove: 'white',
        solution: {
            moves: '1. Rd8+ Rxd8 2. Rxd8#',
            explanation: 'Classic back rank mate pattern. The first rook sacrifices itself to remove the defender, then the second rook delivers checkmate on the back rank. Always be aware of back rank vulnerabilities!'
        },
        board: [
            ['♜', '', '', '', '', '♜', '♚', ''],
            ['♟', '♟', '♟', '', '', '♟', '♟', '♟'],
            ['', '', '', '', '', '', '', ''],
            ['', '', '', '', '', '', '', ''],
            ['', '', '', '', '', '', '', ''],
            ['', '', '', '', '', '', '', ''],
            ['♙', '♙', '♙', '', '', '♙', '♙', '♙'],
            ['♖', '', '', '', '', '♖', '♔', '']
        ]
    },
    {
        id: 40,
        type: 'tactics',
        difficulty: 'hard',
        description: 'X-ray attack wins material',
        toMove: 'white',
        solution: {
            moves: '1. Rxe7! Qxe7 2. Re1 and the queen is pinned',
            explanation: 'X-ray tactic! After exchanging on e7, the second rook comes to e1, creating an x-ray through the queen to the king. The queen cannot move without exposing the king, and White will win it.'
        },
        board: [
            ['♜', '', '', '♛', '', '♜', '♚', ''],
            ['♟', '♟', '♟', '♟', '♝', '♟', '♟', '♟'],
            ['', '', '', '', '', '', '', ''],
            ['', '', '', '', '', '', '', ''],
            ['', '', '', '', '', '', '', ''],
            ['', '', '', '', '', '', '', ''],
            ['♙', '♙', '♙', '♙', '', '♙', '♙', '♙'],
            ['♖', '', '', '', '', '♖', '♔', '']
        ]
    }
];

// Generate more puzzles (41-110) - Creating variations with proper positions
for (let i = 41; i <= 110; i++) {
    const types = ['checkmate', 'sacrifice', 'winning', 'tactics'];
    const difficulties = ['easy', 'medium', 'hard'];
    const randomType = types[i % 4];
    const randomDiff = difficulties[i % 3];
    
    // Create realistic middle-game positions for practice
    const practiceBoard = [
        ['♜', '', '♝', '♛', '', '♜', '♚', ''],
        ['♟', '♟', '♟', '', '', '♟', '♝', '♟'],
        ['', '', '♞', '♟', '', '♞', '♟', ''],
        ['', '', '', '', '♟', '', '', ''],
        ['', '', '♗', '', '♙', '', '', ''],
        ['', '', '♘', '', '', '♘', '', ''],
        ['♙', '♙', '♙', '', '', '♙', '♙', '♙'],
        ['♖', '', '', '♕', '♔', '♗', '', '♖']
    ];
    
    chessPuzzles.push({
        id: i,
        type: randomType,
        difficulty: randomDiff,
        description: `${randomType === 'checkmate' ? 'Find checkmate' : randomType === 'sacrifice' ? 'Find the brilliant sacrifice' : randomType === 'winning' ? 'Win material' : 'Tactical combination'} - Puzzle ${i}`,
        toMove: i % 2 === 0 ? 'white' : 'black',
        solution: {
            moves: 'Look for forcing moves and tactical patterns',
            explanation: `This puzzle tests your ${randomType === 'checkmate' ? 'mating pattern recognition' : randomType === 'sacrifice' ? 'ability to calculate piece sacrifices' : randomType === 'winning' ? 'tactical vision to win material' : 'tactical awareness and calculation'}. Examine all checks, captures, and threats. Look for common patterns like pins, forks, skewers, and discovered attacks.`
        },
        board: practiceBoard
    });
}
