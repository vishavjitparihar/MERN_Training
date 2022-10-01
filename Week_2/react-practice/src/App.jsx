import { useState } from "react";
import { ClassCounter, FunctionCounter, RefCounter} from './components/counter';
import { Article } from './components/Article'
import { SimpleList } from "./components/List/SimpleList";
import { Pokemon, PokemonList } from "./components/List/PokemonList";
import './index.css';


// This file App is in charge of rendering the App itselfß
export const App = () => {
    
    const [shouldRender, toggleShouldRender] = useState(false);

    return (
        <>
            <button onClick = { () => toggleShouldRender(!shouldRender) }>Toggle Counter</button>
             {/* 
                conditional rendering
                using boolean as a toogle for a component
            */}
            {shouldRender && <><ClassCounter/><FunctionCounter/></>}

            < RefCounter />

            <Article title="This is Sean's article" author="Sean Carter" publishDates="09/29/22">
            {/* This is the children property */}
            I can write anything here, and this way i dont have to write anything in paragraph section in Article.jsx

            </Article>


            <Article title="This is Vishavjit's article" author="Vishavjit Parihar" publishDates="10/01/22">
            {/* This is the children property */}
            I don't know what to write here
            
            </Article>


            <SimpleList/>
            <div>-----------</div>
            <div>-----------</div>
            <div>-----------</div>
            <div>-----------</div>
            <PokemonList/>



            {/* <ClassCounter /> */}

           

            {/* <FunctionCounter /> */}
        </>
    )
}