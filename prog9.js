const b = Object.create(a);
const c = Object.create(b);
const d = Object.create(c);
const e = Object.create(d);


function task (o) {
    if (o === null) {
        const date = new Date();
        return `${date.getDate() < 9 ? '0' : ''}${date.getDate()}.${date.getMonth() < 9 ? '0' : ''}${date.getMonth() + 1}.${date.getFullYear()}`;
    }

    let n = 1;
    if (o.__proto__ !== null) {
        return n + task(o.__proto__);
    }

    return 0
}

console.log(task(e));
console.log(task(null));