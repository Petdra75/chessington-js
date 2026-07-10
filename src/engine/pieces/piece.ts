import Player from '../player';
import Board from '../board';
import Square from '../square';

const WHITE_MOVE_DIRECTION = 1
const BLACK_MOVE_DIRECTION = -1

export default class Piece {
    public player: Player;

    public constructor(player: Player) {
        this.player = player;
    }

    public getAvailableMoves(board: Board) {
        throw new Error('This method must be implemented, and return a list of available moves');
    }

    public getMoveDirection() : number {
        return this.player == Player.WHITE ? WHITE_MOVE_DIRECTION : BLACK_MOVE_DIRECTION;
    }

    public moveTo(board: Board, newSquare: Square) {
        const currentSquare = board.findPiece(this);
        board.movePiece(currentSquare, newSquare);
    }
}
