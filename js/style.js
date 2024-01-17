// SNack 1

const tableName = 'Tavolo Vip';

const guests = [
    'Brad Pitt',
    'Johnny Depp',
    'Lady Gaga',
    'Cristiano Ronaldo',
    'Georgina Rodriguez',
    'Chiara Ferragni',
    'Fedez',
    'George Clooney',
    'Amal Clooney',
    'Maneskin'
];

// Creo il nuovo Array

const guestList = guests.map((guest, i) => ({
    tableName,
    guestName: guest,
    seatNumber: i + 1
}))

// Stampo in console

console.log(guestList)


// Snack 2


// Creo l'array con tutti i dati degli studenti
const students = [
    { id: 213, name: 'Marco della Rovere', totalVote: 78 },
    { id: 110, name: 'Paola Cortellessa', totalVote: 96 },
    { id: 250, name: 'Andrea Mantegna', totalVote: 48 },
    { id: 145, name: 'Gaia Borromini', totalVote: 74 },
    { id: 196, name: 'Luigi Grimaldello', totalVote: 68 },
    { id: 102, name: 'Piero della Francesca', totalVote: 50 },
    { id: 120, name: 'Francesca da Polenta', totalVote: 84 }
];

// FIltro gli studenti con voto totale superiore al 70

const studentVoteOver70 = students.filter(student => student.totalVote > 70);
console.log(studentVoteOver70)

// Ora filtro gli studenti con voto superiore al 70 ed id superiore al 120

const studentVoteOver70AndOverId120 = students.filter((student) => student.totalVote > 70 && student.id > 120)
console.log(studentVoteOver70AndOverId120)

// Creo una targa con l'elenco degli studenti e la stampo in pagina

const studentTarget = document.getElementById('students')

const nameUpperCase = students.map(students => students.name.toUpperCase())
console.log(nameUpperCase)


nameUpperCase.forEach(name => {
    const list = document.createElement('li');
    list.textContent = name;
    studentTarget.appendChild(list)
})

// Snack 3

// Creo l'array di bici

const bikes = [
    { name: 'Mountain Bike', weight: 12 },
    { name: 'Road Bike', weight: 8 },
    { name: 'City Bike', weight: 10 },
    { name: 'BMX Bike', weight: 9 }
];

// Giro sull'array

let lightBike = bikes[0]

for (let bike of bikes) {
    const { weight } = bike;

    // Confronto la bici più leggera

    if (weight < lightBike.weight) {
        lightBike = bike
    }
}

// La stampo in console

console.log(`${lightBike.name} è la bici più leggera`)


// Snack 4

// Creo l'array di oggetti

const footballTeams = [
    {
        name: 'Cosenza',
        points: 0,
        fouls: 0
    },
    {
        name: 'Vigor Lamezia',
        points: 0,
        fouls: 0
    },
    {
        name: 'Reggina',
        points: 0,
        fouls: 0
    },
]

// Funzione per il numero casuale

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// Assegno alle squadre falli e punti random

footballTeams.forEach(team => {
    team.points = getRandomNumber(0, 100);
    team.fouls = getRandomNumber(0, 200);
})

// Creo un nuovo Array assegnando il nuovo numero dei Falli ed il proprio nome

const teamFouls = footballTeams.map(({ name, fouls }) => ({ name, fouls }));

console.log(teamFouls);