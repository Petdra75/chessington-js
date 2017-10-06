import Player from '../player';
import Board from '../board';
import Square from '../square';
import { Direction, getDirectionDiff } from '../direction';

const WHITE_MOVE_DIRECTION = 1
const BLACK_MOVE_DIRECTION = -1



export default class Piece {
    public player: Player;

    public constructor(player: Player) {
        this.player = player;
    }

    public getAvailableMoves(board: Board) {
        throw new Error('This method must be implemented, and return a list of available moves');
    }

    public getMoveDirection() : number {
        return this.player == Player.WHITE ? WHITE_MOVE_DIRECTION : BLACK_MOVE_DIRECTION;
    }

    public getPossibleMoveInDirection(board: Board, max_travel_distance: number, direction: Direction) : Square[] {
        const start_square : Square = board.findPiece(this)

        const availableMoves : Square[] = new Array()
        const [rowDiff, colDiff] = getDirectionDiff(direction);

        for(let i =1; i <=max_travel_distance; i++) {
            const moveSquare : Square = new Square(start_square.row + i * rowDiff, start_square.col + i * colDiff)
            if (board.checkSquareInBounds(moveSquare) && !board.checkIfSquareBlocked(moveSquare)){
                availableMoves.push(moveSquare)
            }
            else {
                break;
            }
        }
        return availableMoves;
    }
    

    public moveTo(board: Board, newSquare: Square) {
        const currentSquare = board.findPiece(this);
        board.movePiece(currentSquare, newSquare);
    }
}
