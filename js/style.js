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

const students = [
    { id: 213, name: 'Marco della Rovere', totalVote: 78 },
    { id: 110, name: 'Paola Cortellessa', totalVote: 96 },
    { id: 250, name: 'Andrea Mantegna', totalVote: 48 },
    { id: 145, name: 'Gaia Borromini', totalVote: 74 },
    { id: 196, name: 'Luigi Grimaldello', totalVote: 68 },
    { id: 102, name: 'Piero della Francesca', totalVote: 50 },
    { id: 120, name: 'Francesca da Polenta', totalVote: 84 }
];

const studentVoteOver70 = students.filter(student => student.totalVote > 70);
console.log(studentVoteOver70)

const studentVoteOver70AndOverId120 = students.filter((student) => student.totalVote > 70 && student.id > 120)
console.log(studentVoteOver70AndOverId120)