export enum Direction {
  Left = 'left',
  Right = 'right'
}

export enum Align {
  Top = 'top'
}

export enum Size {
  Big = 'big',
  Middle = 'middle',
  Small = 'small'
}

export interface Picture {
  src: string,
  alt: string,
}

export interface ExtendedPicture extends Picture {
  direction: Direction,
  size: Size,
}
