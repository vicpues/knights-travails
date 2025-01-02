const Queue = require("./queue");

const boardWidth = 8;
const boardHeight = 8;

/** Finds the shortest path a knight can take on a chessboard between the
 * `start` position and the `end` position, and prints out each cell in the path.
 * @param {[number, number]} start The cell from which to start the cell.
 * start[0] is the column (x position), and start[1] is the row (y position).
 * @param {[number, number]} end The cell we want to reach.
 * start[0] is the column (x position), and start[1] is the row (y position).
 */
function knightMoves(start, end) {
    const visited = new Map();
    const queue = new Queue();
    queue.enqueue([start]);
    let currentPath;

    while (!queue.isEmpty()) {
        currentPath = queue.dequeue();

        const lastSquare = currentPath[currentPath.length - 1];
        if (isEqual(lastSquare, end)) break;
        visited.set(toNumber(lastSquare), true);

        const reachable = getValidMoves(lastSquare);
        const unvisited = reachable.filter(
            (move) => !visited.has(toNumber(move)),
        );
        for (let move of unvisited) {
            queue.enqueue([...currentPath, move]);
        }
    }

    printOutcome(currentPath);
}

module.exports = knightMoves;

// UTILITY FUNCTIONS:

/** Returns an array of all valid moves originating fromSquare */
function getValidMoves(fromSquare) {
    let xMoves = [-2, -1, 1, 2, -2, -1, 1, 2];
    let yMoves = [-1, -2, -2, -1, 1, 2, 2, 1];

    const possibleMoves = xMoves.map((move, index) => [
        fromSquare[0] + xMoves[index],
        fromSquare[1] + yMoves[index],
    ]);

    const validMoves = possibleMoves.filter((square) => squareExists(square));
    return validMoves;
}

/** Returns `true` if the square is within the bounds of the board */
function squareExists(square) {
    const xIsValid = square[0] >= 0 && square[0] < boardWidth;
    const yIsValid = square[1] >= 0 && square[0] < boardHeight;
    return xIsValid && yIsValid;
}

/** Returns `true` if two arrays contain the same items in the same order */
function isEqual(arr1, arr2) {
    return arr1[0] === arr2[0] && arr1[1] === arr2[1];
}

/** Returns a unique number corresponding to `square`'s place on the board */
function toNumber(square) {
    return square[0] + square[1] * boardWidth;
}

/** Prints the path taken from start to end */
function printOutcome(steps) {
    const stepsCount = steps.length - 1;
    const suffix = stepsCount === 1 ? "" : "s";
    console.log(
        `You made it in ${stepsCount} step${suffix}! Here's your path:`,
    );
    steps.forEach((step) => console.log(step));
    console.log();
}
