function maiorNum(num1, num2){
    return num1>=num2 ? num1 : num2;
}

const max2 = (num1,num2) => {
    return num1>=num2 ? num1 : num2;
};

const max3 = (num1,num2) => num1>=num2 ? num1 : num2;

console.log(max3(0,-3));

const ehPaisagem = (larg, altura) => larg>altura;

console.log(ehPaisagem(700, 300));

const fizzBuzz = (num) => {
    if (typeof num != 'number') return num;
    if (num%15 === 0) return 'FizzBuzz';
    if (num%5 === 0) return 'Buzz';
    if (num%3 === 0) return 'Fizz';
    else return num;
}

for(let i=1; i<=100;i++){
    console.log(fizzBuzz(i));
}