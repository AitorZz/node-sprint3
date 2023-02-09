/*Entrega 3.1 El codi adjunt llegeix un fitxer situat en un directori inbox i
  escriu el seu contingut invertit en un altre fitxer al directori outbox.
   Reestructura i simplifiqui el codi existent per a evitar el denominat Callback Hell*/

const { readdir, readFile, writeFile } = require("fs/promises");

const { join } = require("path");
const inbox = join(__dirname,"inbox");
const outbox = join(__dirname,"outbox");

const reverseText = (str) => str.split("").reverse().join("");

async function modifydir() {
  try {
    const files = await readdir(inbox);
    for (const file of files) {
      const readFile = await readFile(join(inbox, file), "utf8");
      await writeFile(join(outbox, file), reverseText(textFile));
      console.log(`Received ${readFile}`);
    }
  } catch (err) {
    console.log(err);
  }
};

modifydir();
