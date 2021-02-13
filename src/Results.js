import React from 'react';
import Pet from './pet';


const Results = ({pets}) => {

    return (
        <div className="search">

            {pets.length === 0 ?
                (<h4>No Found Pets</h4>) :
                (pets.map(pet => (
                    <Pet
                        animal={pet.type}
                        key={pet.id}
                        name={pet.name}
                        breed={pet.breeds.primary}
                        media={pet.photos}
                        id={pet.id}
                        location={`${pet.contact.address.city}, ${pet.contact.address.state}`}

                    />
                )))
            }


        </div>

    );
}

export default Results;