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
            const leftMoveSquare = new Square(rookSquare.row , rookSquare.col-i)
            
            if (board.checkSquareInBounds(leftMoveSquare) && !board.checkIfSquareBlocked(leftMoveSquare)){
                leftSideMoves.push(leftMoveSquare)
            }
            else {
                break;
            }
            
        }
        for(let i=1; i <= ROOK_TRAVEL_DISTANCE; i++){

            
            const rightMoveSquare = new Square(rookSquare.row , rookSquare.col+i)
           
            if (board.checkSquareInBounds(rightMoveSquare) && !board.checkIfSquareBlocked(rightMoveSquare)){
                rightSideMoves.push(rightMoveSquare)
            }
            else {
                break;
            }
            
        }
        for(let i=1; i <= ROOK_TRAVEL_DISTANCE; i++){
            
            const upMoveSuqare = new Square(rookSquare.row - i, rookSquare.col)
                       
            if (board.checkSquareInBounds(upMoveSuqare) && !board.checkIfSquareBlocked(upMoveSuqare)){
                upwardMoves.push(upMoveSuqare)
            }
            else {
                break;
            }
            
        }
        for(let i=1; i <= ROOK_TRAVEL_DISTANCE; i++){
            
            const donwMoveSquare = new Square(rookSquare.row + i, rookSquare.col)

            if (board.checkSquareInBounds(donwMoveSquare)){
                downwardMoves.push(donwMoveSquare)
            }
            else {
                break;
            }
        }
        const horisontalMoves : Square[] = leftSideMoves.concat(rightSideMoves)
        const verticalMoves = downwardMoves.concat(upwardMoves)

        const availableMoves = verticalMoves.concat(horisontalMoves)       
        return availableMoves;

    }
    
}
