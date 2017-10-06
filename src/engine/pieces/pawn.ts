import Piece from './piece';
import Player from '../player';
import Board from '../board';
import Square from '../square';


const BEFORE_MOVE_TRAVEL_DISTANCE = 2
const AFTER_MOVE_TRAVEL_DISTANCE =1

export default class Pawn extends Piece {
    private hasMoved;

    public constructor(player: Player) {
        super(player);
        this.hasMoved = false
    }

    public getAvailableMoves(board: Board) : Square[] {
        const forwardMoves = new Array();
        const diagonalMoves = new Array(); 
        
        
        const squareTravelDistance = !this.hasMoved ? BEFORE_MOVE_TRAVEL_DISTANCE : AFTER_MOVE_TRAVEL_DISTANCE   

        const pawnSquare : Square = board.findPiece(this)
        
        for(let i = 1; i<=squareTravelDistance; i++) {
            
            const availableMoveSquare = new Square(pawnSquare.row + i * this.getMoveDirection(), pawnSquare.col)
            
            if (board.checkSquareInBounds(availableMoveSquare) && !board.checkIfSquareBlocked(availableMoveSquare)){
                forwardMoves.push(availableMoveSquare)
            }
            else {
                break;
            }
        }

        const availablePawnMoves = forwardMoves.concat(diagonalMoves)        
        return availablePawnMoves;
    }
    public moveTo(board: Board, newSquare: Square) {
        this.hasMoved = true
        const currentSquare = board.findPiece(this);
        board.movePiece(currentSquare, newSquare);
    }
}
