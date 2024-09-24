const animationString = "|/-\\|/-\\|/-\\|/-\\|/-\\|/-\\";

for (let i = 0; i < animationString.length; i++) {
  setTimeout(() => {
    process.stdout.write(`\r${animationString[i]} `);
  }, i * 100);
}