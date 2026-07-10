import Piece from './piece';
import Player from '../player';
import Board from '../board';
import Square from '../square';
import GameSettings from '../gameSettings';

const ROOK_MAX_TRAVEL_DISTANCE = GameSettings.BOARD_SIZE -1

export default class Rook extends Piece {
    public constructor(player: Player) {
        super(player);
    }

    public getAvailableMoves(board: Board) {
        const rookSquare : Square = board.findPiece(this)

        const leftSideMoves : Square[] = new Array();
        const rightSideMoves : Square[] = new Array()
        const upwardMoves : Square[] = new Array()
        const downwardMoves : Square[] = new Array();

        for(let i=1; i <= ROOK_MAX_TRAVEL_DISTANCE; i++){

            const leftMoveSquare : Square = new Square(rookSquare.row , rookSquare.col-i)
            const rightMoveSquare : Square = new Square(rookSquare.row , rookSquare.col+i)
            const upMoveSuqare : Square = new Square(rookSquare.row - i, rookSquare.col)
            const donwMoveSquare : Square = new Square(rookSquare.row + i, rookSquare.col)    
            
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

        const availableMoves = verticalMoves.concat(horisontalMoves)       
        return availableMoves;

    }
    
}
