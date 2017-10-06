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

export function getDirectionDiff(direction: Direction) : number[] {
        switch (direction) {
            case Direction.Up:
                return [-1, 0]
            case Direction.Left:
                return [0, -1]
            case Direction.Down:
                return [1, 0]
            case Direction.Right:
                return [0, 1]
            case Direction.UpLeft:
                return [-1, -1]
            case Direction.UpRight:
                return [-1, 1]
            case Direction.DownLeft:
                return [1, -1]
            case Direction.DownRight:
                return [1, 1]
        }
    }