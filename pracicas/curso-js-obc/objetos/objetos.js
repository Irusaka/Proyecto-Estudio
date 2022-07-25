const me = {
    name: "Rolombo",
    lastName: "Maracusatalizanimapote",
    age: 55,
    height: 186,
    iAmDeveloper: true
}

console.log(me);

let { age } = me;

console.log(age);

const myLife = [
    { ...me },
    {
        name: "Girnalo",
        lastName: "a",
        age: 22,
        height: 200,
        heIsDeveloper: false
    },
    {
        name: "Pereti",
        lastName: "Cromañon",
        age: 2203,
        height: 154,
        heIsDeveloper: false
    }
];

console.log(myLife);