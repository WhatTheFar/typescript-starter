const tsConfig = require('./tsconfig.json');
const tsConfigPaths = require('tsconfig-paths');

const baseUrl = './dist'; // Either absolute or relative path. If relative it's resolved to current working directory.
const {
  compilerOptions: { paths },
} = tsConfig;

if (paths) {
  tsConfigPaths.register({ baseUrl, paths });
}
