function addUpToSlow(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }

  return total;
}

function addUpToFast(n) {
  return n * (n + 1) / 2;
}

const TEST_NUMBER = 2000000000;

console.time('Slow fn time');
console.log(`Slow fn: ${addUpToSlow(TEST_NUMBER)}`);
console.timeEnd('Slow fn time');

console.log('\n');

console.time('Fast fn time');
console.log(`Fast fn: ${addUpToFast(TEST_NUMBER)}`);
console.timeEnd('Fast fn time');
