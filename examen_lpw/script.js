/* 1.1 One-liner */
let n = [18, 35, 82, 12, 51, 94, 35, 21, 11, 44, 19, 6, 70, 54, 7, 48, 16, 22, 23];
let answer = n.filter(num => num % 2 == 0).reduce((a, b) => { return a + b }, 0);
console.log(answer);

/*1.2 Retourner le nom de l'étudiant avec la meilleur note */
let students = [
    { matricule: "001", nom: "Zoltar", age: 21, notes: [12, 15, 18] },
    { matricule: "002", nom: "Balthazar", age: 22, notes: [10, 13, 16] },
    { matricule: "003", nom: "Durant", age: 20, notes: [14, 14, 14] },
    { matricule: "004", nom: "Razzle", age: 23, notes: [17, 12, 19] },
    { matricule: "005", nom: "Rousseau", age: 19, notes: [9, 11, 13] },
    { matricule: "006", nom: "Fournier", age: 21, notes: [15, 16, 14] },
    { matricule: "007", nom: "Girard", age: 22, notes: [12, 18, 13] },
    { matricule: "008", nom: "Zizek", age: 20, notes: [16, 11, 15] },
    { matricule: "009", nom: "Moreau", age: 23, notes: [13, 12, 14] },
    { matricule: "010", nom: "Bibbidi", age: 19, notes: [11, 10, 9] }
];

let best = bestOfTheBest(students);

function bestOfTheBest(students) {
    let average;
    let bestNote = 0;
    let name = "";
    for (let i = 0; i < students.length; ++i) {
        average = 0;
        for (let j = 0; j < students[i].notes.length; ++j) {
            average += students[i].notes[j];
        }
        average = average / students[i].notes.length;

        if (bestNote < average) {
            bestNote = average;
            name = students[i].nom;
        }
    }
    console.log(name);
}

/* 1.3 Retourner une phrase*/
let sentence = "Bonjour tout le monde";
let words = sentence.split(" ");
let reverse = "";

for (let i = words.length - 1; i >= 0; --i) {
    reverse += words[i] + " ";
}

console.log(sentence);
console.log(reverse);