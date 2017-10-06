import Piece from './piece';
import Player from '../player';
import Board from '../board';
import Square from '../square';
import GameSettings from '../gameSettings';
import { Direction } from '../direction';

const QUEEN_MAX_TRAVEL_DISTANCE = GameSettings.BOARD_SIZE - 1

export default class Queen extends Piece {
    public constructor(player: Player) {
        super(player);
    }

    public getAvailableMoves(board: Board) {
        const qweenSquare : Square = board.findPiece(this)
        
        const leftSideMoves : Square[] =  this.getPossibleMoveInDirection(board, QUEEN_MAX_TRAVEL_DISTANCE, Direction.Left);
        const rightSideMoves : Square[] = this.getPossibleMoveInDirection(board, QUEEN_MAX_TRAVEL_DISTANCE, Direction.Right);
        const upwardMoves : Square[] = this.getPossibleMoveInDirection(board, QUEEN_MAX_TRAVEL_DISTANCE, Direction.Up);
        const downwardMoves : Square[] = this.getPossibleMoveInDirection(board, QUEEN_MAX_TRAVEL_DISTANCE, Direction.Down);

 
        const principalDiagonal : Square[] = this.getPossibleMoveInDirection(board, QUEEN_MAX_TRAVEL_DISTANCE, Direction.UpRight)
                                                .concat(this.getPossibleMoveInDirection(board, QUEEN_MAX_TRAVEL_DISTANCE, Direction.DownLeft));

        const secondaryDiagonal : Square[] = this.getPossibleMoveInDirection(board, QUEEN_MAX_TRAVEL_DISTANCE, Direction.UpLeft)
                                                .concat(this.getPossibleMoveInDirection(board, QUEEN_MAX_TRAVEL_DISTANCE, Direction.DownRight))

        
        const horisontalMoves : Square[] = leftSideMoves.concat(rightSideMoves)
        const verticalMoves : Square[] = downwardMoves.concat(upwardMoves)
        const diagonalMoves : Square[] = principalDiagonal.concat(secondaryDiagonal)

        const availableMoves : Square[] = verticalMoves.concat(horisontalMoves).concat(diagonalMoves)       
        return availableMoves;
    }
}
