export enum Direction {
  Left = 'left',
  Right = 'right'
}

export enum Size {
  Big = 'big',
  Small = 'small'
}

export interface Picture {
  src: string,
  alt: string,
  direction: Direction,
  size: Size,
}
