import Piece from './piece';
import Player from '../player';
import Board from '../board';
import Square from '../square';
const QUEEN_TRAVEL_DISTANCE = 7
export default class Queen extends Piece {
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

        for(let i=1; i <= QUEEN_TRAVEL_DISTANCE; i++){

            const leftMoveSquare = new Square(qweenSquare.row , qweenSquare.col-i)
            const rightMoveSquare = new Square(qweenSquare.row , qweenSquare.col+i)
            const upMoveSuqare = new Square(qweenSquare.row - i, qweenSquare.col)
            const donwMoveSquare = new Square(qweenSquare.row + i, qweenSquare.col)    
            
            const upLeftMoveSquare = new Square(qweenSquare.row-i, qweenSquare.col-i)
            const upRightMoveSquare = new Square(qweenSquare.row-i , qweenSquare.col+i)
            const downLeftMoveSuqare = new Square(qweenSquare.row + i, qweenSquare.col-i)
            const downRightMoveSquare = new Square(qweenSquare.row + i, qweenSquare.col+i)

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
        }
        const horisontalMoves : Square[] = leftSideMoves.concat(rightSideMoves)
        const verticalMoves = downwardMoves.concat(upwardMoves)
        const diagonalMoves = principalDiagonal.concat(secondaryDiagonal)

        const availablePawnMoves = verticalMoves.concat(horisontalMoves).concat(diagonalMoves)       
        return availablePawnMoves;
    }
}
