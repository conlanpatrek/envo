let fs = require('fs')

/**
 * Envo
 * Conditionally read a list of environment variable files into process.
 *
 * @param  {...string} paths The list of paths sorted in priority order
 * @return {void}
 */
function envo(...paths) {
  // Store higher priority (already defined) env variables
  let tmp = Object.assign({}, process.env)
  // Loop through paths and load
  paths.forEach(path => _readPath)
  // Restore higher priority env variables
  Object.assign(process.env, tmp)
}

/**
 * If the provided path points to a file, read the contents of that file
 * into process.env
 *
 * @param  {string} path The filepath to load, conditionally.
 * @return {void}
 */
function _readPath(path) {
  if (fs.existsSync(path)) Object.assign(process.env, require(path))
}
