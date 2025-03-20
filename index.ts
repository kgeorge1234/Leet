function greet(name: string): string {
  let data = [1, 2, 3];
  for (let i = 0; i < data.length; i++) {
    console.log(data[i]);
  }
  return `Hello, ${name}!`;
}

console.log(greet("John"));
