import fs from "fs";

export default  function updateIndexFile(modelName, tableName){
  const indexPath = `crud/index.js`;

  let indexContent = "";
  if (fs.existsSync(indexPath)) {
    indexContent = fs.readFileSync(indexPath, "utf-8");
  } else {
    indexContent = `
const express = require('express');
const app = express();

app.use(express.json());
`;
  }

  const routeImport = `const ${modelName}Routes = require('./routes/${modelName}Routes.js');\n`;
  const routeUse = `app.use('/api/', ${modelName}Routes);\n`;

  if (!indexContent.includes(routeImport)) {
    indexContent = routeImport + indexContent;
  }

  if (!indexContent.includes(routeUse)) {
    indexContent = indexContent.replace(
      "app.use(express.json());\n",
      `app.use(express.json());\n${routeUse}`
    );
  }

  if (!indexContent.includes("app.listen(3000")) {
    indexContent += `
app.listen(3000, () => {
    console.log('Server running on port 3000');
});
`;
  }

  fs.writeFileSync(indexPath, indexContent);
};


