enum Language {
  Javascript = "javascript",
  Typescript = "typescript",
}

function printAyo(type: Language) {
  let ayo = 0;
  for (let i = 0; i < 3; i++) {
    ayo = i * (type === Language.Javascript ? 0 : 10);
  }
}

printAyo(Language.Javascript);
printAyo(Language.Typescript);
