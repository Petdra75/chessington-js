import Piece from './piece';
import Player from '../player';
import Board from '../board';
import Square from '../square';
import { DirectionVector } from '../direction';

const KNIGHT_MOVE_VECTORS : DirectionVector[] = [
    {row:-2, col:-1}, 
    {row:-2, col:1},
    {row:2, col:-1}, 
    {row:2, col:1}, 
    {row:-1, col:-2}, 
    {row:-1, col:2}, 
    {row:1, col:-2}, 
    {row:1, col:2}
]

export default class Knight extends Piece {
    public constructor(player: Player) {
        super(player);
    }

    public getAvailableMoves(board: Board) : Square[] {
        const knightSquare : Square = board.findPiece(this)
        const availableMoves : Square[]  = new Array()
        for(let i = 0 ; i < KNIGHT_MOVE_VECTORS.length; i++){
            const moveVector : DirectionVector = KNIGHT_MOVE_VECTORS[i];
            const availableMoveSquare= new Square(knightSquare.row + moveVector.row, knightSquare.col + moveVector.col)
            
            if (board.checkSquareInBounds(availableMoveSquare) && !board.checkIfSquareBlocked(availableMoveSquare)){
                availableMoves.push(availableMoveSquare)
            }
        }
        const availableCaptureMoves = this.getCaptureMoves(board) 
        return availableMoves.concat(availableCaptureMoves)
    }

    public getCaptureMoves(board: Board) : Square[] {
        const knightSquare : Square = board.findPiece(this)
        const availableMoves : Square[]  = new Array()

        for(let i = 0 ; i < KNIGHT_MOVE_VECTORS.length; i++){
            const moveVector : DirectionVector = KNIGHT_MOVE_VECTORS[i];
            const availableMoveSquare = new Square(knightSquare.row + moveVector.row, knightSquare.col + moveVector.col)
            
            if (board.checkSquareInBounds(availableMoveSquare)){
                
                const blockingPiece : Piece | undefined = board.getPiece(availableMoveSquare);
                const isBlockedByEnemyPiece : boolean = blockingPiece !== undefined ? blockingPiece.player !== this.player : false
                const isKing: boolean = blockingPiece !== undefined ? blockingPiece.constructor.name === "King" : false
                
                if (board.checkIfSquareBlocked(availableMoveSquare) && isBlockedByEnemyPiece && !isKing){
                    availableMoves.push(availableMoveSquare)
                    
                }
            }
        }
        return availableMoves
    }
}