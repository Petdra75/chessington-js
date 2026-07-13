import Piece from './piece';
import Player from '../player';
import Board from '../board';
import Square from '../square';
import GameSettings from '../gameSettings';
import { Direction } from '../direction';

const QUEEN_MAX_TRAVEL_DISTANCE = GameSettings.BOARD_SIZE - 1
const MOVEDIRECTIONS : Direction[] = [Direction.Up, Direction.Down, Direction.Left, Direction.Right, Direction.UpRight, Direction.DownRight, Direction.UpLeft, Direction.DownLeft]

export default class Queen extends Piece {
    public constructor(player: Player) {
        super(player);
    }

    public getAvailableMoves(board: Board) : Square[] {
        const availableQuietMoves: Square[] = new Array()

        for (let i = 0; i < MOVEDIRECTIONS.length; i ++){
            const directionBoundedMoves =  this.getPossibleMoveInDirection(board, QUEEN_MAX_TRAVEL_DISTANCE, MOVEDIRECTIONS[i])
            availableQuietMoves.push(...directionBoundedMoves);
        }
        const availableCaptureMoves: Square[] = this.getCaptureMoves(board)
        const availableMoves: Square[] = availableQuietMoves.concat(availableCaptureMoves)
        return availableMoves
    }

    public getCaptureMoves(board: Board) : Square[] { 
        const availableCaptureMoves : Square[] = new Array()
        for (let i = 0; i < MOVEDIRECTIONS.length; i++){
            const directionBoundedMoves =  this.getPossibleCaptureMoveInDirection(board, QUEEN_MAX_TRAVEL_DISTANCE, MOVEDIRECTIONS[i])
            availableCaptureMoves.push(...directionBoundedMoves);
        }
        return availableCaptureMoves;
    }
}
