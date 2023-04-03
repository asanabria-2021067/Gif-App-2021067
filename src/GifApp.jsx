import React from 'react';
import { useState } from 'react';
import { AgregarCategoria } from './components/AgregarCategoria';
import { MostrarGifs } from './components/MostrarGifs';

export const GifApp = () => {
    //Un hook no es más que una función propia de react
    const [categorias, setCategorias] = useState(['Messi con balon de oro']);

    const agregarCategoria = (newCategory) => {
        //analizar si la categoria insertada ya se incluye en el array (categorias)
        if (categorias.includes(newCategory)) return;
        
        // Operador spred ... (Copia todo lo demas del array de categorias)
        setCategorias([newCategory]);
    }

    return (
        <>
            {/* Titulo */}
            <div className='head-gifs'>
                <img src="https://media.tenor.com/mifkyO2UIYUAAAAM/argentinafootballteam-lionelmessi.gif"></img>
                <h1>Gif-App</h1>
                <img src="https://media.tenor.com/lMKoma18StYAAAAM/messi.gif"></img>
            </div>
            

            {/* Input */}
            <AgregarCategoria onNewCategory={(value) => agregarCategoria(value)} />

            {/* Cards de los gif */}
            {/* Item de cada card */}

            {
                categorias.map( (category) => 
                    (
                        <MostrarGifs key={ category } categoriaEnviada={ category } />
                    )
                )
            }

        </>
    )
}