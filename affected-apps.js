const { execSync } = require('child_process');

const affected = execSync('npx nx affected:apps --plain', { encoding: 'utf-8' })
  .trim()
  .split(' ');

console.log(JSON.stringify(affected));
