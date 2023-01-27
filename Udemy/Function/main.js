function hello(name){
    return `Hello ${name}`;
}

function soma(num1 =0, num2=0){
    return Number(num1) + Number(num2);
}

const raiz = function (n) {
    return n ** (1/2);
};

// Arrow function

const pow = (n) => {
    return n**2;
};

// ou

const pow_2 = n => n ** 2;

console.log(hello('Kaiky'));

for(let i=4; i<=10; i++){
    console.log(pow_2(i));
}