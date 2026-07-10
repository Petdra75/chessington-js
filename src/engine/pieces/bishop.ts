import Piece from './piece';
import Player from '../player';
import Board from '../board';
import Square from '../square';

const BISHOP_TRAVEL_DISTANCE = 7

export default class Bishop extends Piece {
    public constructor(player: Player) {
        super(player);
    }

   public getAvailableMoves(board: Board) {   
        const rookSquare : Square = board.findPiece(this)

        const principalDiagonal : Square[] = new Array();
        const secondaryDiagonal : Square[] = new Array();

        for(let i=1; i <= BISHOP_TRAVEL_DISTANCE; i++){

            const upLeftMoveSquare = new Square(rookSquare.row-i, rookSquare.col-i)
            const upRightMoveSquare = new Square(rookSquare.row-i , rookSquare.col+i)
            const downLeftMoveSuqare = new Square(rookSquare.row + i, rookSquare.col-i)
            const downRightMoveSquare = new Square(rookSquare.row + i, rookSquare.col+i)

            if (board.checkSquareInBounds(upLeftMoveSquare)){
                principalDiagonal.push(upLeftMoveSquare)
            }
            if (board.checkSquareInBounds(upRightMoveSquare)){
                principalDiagonal.push(upRightMoveSquare)
            }
            if (board.checkSquareInBounds(downLeftMoveSuqare)){
                secondaryDiagonal.push(downLeftMoveSuqare)
            }
            if (board.checkSquareInBounds(downRightMoveSquare)){
                secondaryDiagonal.push(downRightMoveSquare)
            }
        }
    
        const availablePawnMoves = principalDiagonal.concat(secondaryDiagonal)       
        return availablePawnMoves;
       }
}
