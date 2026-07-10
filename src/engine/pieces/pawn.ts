import Piece from './piece';
import Player from '../player';
import Board from '../board';
import Square from '../square';


const FIRST_MOVE_TRAVEL_DISTANCE = 2
const BASE_MOVE_TRAVEL_DISTANCE =1

export default class Pawn extends Piece {
    private hasMoved;

    public constructor(player: Player) {
        super(player);
        this.hasMoved = false
    }

    public getAvailableMoves(board: Board) : Square[] {
        const forwardMoves : Square[] = new Array();
        
        const squareTravelDistance : number = !this.hasMoved ? FIRST_MOVE_TRAVEL_DISTANCE : BASE_MOVE_TRAVEL_DISTANCE   

        const pawnSquare : Square = board.findPiece(this)
        
        for(let i = 1; i<=squareTravelDistance; i++) {
            
            const availableMoveSquare = new Square(pawnSquare.row + i * this.getMoveDirection(), pawnSquare.col)
            
            if (board.checkSquareInBounds(availableMoveSquare)){
                forwardMoves.push(availableMoveSquare)
            }
        }

        const availableMoves = forwardMoves;
        return availableMoves;
    }
    public moveTo(board: Board, newSquare: Square) : void {
        this.hasMoved = true
        const currentSquare = board.findPiece(this);
        board.movePiece(currentSquare, newSquare);
    }
}
