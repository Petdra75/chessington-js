import Piece from './piece';
import Player from '../player';
import Board from '../board';
import Square from '../square';
import { Direction } from '../direction';

const KING_MAX_TRAVEL_DISTANCE = 1
const MOVE_DIRECTIONS : Direction[] = [Direction.Up, Direction.Down, Direction.Left, Direction.Right, Direction.UpRight, Direction.DownRight, Direction.UpLeft, Direction.DownLeft]

export default class King extends Piece {
    public constructor(player: Player) {
        super(player);
    }

     public getAvailableMoves(board: Board) : Square[] {
        const availableQuietMoves: Square[] = new Array()

        for (let i = 0; i < MOVE_DIRECTIONS.length; i ++){
            const directionBoundedMoves =  this.getPossibleMoveInDirection(board, KING_MAX_TRAVEL_DISTANCE, MOVE_DIRECTIONS[i])
            availableQuietMoves.push(...directionBoundedMoves);
        }
        const availableCaptureMoves: Square[] = this.getCaptureMoves(board)
        return availableQuietMoves.concat(availableCaptureMoves)
    }

    public getCaptureMoves(board: Board) : Square[] { 
        const availableCaptureMoves : Square[] = new Array()
        for (let i = 0; i < MOVE_DIRECTIONS.length; i++){
            const directionBoundedMoves =  this.getPossibleCaptureMoveInDirection(board, KING_MAX_TRAVEL_DISTANCE, MOVE_DIRECTIONS[i])
            availableCaptureMoves.push(...directionBoundedMoves);
        }
        return availableCaptureMoves;
    }
}
