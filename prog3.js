function factorialFor(n){
let res = 1;
for(i = 1; i <= n; i++){
res = res * i;
}
return res;
}
const forResult = factorialFor(7);

console.log(forResult);

function factorialReduce(n){
const arr = Array(n).keys();
const collback = (prev, corranty)=> {
return prev * (corranty + 1);
};
const initial = 1;
const res = [...arr].reduce(collback, initial);
return res;
}

const reduceResult = factorialReduce(5);

console.log(reduceResult);