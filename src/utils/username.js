
const USER = [
    'Ted',
    'Bob',
    'Vincent',
    'Abbott',
    'Hari',
    'Barad',
    'Travis'
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

module.exports = {
    generateRandomUser
}