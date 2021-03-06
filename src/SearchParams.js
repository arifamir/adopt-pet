import React, {useState, useEffect} from 'react';
import pet, {ANIMALS} from '@frontendmasters/pet';
import Results from './Results';
import useDropdown from './useDropdown';

const SearchParams = () => {

    const [location, updateLocation] = useState("Seattle, WA"); // React Hook
    const [breeds, setBreeds] = useState([]);
    const [animal, AnimalDropdown] = useDropdown("Animal", "dog", ANIMALS);
    const [breed, BreedDropdown, setBreed] = useDropdown("Breed", "", breeds);
    const [pets, setPets] = useState([]);


    async function requestPets() {
        const {animals} = await pet.animals({
            location,
            breed,
            type: animal
        })

        setPets(animals || []);
    }

    useEffect(() => {
        setBreeds([]);
        setBreed("");
        pet.breeds(animal).then(({breeds}) => {
            const breedsStrings = breeds.map(({name}) => name);
            setBreeds(breedsStrings);
        }, console.error);

    }, [animal, setBreeds, setBreed]);
    return (
        <div className="search-params">
            <h1> Search for {animal} in {location} </h1>
            <form onSubmit={(e)=>{
                e.preventDefault();
                requestPets();
            }}>
                <label htmlFor="location">Location
                    <input id="location" value={location} placeholder='Location'
                           onChange={event => updateLocation(event.target.value)}
                    />
                </label>

                <AnimalDropdown/>
                <BreedDropdown/>
                <button>Submit</button>
            </form>

            <Results pets={pets} />
        </div>
    )

}

export default SearchParams;