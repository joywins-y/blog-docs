

const fs = require("fs");
const path = require("path");

async function test() {
  const fromFileName = path.resolve(__dirname, "./demo/index.txt");
  const buffer = await fs.promises.readFile(fromFileName);
  const toFileName = path.resolve(__dirname, "./demo/index copy.txt");
  await fs.promises.writeFile(toFileName, buffer);
  console.log('copy success');
}

test();




