const open = require("open");

(async () => {
  const filePath = `${__dirname}/../example/demo.html`
  console.log(`Opening example demo in default browser...\n${filePath}\n`);
  await open(`file://${filePath}`);
})();
