'use strict'
const exec = require('child_process').execSync;

module.exports = function() {
  let hashes = exec('git rev-list HEAD').toString();
  hashes = hashes.trim().split('\n');
  return hashes;
};
