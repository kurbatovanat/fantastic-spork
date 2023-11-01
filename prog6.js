const a = {
  name: Promise.resolve("kurbatovanat")
};

async function task(x) {
  return x.name; // возвращаем значение свойство объекта
};

task(a).then((x) => {
  console.log(x);
})