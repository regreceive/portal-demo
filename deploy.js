var process = require("child_process");
let path = require("path");
let mkdirp = require("mkdirp");

try {
  process.execSync("rm -rf dist", { cwd: path.join(__dirname) });
} catch {}

mkdirp.sync('./dist')
process.execSync("yarn workspace portal build");
process.execSync("cp -r ./packages/portal/dist/* ./dist/");

mkdirp.sync('./dist/apps/entry')
process.execSync("yarn workspace entry build");
process.execSync("cp -r ./packages/entry/dist/* ./dist/apps/entry/");

mkdirp.sync('./dist/apps/antd-ui')
process.execSync("yarn workspace antd-ui build");
process.execSync("cp -r ./packages/antd-ui/dist/* ./dist/apps/antd-ui/");

mkdirp.sync('./dist/apps/compatibility')
process.execSync("yarn workspace compatibility build");
process.execSync(
  "cp -r ./packages/compatibility/dist/* ./dist/apps/compatibility/"
);

mkdirp.sync('./dist/apps/features')
process.execSync("yarn workspace features build");
process.execSync("cp -r ./packages/features/dist/* ./dist/apps/features/");

mkdirp.sync('./dist/apps/editor')
process.execSync("yarn workspace editor build");
process.execSync("cp -r ./packages/Editor/dist/* ./dist/apps/editor/");
