import "./App.css";
import { useState } from "react";
import Pet from "./Pet";
import { Picsum } from "picsum-photos";

const petsInitialState = [
  {
    id: 100,
    name: "Lukas",
    location: "Vancouver",
    age: 3,
    image: Picsum.url(),
    selected: false,
  },
  {
    id: 2000,
    name: "Starfish",
    location: "Surrey",
    age: 5,
    image: Picsum.url(),
    selected: false,
  },
  {
    id: 3,
    name: "Garlfield",
    location: "Vancouver",
    age: 3,
    image: Picsum.url(),
    selected: false,
  },
  {
    id: 4,
    name: "Robin",
    location: "Richmond",
    age: 8,
    image: Picsum.url(),
    selected: false,
  },
];

function App() {
  const [pets, setPets] = useState(petsInitialState);

  function adoptPet(id) {
    // arrays are reference types, so we need to make a copy of the array, otherwise React won't detect the change
    const updatedPets = pets.map((pet) => {
      // only update the pet with the matching id
      if (pet.id === id) {
        return {
          ...pet,
          selected: !pet.selected,
        };
      }

      // otherwise return the original pet
      return pet;
    });

    setPets(updatedPets);
  }

  return (
    <div className="App">
      <h1>Adop my Pets</h1>
      <div className="pets">
        {pets.map((pet) => (
          <Pet
            key={pet.id}
            id={pet.id}
            name={pet.name}
            age={pet.age}
            city={pet.location}
            image={pet.image}
            selected={pet.selected}
            adoptPet={adoptPet}
            setPets={setPets}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
