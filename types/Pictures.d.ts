export enum Direction {
  Left = '-rotate-6',
  Right = 'rotate-6'
}

export enum Align {
  Top = 'self-start'
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
