function recursiveFibonacci(n: number): number {
    if (Number.isInteger(n) && n > 0) {
        if ([1, 2].includes(n)) { // base (non-recursive) base
            return 1
        }
        return recursiveFibonacci(n - 1) + recursiveFibonacci(n - 2)
    }
    return -1
}

console.log(recursiveFibonacci(5))
console.log(recursiveFibonacci(10))
// console.log(recursiveFibonacci(50))
// This one won't work! We need a workaround...

function recursiveFibonacciWithMemoization(): (m: number) => number { // closure
    const memo: { [x: number]: number } = { 1: 1, 2: 1 } // actual memoization

    return function fibonacci(m: number): number {
        if (!memo[m]) {
            memo[m] = fibonacci(m - 1) + fibonacci(m - 2)
        }
        return memo[m]
    }
}

const fibo = recursiveFibonacciWithMemoization()
console.log(fibo(5))
console.log(fibo(10))
console.log(fibo(100))
console.log(fibo(200))
