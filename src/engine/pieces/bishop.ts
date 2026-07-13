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

   public getAvailableMoves(board : Board) {   

        const moveDirections = [Direction.UpLeft, Direction.DownRight, Direction.UpRight, Direction.DownLeft]

        const availableQuietMoves : Square[] = new Array()
        for (let i = 0 ; i< moveDirections.length; i++){
            const directionBoundedMoves = this.getPossibleMoveInDirection(board, BISHOP_MAX_TRAVEL_DISTANCE, moveDirections[i])
            availableQuietMoves.push(...directionBoundedMoves)
        }
        
        const availableCaptureMoves = this.getCaptureMoves(board);
        const availableMoves = availableQuietMoves.concat(availableCaptureMoves);
        
        return availableMoves;
       }

    public getCaptureMoves(board : Board) {
        const moveDirections = [Direction.UpRight, Direction.DownRight, Direction.UpLeft, Direction.DownLeft]
        const availableCaptureMoves : Square[] = new Array()
        for (let i = 0 ; i< moveDirections.length; i++){
            const directionBoundedMoves = this.getPossibleCaptureMoveInDirection(board, BISHOP_MAX_TRAVEL_DISTANCE, moveDirections[i])
            availableCaptureMoves.push(...directionBoundedMoves)
        }
        return availableCaptureMoves;
    }
}
