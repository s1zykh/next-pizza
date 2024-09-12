//eslint-disable-next-line @typescript-eslint/no-var-requires
const fs = require("fs/promises");
//eslint-disable-next-line @typescript-eslint/no-var-requires
const resolveRoot = require("../resolveRoot");
//eslint-disable-next-line @typescript-eslint/no-var-requires
const firstCharUpperCase = require("../firstCharUpperCase");

module.exports = async (layer, CompName) => {
  const componentName = firstCharUpperCase(CompName);

  try {
    await fs.writeFile(
      resolveRoot("src", layer, CompName, "index.ts"),
      `export { ${componentName} } from './ui/${componentName}/${componentName}';`
    );
  } catch (e) {
    console.log("Не удалось создать PUBLIC API");
  }
};
