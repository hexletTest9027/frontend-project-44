import cli from './cli';

export default function foo(game) {
  cli();
  for (let i = 0; i < 3; i += 1) {
    game();
  }
}
