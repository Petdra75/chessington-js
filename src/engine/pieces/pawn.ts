import Piece from './piece';
import Player from '../player';
import Board from '../board';
import Square from '../square';
import { Direction } from '../direction';


const FIRST_MOVE_TRAVEL_DISTANCE = 2
const BASE_MOVE_TRAVEL_DISTANCE =1

export default class Pawn extends Piece {
    private hasMoved;

    public constructor(player: Player) {
        super(player);
        this.hasMoved = false
    }

    public getAvailableMoves(board: Board) : Square[] {
        const squareTravelDistance : number = !this.hasMoved ? FIRST_MOVE_TRAVEL_DISTANCE : BASE_MOVE_TRAVEL_DISTANCE;   
        
        const pawnDirection: Direction = this.player === Player.WHITE ? Direction.Down : Direction.Up;

        const forwardMoves : Square[] = this.getPossibleMoveInDirection(board, squareTravelDistance, pawnDirection)
        
        const availableMoves = forwardMoves;
        return availableMoves;
    }
    public moveTo(board: Board, newSquare: Square) : void {
        this.hasMoved = true
        const currentSquare = board.findPiece(this);
        board.movePiece(currentSquare, newSquare);
    }
}
