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

const guestList = guests.map((guest, index) => ({
    tableName,
    guestName: guest,
    seatNumber: index + 1
}))

// Stampo in console

console.log(guestList)


// Snack 2

