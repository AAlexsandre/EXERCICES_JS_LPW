// 1. Destructuration de tableau : 
let numbers = [10, 20, 30, 40, 50];
arrayDestructuring(numbers);


//2. Destructuration d'objet :
let person = {
    name: "John Doe",
    age: 30,
    city: "New York"
};

objectDestructuring(person);


//3. Destructuration combinée de tableaux et d'objets :
let people = [
    { name: 'John Doe', age: 30, city: 'New York' },
    { name: 'Jane Doe', age: 25, city: 'Los Angeles' },
    { name: 'Jim Smith', age: 35, city: 'Chicago' }
];

arrayAndObjectDestructurating(people);


//4. Destructuration de tableau avec des valeurs par défaut :
numbers = [10];
arrayDestructuring(numbers);

//5. Déstructuration d'objet avec des alias :
person = {
    firstName: "John Doe",
    age: 30,
    city: "New York"
};

objectDestructuring2(person);

//6. Destructuration d'objets et de tableaux imbriqués :
people = [
    {
        name: 'John Doe',
        age: 30,
        details: {
            address: '123 Main St, New York',
            email: 'johndoe@example.com'
        }
    },
    {
        name: 'Jane Doe',
        age: 25,
        details: {
            address: '456 Market St, Los Angeles',
            email: 'janedoe@example.com'
        }
    },
    {
        name: 'Jim Smith',
        age: 35,
        details: {
            address: '789 W Illinois St, Chicago',
            email: 'jimsmith@example.com'
        }
    }
];

arrayAndObjectDestructurating2(people);

function arrayDestructuring(array) {
    let [first = 42, second = 42] = array;

    console.log("first : " + first);
    console.log("second : " + second);
    console.log("-------------------------------");
}

function objectDestructuring(object) {
    let { name: firstName, age } = object;

    console.log("firstName : " + firstName);
    console.log("age : " + age);
    console.log("-------------------------------");
}

function objectDestructuring2(object) {
    let { firstName: name, age } = object;

    console.log("firstName : " + name);
    console.log("age : " + age);
    console.log("-------------------------------");
}

function arrayAndObjectDestructurating(arrayAndObject) {
    let [{ name: firstName, age, city }] = arrayAndObject;

    console.log(firstName);
    console.log(age);
    console.log(city);
    console.log("-------------------------------");
}

function arrayAndObjectDestructurating2(arrayAndObject) {
    let [{ name: firstName, age, details }] = arrayAndObject;

    console.log("name : " + firstName);
    console.log("age : " + age);
    console.log(details);
    console.log("-------------------------------");
}