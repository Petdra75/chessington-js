import Piece from './piece';
import Player from '../player';
import Board from '../board';
import Square from '../square';
import { Direction } from '../direction';

const KING_MAX_TRAVEL_DISTANCE = 1

export default class King extends Piece {
    public constructor(player: Player) {
        super(player);
    }

    public getAvailableMoves(board: Board) {
            const leftSideMoves : Square[] =  this.getPossibleMoveInDirection(board, KING_MAX_TRAVEL_DISTANCE, Direction.Left);
            const rightSideMoves : Square[] = this.getPossibleMoveInDirection(board, KING_MAX_TRAVEL_DISTANCE, Direction.Right);
            const upwardMoves : Square[] = this.getPossibleMoveInDirection(board, KING_MAX_TRAVEL_DISTANCE, Direction.Up);
            const downwardMoves : Square[] = this.getPossibleMoveInDirection(board, KING_MAX_TRAVEL_DISTANCE, Direction.Down);
    
        
            const principalDiagonal : Square[] = this.getPossibleMoveInDirection(board, KING_MAX_TRAVEL_DISTANCE, Direction.UpRight)
                                                    .concat(this.getPossibleMoveInDirection(board, KING_MAX_TRAVEL_DISTANCE, Direction.DownLeft));
    
            const secondaryDiagonal : Square[] = this.getPossibleMoveInDirection(board, KING_MAX_TRAVEL_DISTANCE, Direction.UpLeft)
                                                    .concat(this.getPossibleMoveInDirection(board, KING_MAX_TRAVEL_DISTANCE, Direction.DownRight))
        
            const horisontalMoves : Square[] = leftSideMoves.concat(rightSideMoves)
            const verticalMoves = downwardMoves.concat(upwardMoves)
            const diagonalMoves = principalDiagonal.concat(secondaryDiagonal)
    
            const availablePawnMoves = verticalMoves.concat(horisontalMoves).concat(diagonalMoves)       
            return availablePawnMoves;
        }
}
