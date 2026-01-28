// Chess Tips Database - 60 Essential Tips
const chessTips = {
    opening: [
        {
            id: 1,
            title: "Control the Center",
            content: "The center (e4, e5, d4, d5) is the most important area of the board. Controlling these squares gives your pieces maximum mobility and flexibility. Start with 1.e4 or 1.d4 as White, and contest the center as Black. Pieces in the center control more squares than pieces on the edges. Remember: he who controls the center, controls the game."
        },
        {
            id: 2,
            title: "Develop Knights Before Bishops",
            content: "Knights should usually be developed before bishops because knights have only one good square early in the game (f3/c3 for White, f6/c6 for Black), while bishops can wait to see where they're most effective. The standard development pattern is: knights to f3 and c3, then develop bishops based on the pawn structure and opponent's setup."
        },
        {
            id: 3,
            title: "Castle Early for King Safety",
            content: "Castle within the first 10 moves, preferably by move 6-8. Kingside castling (0-0) is more common and usually safer than queenside castling (0-0-0). Castling accomplishes two goals: it moves your king to safety away from the center, and it activates your rook. A king trapped in the center is vulnerable to attacks and tactical shots."
        },
        {
            id: 4,
            title: "Don't Move the Same Piece Twice in the Opening",
            content: "Each opening move should develop a new piece or improve your position significantly. Moving the same piece twice wastes time (tempo) that could be used to develop other pieces. Exceptions exist when you're responding to threats or executing a specific tactical idea, but generally, get all your pieces into the game before moving developed pieces again."
        },
        {
            id: 5,
            title: "Don't Bring Your Queen Out Too Early",
            content: "The queen is your most powerful piece and a prime target. Developing it too early allows your opponent to attack it with minor pieces, gaining time for development. Keep the queen back in the opening, develop your minor pieces and castle, then bring the queen into play when it's safe and effective."
        },
        {
            id: 6,
            title: "Connect Your Rooks",
            content: "After castling and developing minor pieces, aim to connect your rooks by moving the queen off the back rank. Connected rooks protect each other and can quickly shift to open files. This usually happens naturally around moves 10-15 and indicates good development."
        },
        {
            id: 7,
            title: "Avoid Unnecessary Pawn Moves",
            content: "In the opening, pawn moves should serve a purpose: control the center, develop pieces, or create necessary weaknesses in your opponent's position. Each pawn move is permanent and creates potential weaknesses. Focus on piece development first, pawn advances second."
        },
        {
            id: 8,
            title: "Fight for the Initiative",
            content: "The initiative means you're making threats and your opponent must respond. In the opening, fight to dictate the flow of the game. Create threats that force your opponent to react defensively. Even if you're playing Black, look for counterplay and don't just passively defend."
        },
        {
            id: 9,
            title: "Know Your Opening Principles",
            content: "Master the fundamental opening principles before memorizing specific variations: control center, develop pieces, king safety, connect rooks. Understanding WHY moves are played is more important than memorizing move orders. This understanding helps you navigate unfamiliar positions and find strong moves even in unknown territory."
        },
        {
            id: 10,
            title: "Study Classic Opening Traps",
            content: "Learn common opening traps like Scholar's Mate, Fool's Mate, Legal's Trap, and others. Knowing these traps helps you avoid falling for them and potentially use them against unprepared opponents. More importantly, understanding why these traps work teaches you about piece coordination and king safety."
        },
        {
            id: 11,
            title: "Develop with Threats",
            content: "When possible, develop pieces with threats attached. For example, Bc4 develops the bishop while attacking f7. Nf3 develops while controlling e5 and d4. These dual-purpose moves are more efficient than passive development and keep your opponent on their toes."
        },
        {
            id: 12,
            title: "Understand Pawn Breaks",
            content: "Pawn breaks (like d4 in the French, c5 in the King's Indian, e4 in the Caro-Kann) are crucial for challenging your opponent's center and freeing your pieces. Identify these key breaks in your openings and plan when to execute them for maximum effect."
        }
    ],
    middlegame: [
        {
            id: 13,
            title: "Look for Tactics First",
            content: "Before making any move, scan the position for tactical opportunities: forks, pins, skewers, discovered attacks, and sacrifices. Tactics trump strategy - a brilliant strategic plan means nothing if you miss a simple tactic. Spend 80% of your calculation time on forcing moves: checks, captures, and threats."
        },
        {
            id: 14,
            title: "Improve Your Worst-Placed Piece",
            content: "When you don't have a concrete plan, improve your worst-placed piece. A knight on the rim? Bring it to the center. A bishop blocked by pawns? Find a better diagonal. This simple principle consistently improves positions and is a favorite of grandmasters when no tactics are available."
        },
        {
            id: 15,
            title: "Control Open Files with Rooks",
            content: "Rooks belong on open or semi-open files where they can penetrate the opponent's position. If there are no open files, create them by exchanging pawns. Double rooks on key files for maximum pressure. The player who controls the open files usually controls the game."
        },
        {
            id: 16,
            title: "Create and Exploit Weaknesses",
            content: "A weakness is a square or pawn that cannot be easily defended. Create weaknesses in your opponent's position through pawn advances, exchanges, or piece pressure. Common weaknesses: isolated pawns, backward pawns, weak squares (especially on dark or light squares if the opponent lacks a bishop). Once created, methodically exploit these weaknesses."
        },
        {
            id: 17,
            title: "Understand Piece Activity vs Material",
            content: "Active pieces can be worth more than material advantage. Sometimes sacrificing a pawn or exchange for piece activity and king attack is the right choice. Conversely, if you're up material, trade pieces to reach a winning endgame. The balance between material and activity is crucial in middlegame evaluation."
        },
        {
            id: 18,
            title: "Use the Principle of Two Weaknesses",
            content: "One weakness can often be defended. Create two weaknesses on opposite sides of the board, forcing your opponent to defend multiple targets. When they defend one, attack the other. This is especially powerful in endgames but applies to middlegames too."
        },
        {
            id: 19,
            title: "Trade When Ahead, Avoid Trades When Behind",
            content: "If you're up material, trade pieces (not pawns) to simplify into a winning endgame. Your material advantage becomes more significant with fewer pieces on the board. If you're behind, avoid trades and keep the position complex - you need complications to create chances."
        },
        {
            id: 20,
            title: "Coordinate Your Pieces",
            content: "Pieces working together are exponentially more powerful than pieces working alone. Classic examples: queen and knight, two bishops, rook and bishop. Before attacking, ensure your pieces support each other. A coordinated attack with three pieces beats a scattered attack with five."
        },
        {
            id: 21,
            title: "Attack Where You're Stronger",
            content: "If you have more pieces aimed at the kingside, attack there. If you control the queenside, push there. Don't attack where your opponent is well-defended. This principle applies to both piece attacks and pawn storms. Concentrate your forces where you have superiority."
        },
        {
            id: 22,
            title: "Prophylactic Thinking",
            content: "Ask yourself: 'What is my opponent threatening?' Before making your planned move, check if your opponent has a counter-threat. Sometimes the best move is one that prevents your opponent's plans while improving your position. This preventive thinking is a hallmark of strong players."
        },
        {
            id: 23,
            title: "Calculate Forcing Sequences",
            content: "When calculating variations, focus on forcing moves that limit your opponent's options: checks, captures, and threats (especially checkmate threats). These sequences are easier to calculate because your opponent has limited responses. Always calculate one move deeper than you think necessary."
        },
        {
            id: 24,
            title: "Control Key Squares",
            content: "Identify critical squares in the position - often squares in your opponent's half of the board that pieces can occupy without being driven away. Knights on e5/d5/e4 can be particularly powerful. Control these squares with pawns and pieces, and deny them to your opponent."
        },
        {
            id: 25,
            title: "Know When to Attack the King",
            content: "Attack the king when: 1) The enemy king is exposed or poorly defended, 2) You have more attacking pieces than defending pieces, 3) You can open lines toward the king. Don't attack prematurely - ensure sufficient force and proper piece coordination before launching the assault."
        },
        {
            id: 26,
            title: "Master the Art of Exchange",
            content: "Not all exchanges are equal. Exchange when it: improves your pawn structure, eliminates key defending pieces, or simplifies to a winning endgame. Avoid exchanges that: worsen your structure, activate opponent pieces, or ease their defensive burden. Always evaluate what the position looks like AFTER the exchange."
        },
        {
            id: 27,
            title: "Use Your Pawns as Battering Rams",
            content: "In positions where you've castled on opposite sides, use your pawns to attack your opponent's king. Push pawns toward their king to open files and create weaknesses. Don't worry about pawn structure when launching a decisive attack - winning the game is more important than a perfect structure."
        },
        {
            id: 28,
            title: "Understand Tempo and Timing",
            content: "Tempo is a unit of time in chess (one move). Gaining tempo means making threats that force your opponent to respond passively. In sharp positions, a single tempo can decide the game. Sometimes waiting is better than forcing - let your opponent commit first, then strike when their pieces are poorly placed."
        },
        {
            id: 29,
            title: "Recognize Pattern Recognition",
            content: "Many middlegame positions contain familiar patterns: Greek gift sacrifice, queen and knight mate patterns, rook lifts, minority attacks. Study classic games to internalize these patterns. When you see a pattern you recognize, you can play confidently and quickly, saving time for critical decisions."
        },
        {
            id: 30,
            title: "Evaluate After Every Exchange",
            content: "After every piece exchange, reassess the position. Has the pawn structure changed? Are there new weaknesses? Has the king become more exposed? The character of a position can change dramatically after a single exchange, requiring a new plan."
        }
    ],
    endgame: [
        {
            id: 31,
            title: "King Activity is Paramount",
            content: "In the endgame, the king transforms from a weakness into a powerful piece. Activate your king immediately - bring it toward the center and toward passed pawns. A centralized king can support pawn advances, attack enemy pawns, and control key squares. The player with the more active king usually wins."
        },
        {
            id: 32,
            title: "Create Passed Pawns",
            content: "A passed pawn (no enemy pawns blocking its path to promotion) is a powerful asset. Create passed pawns by: pawn breaks, piece sacrifices, or the candidate majority principle. Once you have a passed pawn, push it forward with king and piece support. A far-advanced passed pawn can be worth a minor piece."
        },
        {
            id: 33,
            title: "Master Key Endgames",
            content: "Learn essential endgames: K+Q vs K, K+R vs K, K+P vs K (king and pawn), basic rook endgames, opposite-colored bishop endgames. These occur frequently and knowing them turns unclear positions into clear wins or draws. Spend dedicated time studying endgame theory - it's the foundation of strong chess."
        },
        {
            id: 34,
            title: "The Square Rule",
            content: "In king and pawn endgames, the square rule determines if a king can catch a passed pawn. Draw a diagonal from the pawn to its promotion square, then complete the square. If the defending king is inside this square (or can step in on their turn), they can catch the pawn. Master this to save or win countless endgames."
        },
        {
            id: 35,
            title: "Opposition and Triangulation",
            content: "Opposition means kings face each other with one square between them. The player NOT to move has the opposition and usually benefits. Use opposition to: penetrate with your king, prevent enemy king penetration, or zugzwang the opponent. Triangulation is maneuvering your king to achieve opposition when needed."
        },
        {
            id: 36,
            title: "Rook Activity Over Pawns",
            content: "In rook endgames, active rooks are often more important than extra pawns. A rook on the 7th rank (2nd for Black) is incredibly powerful, attacking pawns and cutting off the king. Place rooks behind passed pawns (yours or your opponent's). An active rook creates constant threats."
        },
        {
            id: 37,
            title: "Good Bishop vs Bad Bishop",
            content: "A good bishop has mobility and isn't blocked by its own pawns. A bad bishop is blocked by pawns on its color. Place your pawns on the opposite color of your bishop. If your opponent has a bad bishop, fix their pawns on that color and attack those pawns."
        },
        {
            id: 38,
            title: "Don't Rush Pawn Pushes",
            content: "In endgames, hasty pawn pushes often create weaknesses. Improve piece positions first, then advance pawns. Each pawn move is permanent - once pushed, pawns can't retreat. Ensure your king and pieces are optimally placed before committing to pawn breaks."
        },
        {
            id: 39,
            title: "The Lucena and Philidor Positions",
            content: "These are fundamental rook and pawn vs rook positions. Lucena (winning technique with the stronger side's king in front of the pawn) and Philidor (drawing technique with the defending king cutting off the attacking king). Study both positions thoroughly - they're the most important rook endgame theory to know."
        },
        {
            id: 40,
            title: "Build a Bridge in Rook Endgames",
            content: "When you have a rook and pawn vs rook with your king in front of the pawn, use the 'building a bridge' technique (Lucena position). Use your rook to shield your king from checks, allowing the pawn to promote. This technique wins countless rook endgames."
        },
        {
            id: 41,
            title: "Queen vs Pawn on 7th",
            content: "Know the drawing patterns when defending with a king and pawn on the 7th rank against a queen. If your king is in front of the pawn and it's a rook pawn or bishop pawn, you can often draw. Study these positions - they appear more often than you'd think."
        },
        {
            id: 42,
            title: "Minor Piece Endgames",
            content: "In knight vs bishop endgames, bishops are usually stronger in open positions; knights excel in closed positions. Two bishops are very powerful in the endgame. In same-colored bishop endgames, the better pawn structure usually wins. Opposite-colored bishops often lead to draws even with material imbalances."
        }
    ],
    tactical: [
        {
            id: 43,
            title: "Always Check for Checks",
            content: "The most forcing moves in chess are checks. Before making any move, scan ALL possible checks - they often lead to tactics or force opponent into worse positions. Many brilliant combinations start with a surprising check. Checks limit your opponent's options dramatically."
        },
        {
            id: 44,
            title: "Recognize Common Tactical Patterns",
            content: "Master the core tactical motifs: pins, forks, skewers, discovered attacks, double attacks, deflection, decoy, removing the defender, interference, zwischenzug. These patterns repeat constantly. When you see one in your games, your calculation becomes much easier because you recognize the pattern."
        },
        {
            id: 45,
            title: "Look for Undefended Pieces",
            content: "Undefended (hanging) pieces are the most common tactical weakness. Before each move, check: Do I have undefended pieces? Does my opponent? An undefended piece is a tactical target waiting to be exploited. Even grandmasters occasionally hang pieces in complex positions."
        },
        {
            id: 46,
            title: "Calculate Candidate Moves",
            content: "Don't calculate every possible move - identify 2-4 candidate moves that make sense, then calculate those deeply. Candidates are usually forcing moves (checks, captures, threats) or moves that improve your position significantly. This focused approach saves time and reduces errors."
        },
        {
            id: 47,
            title: "Solve Tactical Puzzles Daily",
            content: "The best way to improve tactical vision is solving puzzles every day. Even 15-20 minutes daily makes a huge difference. Use puzzle books, apps like Chess Tempo, Lichess puzzles, or Chesstempo. Start with easier puzzles and gradually increase difficulty. Pattern recognition improves through repetition."
        },
        {
            id: 48,
            title: "The Power of Double Attacks",
            content: "A double attack threatens two things simultaneously, forcing the opponent to choose what to save. Knights excel at double attacks (forks). Queens can double attack easily. Look for opportunities to attack two pieces, or a piece and checkmate threat. Double attacks win material in almost every game."
        },
        {
            id: 49,
            title: "Desperado Pieces",
            content: "If your piece is about to be captured, check if it can create chaos before dying. Capture something, give a check, or create a threat. A doomed piece should cause maximum damage before being taken. This 'desperado' concept saves half-points and sometimes wins games."
        },
        {
            id: 50,
            title: "Visualization and Board Vision",
            content: "Strong players can visualize positions several moves ahead. Practice by playing blindfold chess or calculating without moving pieces. Start with simple tactics, calculating 3-4 moves ahead. Gradually increase depth. Better visualization directly improves tactical ability and reduces blunders."
        },
        {
            id: 51,
            title: "Quiet Moves Can Be Tactical",
            content: "Not all tactics involve captures and checks. Sometimes a quiet move sets up unstoppable threats. Look for quiet moves that: improve piece positions, threaten multiple things next move, or create zugzwang. These subtle tactics are often the most beautiful and difficult to defend against."
        },
        {
            id: 52,
            title: "Back Rank Vulnerabilities",
            content: "One of the most common tactical themes. If your king lacks an escape square (usually trapped by its own pawns on the back rank), you're vulnerable to back rank mates. Always give your king an escape square (like h3/h6 or fianchetto). Conversely, exploit opponent's back rank weaknesses ruthlessly."
        },
        {
            id: 53,
            title: "The Overloaded Piece",
            content: "When one piece must defend two things, it's overloaded and can be exploited. Attack both targets - the defender can't protect everything. This is especially powerful when the overloaded piece defends against both a checkmate threat and a material loss."
        },
        {
            id: 54,
            title: "Combination Creation",
            content: "Most combinations involve multiple tactical themes in sequence. For example: deflection followed by fork, or pin followed by removing the defender. When analyzing positions, consider how tactical motifs can chain together. The most brilliant combinations link 3-4 tactical ideas."
        }
    ],
    rating: [
        {
            id: 55,
            title: "Consistency Over Brilliancy",
            content: "To improve your rating, focus on reducing blunders rather than finding brilliant moves. Every blunder costs you ~200 rating points. Play solid, mistake-free chess. One blunder can waste 20 good moves. Before each move, take a breath and check: Does this move hang anything? Does it allow tactics?"
        },
        {
            id: 56,
            title: "Analyze Your Games Thoroughly",
            content: "After each game, especially losses, analyze deeply: Where did I go wrong? What could I have done differently? What did my opponent do well? Use engine analysis, but focus on understanding YOUR mistakes, not finding the computer's perfect move. Learning from losses is the fastest path to improvement."
        },
        {
            id: 57,
            title: "Time Management",
            content: "Poor time management causes blunders and rating loss. In the opening, play relatively quickly if you know the position. Spend time on critical moments: tactical complications, choosing between plans, endgame technique. Don't move instantly - even simple positions deserve 10-15 seconds of thought to avoid blunders."
        },
        {
            id: 58,
            title: "Study Master Games",
            content: "Watch grandmaster games in your openings. Understand their plans, how they improve positions, and how they convert advantages. YouTube channels like agadmator, GothamChess, and others explain games beautifully. Seeing how masters handle positions teaches strategic thinking you can't learn from books alone."
        },
        {
            id: 59,
            title: "Focus on Your Weaknesses",
            content: "Identify your weaknesses (tactics, endgames, opening knowledge, time trouble) and work specifically on them. If you lose from won endgames, study endgames. If you fall for tactics, solve puzzles. If you play too fast, consciously slow down. Targeted improvement is more efficient than general study."
        },
        {
            id: 60,
            title: "Mental and Physical Preparation",
            content: "Chess is mentally exhausting. Get adequate sleep, stay hydrated, take breaks between games. Don't play when tilted or frustrated - you'll blunder more. Physical exercise improves concentration and stamina. Meditation and breathing exercises help with anxiety and time pressure. Your mental state directly affects your rating."
        }
    ]
};
