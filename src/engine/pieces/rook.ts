import Piece from './piece';
import Player from '../player';
import Board from '../board';
import Square from '../square';
import GameSettings from '../gameSettings';
import { Direction, getDirectionDiff } from '../direction';

const ROOK_MAX_TRAVEL_DISTANCE = GameSettings.BOARD_SIZE -1

export default class Rook extends Piece {
    public constructor(player: Player) {
        super(player);
    }
    
    public getAvailableMoves(board: Board) {
        const leftSideMoves : Square[] = this.getPossibleMoveInDirection(board, ROOK_MAX_TRAVEL_DISTANCE, Direction.Left);
        const rightSideMoves : Square[] = this.getPossibleMoveInDirection(board, ROOK_MAX_TRAVEL_DISTANCE, Direction.Right);
        const upwardMoves : Square[] = this.getPossibleMoveInDirection(board, ROOK_MAX_TRAVEL_DISTANCE, Direction.Up);
        const downwardMoves : Square[] = this.getPossibleMoveInDirection(board, ROOK_MAX_TRAVEL_DISTANCE, Direction.Down);

        const horisontalMoves : Square[] = leftSideMoves.concat(rightSideMoves)
        const verticalMoves = downwardMoves.concat(upwardMoves)

        const availableMoves = verticalMoves.concat(horisontalMoves)       
        return availableMoves;

    }
}
