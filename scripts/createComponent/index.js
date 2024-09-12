//eslint-disable-next-line @typescript-eslint/no-var-requires
const createTemplate = require("./templates/createTemplate");

const layer = process.argv[2];
const ComponentName = process.argv[3];

const layers = ["features", "entities", "pages", "widgets"];

if (!layer || !layers.includes(layer)) {
  throw new Error(`Укажите слой ${layers.join(" или ")}`);
}

if (!ComponentName) {
  throw new Error("Укажите название компонента");
}

createTemplate(layer, ComponentName);
