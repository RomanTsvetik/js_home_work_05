
//Task #1

let user = {};

user.name = "John";
user.surname = "Smith";
user.name = "Pete";
delete (user.name);

//Task #2

//Можно ли изменить объект, объявленный с помощью const? - да, можно изменить содержимое объекта - его свойства.
//Но const нельзя присвоить другое значение.  

const visitor = {
    name: "John",
};
// это будет работать? - да, будет работать, свойства константного объекта можно менять.
visitor.name = "Pete";
//p.s. исправил имя объекта на "visitor" чтобы не было конфликта с task #1

//Task #3

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130,
}

let sum = salaries.John + salaries.Ann + salaries.Pete;
console.log(sum);

