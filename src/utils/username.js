
const USER = [
    'Ted',
    'Bob',
    'Vincent',
    'Abbott',
    'Hari',
    'Barad'
]

const NAME = [
    'Dyal',
    'Taneja',
    'Taina',
    'Chai',
    'Puri',
    'Matt',
    'Scott'
]

function generateRandomUser() {
    
 const adj = USER[Math.floor(Math.random() * 7)];
 const obj = NAME[Math.floor(Math.random() * 7)];
  return `${adj}-${obj}`
}

console.log(generateRandomUser());
console.log(generateRandomUser());
console.log(generateRandomUser());
console.log(generateRandomUser());
console.log(generateRandomUser());

module.exports = {
    generateRandomUser
}