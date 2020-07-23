// Packages
const { yellow } = require("chalk");

module.exports = `
  Uso: ${yellow("title-es")} [opciones] <texto>

  Opciones:

    ${yellow("-h, --help")}      Muestra este mensaje
    ${yellow("-v, --version")}   Muestra la versión
    ${yellow("-s, --special")}   Palabras especiales a ser capitalizadas
    ${yellow("-n, --no-copy")}   No copiar el resultado en el portapapeles.
`;
