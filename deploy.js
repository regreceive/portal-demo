var process = require("child_process");
let path = require("path");

try {
  process.execSync("rm -rf dist", { cwd: path.join(__dirname) });
} catch {}

process.exec("mkdir -p dist/");
process.execSync("yarn workspace portal build");
process.execSync("cp -r ./packages/portal/dist/* ./dist/");

process.exec("mkdir -p dist/apps/entry");
process.execSync("yarn workspace entry build");
process.execSync("cp -r ./packages/entry/dist/* ./dist/apps/entry/");

process.exec("mkdir -p dist/apps/antd-ui");
process.execSync("yarn workspace antd-ui build");
process.execSync("cp -r ./packages/antd-ui/dist/* ./dist/apps/antd-ui/");

process.exec("mkdir -p dist/apps/compatibility");
process.execSync("yarn workspace compatibility build");
process.execSync("cp -r ./packages/compatibility/dist/* ./dist/apps/compatibility/");

process.exec("mkdir -p dist/apps/features");
process.execSync("yarn workspace features build");
process.execSync("cp -r ./packages/features/dist/* ./dist/apps/features/");

process.exec("mkdir -p dist/apps/editor");
process.execSync("yarn workspace editor build");
process.execSync("cp -r ./packages/editor/dist/* ./dist/apps/editor/");