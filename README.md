# Pokedex

Este proyecto fue creado con [Create React App](https://github.com/facebook/create-react-app)
Y la app consiste en un interface de usuario que interactua con la [Api de Pokemón](https://pokeapi.co/), con el fin de poder listar (de a 5 por página) todos los pokemones y mostrar sus respectivas habilidades, poderes y estadísticas de manera dinámica.

Para el desarrollo del proyecto, además de CRA, se utilizaron hooks de React -useReducer, useEffect y useState-; también SASS, la librería i18next para trabajar las traducciones; y Jest y Enzyme para los test (aún en desarrollo). La idea fue no utilizar librerías que encapsulen la api, ni librerías de css ni de componentes.

## scripts

Dentro del directorio, puede ejecutar los comandos:

### `npm start`

Que correrá la aplicación en development mode.\
y la abrirá en [http://localhost:3000](http://localhost:3000) en el browser.

### `npm run test`

Para ejecutar los test actualmente disponibles.

#### preview

<p align="center">
  <img src="./screenshot.png" width="350" title="screenshot">
  <img src="./screenshot.png" width="350" alt="screenshot">
</p>
