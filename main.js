const knightMoves = require("./knight-moves");

knightMoves([0, 0], [0, 0]);
// You made it in 0 steps! Here's your path:
// [ 0, 0 ]

knightMoves([3, 3], [0, 0]);
// You made it in 2 steps! Here's your path:
// [ 3, 3 ]
// [ 1, 2 ]
// [ 0, 0 ]

knightMoves([0, 0], [7, 7]);
// You made it in 6 steps! Here's your path:
// [ 0, 0 ]
// [ 1, 2 ]
// [ 2, 0 ]
// [ 3, 2 ]
// [ 4, 4 ]
// [ 5, 6 ]
// [ 7, 7 ]
