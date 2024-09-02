import fs from "fs";

export default function createFolders(){
  const dirs = ["crud", "crud/routes", "crud/controllers", "crud/models"];
  dirs.forEach((dir) => {
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
  });
};
