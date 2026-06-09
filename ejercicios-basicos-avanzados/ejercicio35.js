const mutants = [
  { name: 'Wolverine', power: 'regeneration' },
  { name: 'Magneto', power: 'magnetism' },
  { name: 'Professor X', power: 'telepathy' },
  { name: 'Jean Grey', power: 'telekinesis' },
  { name: 'Rogue', power: 'power absorption' },
  { name: 'Storm', power: 'weather manipulation' },
  { name: 'Mystique', power: 'shape-shifting' },
  { name: 'Beast', power: 'superhuman strength' },
  { name: 'Colossus', power: 'steel skin' },
  { name: 'Nightcrawler', power: 'teleportation' }
];

function findMutantByPower(mutantsList, power) {
  const foundMutants = [];
  for (let mutant of mutantsList) {
    if (mutant.power === power) {
      foundMutants.push(mutant.name);
    }
  }
  
  if (foundMutants.length > 0) {
    return `Se encontró el poder en: ${foundMutants.join(', ')}`;
  } else {
    return "Poder no encontrado.";
  }
}


console.log(findMutantByPower(mutants, 'telepathy'));
console.log(findMutantByPower(mutants, 'invisibility'));