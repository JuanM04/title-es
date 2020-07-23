const conjunctions = [
  'aún',
  'mas',
  'ni',
  'o',
  'ó',
  'pero',
  'por',
  'sino',
  'y'
]

const articles = [
  'el',
  'la',
  'un',
  'una'
]

const prepositions = [
  'a',
  'al',
  'antes',
  'cerca',
  'con',
  'contra',
  'de',
  'debajo',
  'del',
  'delante',
  'dentro',
  'desde',
  'después',
  'detrás',
  'durante',
  'en',
  'encima',
  'enfrente',
  'entre',
  'hacia',
  'hasta',
  'junto',
  'lejos',
  'por',
  'según',
  'sin',
  'sobre',
  'tras'
]

module.exports = new Set([
  ...conjunctions,
  ...articles,
  ...prepositions
])
