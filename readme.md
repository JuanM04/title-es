# title-es

**FORK DE [title](https://github.com/vercel/title) EN ESPAÑOL**

Este paquete formatea tu texto siguiendo _[The Chicago Manual of Style](http://www.chicagomanualofstyle.org/home.html)_.

## Uso

Primero, instala el paquete:

```bash
yarn add title-es
```

Cárgalo y convierte cualquier texto:

```js
const title = require('title-es')

title('mUrieRon tRES perSonas Y UN BolIviano')

// Resultará en:
// "Murieron Tres Personas y un Boliviano"
```

Podés especificar otras palabras:

```js
title('mE gustA eScriBir Owo', {
  special: [ 'OwO' ]
})

// Resultará en:
// "Me Gusta Escribir OwO"
```

¡Eso es todo!

### Línea de Comandos

Podés formatear títulos desde la línea de comandos..., si te va eso. Podés instalarlo globalmente:

```bash
yarn global add title-es
```

Y ejecutarlo:

```bash
title-es "haY quE Ver, hAY QUE vEEEEEER"

# Resultará en:
# "Hay Que Ver, Hay Que Veeeeeer"
```

Para ver todas las opciones disponibles, corré:

```bash
title-es -h
```

## Contribuir

1. [Fork](https://help.github.com/articles/fork-a-repo/) este repositorio a tu cuenta de GitHub y [clónalo](https://help.github.com/articles/cloning-a-repository/) a tu PC.
2. Desinstala `title-es` si lo tienes instalado: `yarn global remove title-es`
3. Vincula el repositorio con el comando global: `yarn link`

Ahora, puedes usar `title-es` donde quieras.

## Autores

- Leo Lamprecht ([@notquiteleo](https://twitter.com/notquiteleo)) - [Vercel](https://vercel.com)
- Josh Junon ([@Qix-](https://github.com/Qix-)) - [Vercel](https://vercel.com)
- Juan Martín Seery ([@JuanM04](https://github.com/JuanM04)) - Traducción al español
