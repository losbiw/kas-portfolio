import { Picture, Direction, Size } from '../../interfaces/Pictures.d';

const pictures: Picture[] = [
  {
    src: '/home/fire.jpg',
    alt: 'Redraw, this style looks nicer to me but it takes a hell lot longer 😩',
    direction: Direction.Right,
    size: Size.Small,
  },
  {
    src: '/home/flowers.jpg',
    alt: 'awooga, let’s pretend the flowers didn’t make me cry and give up on this three times 😼',
    direction: Direction.Left,
    size: Size.Big,
  },
  {
    src: '/home/icarus.jpg',
    alt: 'Hopefully this makes up for the weeks I didn’t post??? I don’t usually name my art or anything but I’d like to name this Failed Redemption :)',
    direction: Direction.Left,
    size: Size.Small,
  },
];

export default pictures;
