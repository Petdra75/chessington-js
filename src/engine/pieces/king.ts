import Piece from './piece';
import Player from '../player';
import Board from '../board';
import Square from '../square';

const KING_TRAVEL_DISTANCE = 1

export default class King extends Piece {
    public constructor(player: Player) {
        super(player);
    }

    public getAvailableMoves(board: Board) {
            const qweenSquare : Square = board.findPiece(this)
            
            const leftSideMoves : Square[] = new Array();
            const rightSideMoves : Square[] = new Array()
            const upwardMoves : Square[] = new Array()
            const downwardMoves : Square[] = new Array();
    
            const principalDiagonal : Square[] = new Array();
            const secondaryDiagonal : Square[] = new Array();
    
            const leftMoveSquare = new Square(qweenSquare.row , qweenSquare.col-KING_TRAVEL_DISTANCE)
            const rightMoveSquare = new Square(qweenSquare.row , qweenSquare.col+KING_TRAVEL_DISTANCE)
            const upMoveSuqare = new Square(qweenSquare.row - KING_TRAVEL_DISTANCE, qweenSquare.col)
            const donwMoveSquare = new Square(qweenSquare.row + KING_TRAVEL_DISTANCE, qweenSquare.col)    
            
            const upLeftMoveSquare = new Square(qweenSquare.row-KING_TRAVEL_DISTANCE, qweenSquare.col-KING_TRAVEL_DISTANCE)
            const upRightMoveSquare = new Square(qweenSquare.row-KING_TRAVEL_DISTANCE , qweenSquare.col+KING_TRAVEL_DISTANCE)
            const downLeftMoveSuqare = new Square(qweenSquare.row + KING_TRAVEL_DISTANCE, qweenSquare.col-KING_TRAVEL_DISTANCE)
            const downRightMoveSquare = new Square(qweenSquare.row + KING_TRAVEL_DISTANCE, qweenSquare.col+KING_TRAVEL_DISTANCE)

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
        
            const horisontalMoves : Square[] = leftSideMoves.concat(rightSideMoves)
            const verticalMoves = downwardMoves.concat(upwardMoves)
            const diagonalMoves = principalDiagonal.concat(secondaryDiagonal)
    
            const availablePawnMoves = verticalMoves.concat(horisontalMoves).concat(diagonalMoves)       
            return availablePawnMoves;
        }
}
