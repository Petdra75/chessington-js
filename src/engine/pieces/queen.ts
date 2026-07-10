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
        const rookSquare : Square = board.findPiece(this)
        
        const leftSideMoves : Square[] = new Array();
        const rightSideMoves : Square[] = new Array()
        const upwardMoves : Square[] = new Array()
        const downwardMoves : Square[] = new Array();

        const principalDiagonal : Square[] = new Array();
        const secondaryDiagonal : Square[] = new Array();

        for(let i=1; i <= QUEEN_TRAVEL_DISTANCE; i++){

            const leftMoveSquare = new Square(rookSquare.row , rookSquare.col-i)
            const rightMoveSquare = new Square(rookSquare.row , rookSquare.col+i)
            const upMoveSuqare = new Square(rookSquare.row - i, rookSquare.col)
            const donwMoveSquare = new Square(rookSquare.row + i, rookSquare.col)    
            
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
