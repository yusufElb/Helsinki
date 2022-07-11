let input = prompt('Hey, say something!')
while (true) {
  input = prompt(input);
  if (input.toLowerCase() === 'stop copying me') break;
}
alert('ok you win')

//break key word will stop a loop at a conditional. ie.  if iterations are unknown you can set the loop to stop at any point (100 iterations for example)