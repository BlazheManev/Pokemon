# PRIOT Frontend Interview Assignment

### Setup

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

Make sure to install the dependencies:

```bash
# yarn
yarn install

# npm
npm install

# pnpm
pnpm install

```

### Development Server

Start the development server on `http://localhost:3000`

```bash
npm run dev
```

## Introduction

The assignment, you're tasked with, is a simple frontend application where the user is able to search for random Pokémons, and save their favorites to their collection. This project already has a lot of the stuff implemented and prepared for you. It is recommended to use this project, write out the code and use the tools you're given with (Vuetify, Pinia, Nuxt..), as this is the stack we use in our Frontend projects. But if you find yourself fancy trying out any other framework or no framework (simple Vue app), using a different CSS/Component library, handling global context/state without using Pinia... by all means. It is however expected and highly recommended to use Vue.JS, but the overall goal is that you achieve the desired design and functionality.

### Requirements

The requirements for this application are as follows:

- The app should have 2 pages:
  - A home (search) page, where the user searches for Pokémons, and can add their favorites to their collection
  - A collection page, where the user can see their collection of Pokémons, and also remove them from the collection
- The search page:
  - Should display a card with a Pokémon image, their name and their stats (HP, Attack, Defence, Speed)
  - Should have two buttons:
    - A button for adding the Pokémon to the collection
    - A button to keep searching for new Pokémons. By clicking on the search button, the shown Pokémon is swapped for a new, random Pokémon
  - Should display a snack bar notification, that the Pokémon has been added to their collection, upon clicking on the "Add" button. The Pokémon shown should then swap for a new, random Pokémon
- The collection page:
  - Should display cards of added Pokémons
  - The card should have the image of the Pokémon, their name and a icon button for removing the Pokémon from the collection. Upon clicking on the delete icon, the Pokémon should be removed from the collection

### Technical stuff

- This app uses the Pokémon API on https://pokeapi.co/, specifically the https://pokeapi.co/api/v2/pokemon/<POKEMON_ID> endpoint. Use this endpoint to fetch a random Pokémon (the ID can be randomized in the code from a range of 1 - 1000). Nuxt 3 offers a fetching composable that is recommended to use when fetching the Pokémon.
- There are typescript types of the PokemonResponse and PokemonModel in utils/types folder to help you with fetching a Pokémon and defining a Pokémon in the state. When fetching a Pokémon, some "mapping/conversion" will have to be done to fit the PokemonModel
- The design of the app is based on Vuetify 3 (https://vuetifyjs.com/en/). Almost everything can be done with this library regarding the design components of the app. Some components I've used for the design are: Card, Row, Col, Snackbar..
- It is recommended to use Pinia (https://pinia.vuejs.org/) to store Pokémons in the collection. The Pokémons should be stored in a global context
- The files you need to edit are mostly:
  - store/index
  - pages/index
  - pages/collection

### Bonus points

Use of Frontend patterns such as components and props are all good signs. Naming conventions, clean code etc.. will also help.

But feel free to add any more functionality to the application aswell. The specifications above are more or less a guideline, but any upgrades to the app, any Quality of Life improvements, any error handling/validation, animations etc. implemented are all going to be bonus points. Maybe even alter the app so the searching of the Pokémons is more of a "catch" functionality. Maybe I want to click on a Pokémon in my collection and view its details on a separate page or dialog. Maybe I want more data when I visit a Pokémon's page...

Be creative and show us what you've got! I've also provided some visual examples of the application in the assignment_resources folder to help you out :)

### Submition

Create a Github repository for this assignment and after completing it, email me with the link to the repository.
