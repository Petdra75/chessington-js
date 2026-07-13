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

        const availableQuietMoves : Square[] = this.getPossibleMoveInDirection(board, squareTravelDistance, pawnDirection)
        const availableCaptureMoves : Square[] = this.getCaptureMoves(board)
        return availableQuietMoves.concat(availableCaptureMoves);
        
    }

    public getCaptureMoves(board : Board ) : Square[] {
        const isWhite : boolean = this.player === Player.WHITE
        const leftTakeDirection: Direction = isWhite ? Direction.DownLeft : Direction.UpLeft;
        const rightTakeDirection: Direction = isWhite ? Direction.DownRight : Direction.UpRight;
        
        const principalDiagonal : Square[] = this.getPossibleCaptureMoveInDirection(board, 1, leftTakeDirection);
        const secondaryDiagonal : Square[] = this.getPossibleCaptureMoveInDirection(board, 1, rightTakeDirection);
        
        return  principalDiagonal.concat(secondaryDiagonal)
    }

    public moveTo(board: Board, newSquare: Square) : void {
        this.hasMoved = true
        const currentSquare = board.findPiece(this);
        board.movePiece(currentSquare, newSquare);
    }
}
