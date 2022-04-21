import gray from './gray';
import green from './green';
import purple from './purple';
import yellow from './yellow';
import blue from './blue';
import red from './red';

export const black = '#000000';
export const white = '#FFFFFF';

export const primary = {
  blue: blue[500],
  gray: gray[500],
  white,
};

export const secondary = {
  green: green[500],
  purple: purple[500],
  yellow: yellow[500],
};

export const status = {
  successful: green[500],
  ongoing: blue[500],
  idle: gray[500],
  pending: yellow[500],
  error: red[500],
  closed: gray[100],
};

const common = {
  black,
  white,
  primary,
  secondary,
  status,
};

export default { ...common };
