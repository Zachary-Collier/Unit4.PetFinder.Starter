const thePetContainer = document.getElementById('the-pet-container');

const fetchAllPets = async () => {
  try {
    const res = await fetch(`http://localhost:8081/api/v1/pets`);
    const pets = await res.json();
    return pets;
  } catch (error) {
    console.error('Your pets cannot be retrieved based on this reasoning: ', error);
  }
};

const renderAllPets = (pets) => {
  try {
    pets.forEach((pet) => {
      const petElement = document.createElement('div');
      petElement.classList.add('pet-item');

      petElement.innerHTML = `
                <div class="important-information">
                    <h2>${pet.name}</h2>
                    <p>Breed: ${pet.breed}</p>
                    <p>Age: ${pet.age}</p>
                    <p>Owner: ${pet.owner}</p>
                </div>
            `;

      thePetContainer.append(petElement);
    });
  } catch (error) {
    console.error('Cannot get your pets!', error);
  }
};

const init = async () => {
  const pets = await fetchAllPets();
  renderAllPets(pets);
};