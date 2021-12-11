// Utilidades
const lowerCase = require('./lower-case')
const specials = require('./specials')

const regex = /(?:(?:(\s?(?:^|[.\(\)!?;:"-])\s*)([a-zA-ZáéíóúüñÁÉÍÓÚÜÑ]))|([a-zA-ZáéíóúüñÁÉÍÓÚÜÑ]))([a-zA-ZáéíóúüñÁÉÍÓÚÜÑ]*[’']*\w*)/g

const convertToRegExp = specials => specials.map(s => [new RegExp(`\\b${s}\\b`, 'gi'), s])

function parseMatch(match) {
  const firstCharacter = match[0]

  // el primer carácter
  if (/\s/.test(firstCharacter)) {
    // si es un espacio - recortar y retornar
    return match.substr(1)
  }
  if (/[\(\)]/.test(firstCharacter)) {
    // si hay paréntesis - no deberían ser reemplazados
    return null
  }

  return match
}

module.exports = (str, options = {}) => {
  str = str.toLowerCase().replace(regex, (m, lead = '', forced, lower, rest, offset, string) => {
    const isLastWord = m.length + offset >= string.length;

    const parsedMatch = parseMatch(m)
    if (!parsedMatch) {
      return m
    }
    if (!forced) {
      const fullLower = lower + rest

      if (lowerCase.has(fullLower) && !isLastWord) {
        return parsedMatch
      }
    }

    return lead + (lower || forced).toUpperCase() + rest
  })

  const customSpecials = options.special || []
  const replace = [...specials, ...customSpecials]
  const replaceRegExp = convertToRegExp(replace)

  replaceRegExp.forEach(([pattern, s]) => {
    str = str.replace(pattern, s)
  })

  return str
}
