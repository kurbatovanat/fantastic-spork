function task(name, familyname, login = 'mylogin') {
    this.name = name;
    this.familyname = familyname;
    this.login = login;

    this.getFullName = () => {
        return `${this.name} ${this.familyname}!`
    }
}

const user = new task('n', 'f', 'l');

console.log(user.familyname);
console.log(user.login);
console.log(user.getFullName());