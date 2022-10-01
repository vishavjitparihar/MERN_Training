// This component is for the creation of a pokemon in our database

import { useState } from "react";
import axios from "axios";

const pokemonTypes = [
    <option>Select the Type</option>,
    <option>Normal</option>,
    <option>Fire</option>,
    <option>Water</option>,
    <option>Flying</option>,
    <option>Ice</option>,
    <option>Grass</option>

]


export const PokemonForm = ({setPokemonList}) => {

    const [pokemonData, pokemonSetData] = useState({
        pokemonName: '',
        pokedexNumber: null,
        pokedexDescription: '',
        type1: null,
        type2: null,
        isLegendary: false,
        imageUrl: null
    });


    const handleClear = () => {
        pokemonSetData(
            {
                pokemonName: '',
                pokedexNumber: null,
                pokedexDescription: '',
                type1: null,
                type2: null,
                isLegendary: false,
                imageUrl: null   
            }
        )
    }
    
    /*
        Page refresh is the default behavior for a form submit
        since we are on SPA (Single Page Application), we do not want the page to refresh
        
        The DOM calls our function handller with the first parameter being thee event object itself
        The event object will reference where it came from 
    */
    const handleSubmit = async(event) => {
        // event.preverntDefault() will prevent the page refresh
        event.preventDefault();
        try {
            const res = await axios.post('http://localhost:9000/pokemon', {
                name: pokemonData.pokemonName,
                pokedex: {
                    number: pokemonData.pokedexNumber,
                    description: pokemonData.pokedexDescription
                },
                types: [pokemonData.type1, pokemonData.type2], //write validation logic so empty values don't het added
                isLegendary : pokemonData.isLegendary,
                imageUrl: pokemonData.imageUrl 
            });


            // use the setPokemonList to manually add the pokemon to it
            // 1. Do this approach of manually adding "optimistic update"
            // 2. Refetch the data
            setPokemonList(pokemonList => [...pokemonList, res.data]);

        } catch (err) {
            console.error(err);
        }
    }


    return (
        <form onSubmit={handleSubmit} className='pokemon-form'>
            <div>
                <div>
                    <label htmlFor="pokemon-name">Pokemon Name: </label>
                    <input 
                        id="pokemon-name" 
                        value={pokemonData.pokemonName}
                        // spread the contecnt of the old object into a new one, then update the name to be the input's value using the event 
                        onChange={e => pokemonSetData( { ...pokemonData, pokemonName: e.target.value})}
                        placeholder="ex. Pikachu"
                    />
                </div>
            </div>

            <div>
                <div>
                    <lable htmlFor="pokedex-number">Pokedex Number: </lable>
                    <input
                        id="pokedex-number"
                        type="number"
                        value={pokemonData.pokedexNumber}
                        onChange={e => pokemonSetData( { ...pokemonData, pokedexNumber: e.target.value})}
                        placeholder="ex. 000"
                    />
                </div>
                
                <div>
                    <lable htmlFor="pokedex-desciption">Description: </lable>
                    <input
                        id = "pokedex-desciption"
                        value={pokemonData.pokedexDescription}
                        onChange={e => pokemonSetData( { ...pokemonData, pokedexDescription: e.target.value})}
                        placeholder="enter here"
                    />
                </div>
            </div>

            <div>
                <div>
                    <lable htmlFor="pokedex-type1">Type 1: </lable>
                    <select id="pokedex-type1" onChange={e => pokemonSetData( { ...pokemonData, type1: e.target.value})}>
                        {pokemonTypes}  
                    </select>
                </div>
                
                <div>
                    <lable htmlFor="pokedex-type2">Type 2: </lable>
                    <select id="pokedex-type2" onChange={e => pokemonSetData( { ...pokemonData, type1: e.target.value})}>
                        {pokemonTypes}  
                    </select>
                </div>
            </div>


            <div>
                <div>
                    <label htmlFor="legend">Is it a legendary?</label>
                    <input id="legend" type="checkbox" onChange={() => pokemonSetData( { ...pokemonData, isLegendary: !pokemonData.isLegendary})}/>
                </div>

                <div>
                    <label htmlFor="image">Image URL: </label>
                    <input id="image"  onChange={e => pokemonSetData( { ...pokemonData, imageUrl: e.target.value})}/>
                </div>
            </div>
            {/* A button's default behavior if inside a form is to submit  */}
            {/* This means that clicking the button will submit the form and refresh the page */}
            <div>
                <button type="reset" onClick={handleClear}>Clear</button>
                <button>Submit</button>
            </div>
           
        </form>
    )
}