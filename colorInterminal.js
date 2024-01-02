
const colorTextInTerminal = (text) => {
  return '\033[31m' + text + '\033[39m';
}

const helloWorld = colorTextInTerminal("Hello world");

console.log(helloWorld);