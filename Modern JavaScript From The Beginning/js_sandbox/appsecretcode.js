const secretCode = 'PurplePrince';

let guess = prompt('Enter the secret code...');
  while (guess !== secretCode) {
  prompt('Nope guess again. Enter the secret code...')
}
alert('Congrats! You guessed it!');

