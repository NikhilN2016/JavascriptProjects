
const number = parseInt(prompt('Please enter a positive number: '));
let n1 = 0, n2 = 1, next;

console.log('Fibonacci Series:');
console.log(n1);
console.log(n2); 

next = n1 + n2;

while (next <= number) {
    console.log(next);
    n1 = n2;
    n2 = next;
    next = n1 + n2;
}
