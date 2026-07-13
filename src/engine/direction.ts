export const enum Direction {
    Up,
    Left, 
    Down,
    Right,
    UpLeft,
    UpRight,
    DownLeft,
    DownRight,
}
export type DirectionVector = {
    row: number,
    col: number
}
export function getDirectionDiff(direction: Direction) :DirectionVector{
    switch (direction) {
            case Direction.Up:
                return {row:-1, col:0}
            case Direction.Left:
                return {row:0, col:-1}
            case Direction.Down:
                return {row:1, col:0}
            case Direction.Right:
                return {row:0, col:1}
            case Direction.UpLeft:
                return {row:-1, col:-1}
            case Direction.UpRight:
                return {row:-1, col:1}
            case Direction.DownLeft:
                return {row:1, col:-1}
            case Direction.DownRight:
                return {row:1, col:1}
        }
    }
