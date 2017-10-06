import Piece from './piece';
import Player from '../player';
import Board from '../board';
import Square from '../square';

const KNIGHT_MOVE_DIFFS = [[-2, -1], [-2, 1], [2, -1], [2, 1], [-1, -2], [-1, 2], [1, -2], [1, 2]]

export default class Knight extends Piece {
    public constructor(player: Player) {
        super(player);
    }
    public getAvailableMoves(board: Board) {
        const knightSquare : Square = board.findPiece(this)
        const availableMoves : Square[]  = new Array()

        for(let i = 0 ; i < KNIGHT_MOVE_DIFFS.length; i++){
            const [diffRow,  diffCol] = KNIGHT_MOVE_DIFFS[i]
            
            const availableMoveSquare= new Square(knightSquare.row + diffRow, knightSquare.col + diffCol)
            
            if (board.checkSquareInBounds(availableMoveSquare)){
                availableMoves.push(availableMoveSquare)
            }
        }
        
        return availableMoves
    }

}