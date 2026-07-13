import Piece from './piece';
import Player from '../player';
import Board from '../board';
import Square from '../square';
import GameSettings from '../gameSettings';
import { Direction, getDirectionDiff } from '../direction';

const ROOK_MAX_TRAVEL_DISTANCE = GameSettings.BOARD_SIZE -1
const MOVE_DIRECTIONS : Direction[] = [ Direction.Left, Direction.Right, Direction.Up, Direction.Down]

export default class Rook extends Piece {
    public constructor(player: Player) {
        super(player);
    }
    
    public getAvailableMoves(board: Board) : Square[] {
        const availableQuietMoves: Square[] = new Array()
        
        for (let i = 0; i < MOVE_DIRECTIONS.length; i++){
            const directionBoundedMoves =  this.getPossibleMoveInDirection(board, ROOK_MAX_TRAVEL_DISTANCE, MOVE_DIRECTIONS[i])
            availableQuietMoves.push(...directionBoundedMoves);
        }
        const availableCaptureMoves: Square[] = this.getCaptureMoves(board)
        return availableQuietMoves.concat(availableCaptureMoves)

    }

    public getCaptureMoves(board: Board) : Square[] {
        const availableCaptureMoves: Square[] = new Array()
        for (let i = 0; i < MOVE_DIRECTIONS.length; i ++){
            const directionBoundedMoves =  this.getPossibleCaptureMoveInDirection(board, ROOK_MAX_TRAVEL_DISTANCE, MOVE_DIRECTIONS[i])
            availableCaptureMoves.push(...directionBoundedMoves);
        }
        return availableCaptureMoves
    }
}
