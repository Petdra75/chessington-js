import Piece from './piece';
import Player from '../player';
import Board from '../board';
import Square from '../square';
import GameSettings from '../gameSettings';
import { Direction } from '../direction';

const BISHOP_MAX_TRAVEL_DISTANCE = GameSettings.BOARD_SIZE -1 

export default class Bishop extends Piece {
    public constructor(player: Player) {
        super(player);
    }

   public getAvailableMoves(board: Board) {   
        const principalDiagonal : Square[] = this.getPossibleMoveInDirection(board, BISHOP_MAX_TRAVEL_DISTANCE, Direction.UpRight)
                                                .concat(this.getPossibleMoveInDirection(board, BISHOP_MAX_TRAVEL_DISTANCE, Direction.DownLeft));

        const secondaryDiagonal : Square[] = this.getPossibleMoveInDirection(board, BISHOP_MAX_TRAVEL_DISTANCE, Direction.UpLeft)
                                                .concat(this.getPossibleMoveInDirection(board, BISHOP_MAX_TRAVEL_DISTANCE, Direction.DownRight))

        const availableMoves = principalDiagonal.concat(secondaryDiagonal)       
        return availableMoves;
       }
}
