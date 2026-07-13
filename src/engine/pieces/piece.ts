import Player from '../player';
import Board from '../board';
import Square from '../square';
import { Direction, DirectionVector, getDirectionDiff } from '../direction';
import King from './king';

const WHITE_MOVE_DIRECTION = 1
const BLACK_MOVE_DIRECTION = -1

export default class Piece {
    public player: Player;

    public constructor(player: Player) {
        this.player = player;
    }

    public getAvailableMoves(board: Board) {
        throw new Error('This method must be implemented, and return a list of available moves');
    }

    public getMoveDirection() : number {
        return this.player == Player.WHITE ? WHITE_MOVE_DIRECTION : BLACK_MOVE_DIRECTION;
    }

    public getPossibleMoveInDirection(board: Board, max_travel_distance: number, direction: Direction) : Square[] {
        const startSquare : Square = board.findPiece(this)

        const availableMoves : Square[] = new Array()
        const directionVector: DirectionVector = getDirectionDiff(direction);

       for(let i =1; i <=max_travel_distance; i++) {
            const moveSquare : Square = new Square(startSquare.row + i * directionVector.row, startSquare.col + i * directionVector.col)
            if (board.checkSquareInBounds(moveSquare) && !board.checkIfSquareBlocked(moveSquare)){
                availableMoves.push(moveSquare)
                
            }
            else{
                return availableMoves;
            }
        }
        return availableMoves;
    }
    
    public getPossibleCaptureMoveInDirection(board: Board, max_travel_distance: number, direction: Direction) : Square[] {
        const startSquare : Square = board.findPiece(this)
        const captureMoves = new Array()
        const directionVector: DirectionVector = getDirectionDiff(direction);

        for(let i =1; i <=max_travel_distance; i++) {
            const moveSquare : Square = new Square(startSquare.row + i * directionVector.row, startSquare.col + i * directionVector.col)
            
            if (board.checkSquareInBounds(moveSquare) ){

                const blockingPiece : Piece | undefined = board.getPiece(moveSquare);
                const isBlockedByEnemyPiece : boolean = blockingPiece !== undefined ? blockingPiece.player !== this.player : false
                const isKing: boolean = blockingPiece !== undefined ? blockingPiece.constructor.name === "King" : false

                if (board.checkIfSquareBlocked(moveSquare) && isBlockedByEnemyPiece && !isKing){
                    captureMoves.push(moveSquare);
                    return captureMoves;
                }
            }
        }
        return captureMoves;
    }
    
    public moveTo(board: Board, newSquare: Square) {
        const currentSquare = board.findPiece(this);
        board.movePiece(currentSquare, newSquare);
    }
}
