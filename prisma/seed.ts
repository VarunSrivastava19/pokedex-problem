import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // Ash's Pokemon in Season 1
  const pokemons = [
    {
      name: "Pikachu",
      types: ["Electric"],
      sprite: "https://pokemon.com/pictures/pikachu.png",
    },
    {
      name: "Butterfree",
      types: ["Bug", "Flying"],
      sprite: "https://pokemon.com/pictures/butterfree.png",
    },
    {
      name: "Pidgeot",
      types: ["Normal", "Flying"],
      sprite: "https://pokemon.com/pictures/pidgeot.png",
    },
    {
      name: "Bulbasaur",
      types: ["Grass", "Poison"],
      sprite: "https://pokemon.com/pictures/bulbasaur.png",
    },
    {
      name: "Charizard",
      types: ["Fire", "Flying"],
      sprite: "https://pokemon.com/pictures/charizard.png",
    },
    {
      name: "Squirtle",
      types: ["Water"],
      sprite: "https://pokemon.com/pictures/squirtle.png",
    },
    {
      name: "Kingler",
      types: ["Water"],
      sprite: "https://pokemon.com/pictures/kingler.png",
    },
    {
      name: "Primeape",
      types: ["Fighting"],
      sprite: "https://pokemon.com/pictures/primeape.png",
    },
  ];

  for (const pokemon of pokemons) {
    await prisma.pokedex.create({
      data: pokemon,
    });
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
