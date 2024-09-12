//eslint-disable-next-line @typescript-eslint/no-var-requires
const fs = require("fs/promises");
//eslint-disable-next-line @typescript-eslint/no-var-requires
const resolveRoot = require("../resolveRoot");
//eslint-disable-next-line @typescript-eslint/no-var-requires
const firstCharUpperCase = require("../firstCharUpperCase");
//eslint-disable-next-line @typescript-eslint/no-var-requires
const componentTemplate = require("./componentTemplate");
//eslint-disable-next-line @typescript-eslint/no-var-requires
const storyTemplate = require("./storyTemplate");

module.exports = async (layer, compName) => {
  const resolveUIPath = (...segments) =>
    resolveRoot("src", layer, compName, "ui", ...segments);

  const createUIDir = async () => {
    try {
      await fs.mkdir(resolveUIPath());
    } catch (e) {
      console.log("Не удалось создать UI директорию");
    }
  };

  const createComponent = async () => {
    try {
      const componentName = firstCharUpperCase(compName);
      await fs.mkdir(resolveUIPath(componentName));
      await fs.writeFile(
        resolveUIPath(componentName, `${componentName}.tsx`),
        componentTemplate(componentName)
      );
      await fs.writeFile(
        resolveUIPath(componentName, `${componentName}.stories.tsx`),
        storyTemplate(layer, componentName)
      );
    } catch (e) {
      console.log("Не удалось создать компонент");
    }
  };

  await createUIDir();
  await createComponent();
};
