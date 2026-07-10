import Piece from './piece';
import Player from '../player';
import Board from '../board';
import Square from '../square';

const ROOK_TRAVEL_DISTANCE = 7

export default class Rook extends Piece {
    public hasMoved : boolean;
    public constructor(player: Player) {
        super(player);
        this.hasMoved = false
    }

    public getAvailableMoves(board: Board) {
        
        const rookSquare : Square = board.findPiece(this)

        const leftSideMoves : Square[] = new Array();
        const rightSideMoves : Square[] = new Array()
        const upwardMoves : Square[] = new Array()
        const downwardMoves : Square[] = new Array();

        for(let i=1; i <= ROOK_TRAVEL_DISTANCE; i++){

            const leftMoveSquare = new Square(rookSquare.row , rookSquare.col-i)
            const rightMoveSquare = new Square(rookSquare.row , rookSquare.col+i)
            const upMoveSuqare = new Square(rookSquare.row - i, rookSquare.col)
            const donwMoveSquare = new Square(rookSquare.row + i, rookSquare.col)    
            if (board.checkSquareInBounds(leftMoveSquare)){
                leftSideMoves.push(leftMoveSquare)
            }
             if (board.checkSquareInBounds(rightMoveSquare)){
                rightSideMoves.push(rightMoveSquare)
            }
            if (board.checkSquareInBounds(upMoveSuqare)){
                upwardMoves.push(upMoveSuqare)
            }
            if (board.checkSquareInBounds(donwMoveSquare)){
                downwardMoves.push(donwMoveSquare)
            }
        }
        const horisontalMoves : Square[] = leftSideMoves.concat(rightSideMoves)
        const verticalMoves = downwardMoves.concat(upwardMoves)

        const availablePawnMoves = verticalMoves.concat(horisontalMoves)       
        return availablePawnMoves;
    }
    public moveTo(board: Board, newSquare: Square) {
        this.hasMoved = true
        const currentSquare = board.findPiece(this);
        board.movePiece(currentSquare, newSquare);
    }
}
