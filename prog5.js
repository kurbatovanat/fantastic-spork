function task(x){
if (x === 0){
const date = new Date();
        return `${date.getDate() < 9 ? '0' : ''}${date.getDate()}.${date.getMonth() < 9 ? '0' : ''}${date.getMonth() + 1}.${date.getFullYear()}`;
}
return new Promise((resolve, reject) => {
if (x >= 18){
reject('no');
}

resolve('yes');
})
}

console.log(task(17));