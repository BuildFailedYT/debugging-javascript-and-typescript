enum Language {
  Javascript = "javascript",
  Typescript = "typescript",
}

function printAyo(type: Language) {
  let ayo = 0;
  for (let i = 0; i < 10; i++) {
    ayo = i * 10;
  }
}

printAyo(Language.Javascript);
printAyo(Language.Typescript);
