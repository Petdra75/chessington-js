import Piece from './piece';
import Player from '../player';
import Board from '../board';
import Square from '../square';

const WHITE_MOVE_DIRECTION = 1
const BLACK_MOVE_DIRECTION = -1

export default class Pawn extends Piece {
    public constructor(player: Player) {
        super(player);
    }

    public getAvailableMoves(board: Board) : Square[] {
        const availablePawnMoves = new Array();
        const moveDirection = this.player == Player.WHITE ? WHITE_MOVE_DIRECTION : BLACK_MOVE_DIRECTION
        
        const pawnSquare : Square = board.findPiece(this)
        const forwardMove = new Square(pawnSquare.row + moveDirection, pawnSquare.col)
        
        availablePawnMoves.push(forwardMove)
        return availablePawnMoves;
    }
}
