
let loopnum = 1

for(loopnum;loopnum <= 30;loopnum++){
    if(loopnum <= 10){
        console.log(loopnum)
    }
};

console.log('----------------------------------')
let loopnum2 = 1

for(loopnum2;loopnum2 <= 20;loopnum2++){
    console.log(loopnum2)
    if(loopnum2 == 10){
        loopnum2 = loopnum2 + 9
    }
}
console.log('----------------------------------')

let num3 = 3

while(num3 >= 1){
    console.log(num3)
    num3 -= 1
}

console.log('----------------------------------')

let num4 = 0

do{
    console.log(num4)
    num4 = num4 + 1
}while(num4 <= 5)