# Knights Travails

A simple graph traversal algorithm for [The Odin Project's](https://www.theodinproject.com/lessons/javascript-knights-travails) fullstack javascript course.

The core of the project is the `knight-moves.js` module. It exports a function `knightMoves` that prints out the shortest path a knight could take between two squares (`start` and `end`) on a chessboard.

Squares are represented as arrays of length 2: `square[0]` is the x coordinate and `square[1]` is the y coordinate. As a reminder, a standard chessboard is 8x8, so both coordinates should be between 0 and 7. If you want to try it out with a board of a different size, you can change the `boardWidth` and `boardHeight` constants at the top of the module, though smaller sizes might result in some squares being unreachable.

### Time complexity

`O(n)` - If `n` is the number of squares on the board, the worst case is two squares on opposite corners. Since the algorithm avoids paths that cross visited squares, this means the function will find a path to approximately every square of the board once before landing on the answer.

### Space complexity

`O(log n)` - The algorithm uses a queue to store arrays of moves that lead to newly discovered squares. In the worst case (visiting every square), the size of this queue will top out at a fraction of the total number of squares (roughly log 1.2 of n)
