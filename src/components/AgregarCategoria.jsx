import { useState } from "react";

export const AgregarCategoria = ( { onNewCategory } ) => {

    const [inputValue, setInputValue] = useState('');

    const onInputChange = ({target}) => {
        //console.log(targe);
        setInputValue(target.value);
        //console.log(inputValue);
    }

    const onSubmit = (event) => {
        //console.log('Hola a todos desde el formulario');
        //preventDefault ayuda a que se mantengan los datos del formulario
        event.preventDefault();
        //console.log(inputValue);

        //verificar que no se manden espacios vacios
        if(inputValue.trim().length <=1) return;

        onNewCategory(inputValue);
        setInputValue(''); //Limpiar el input

    }

    return (
        <>

            <form onSubmit={ onSubmit } aria-label="form">

                <input type='text'
                    placeholder='Buscador de gifs...'
                    value={ inputValue }
                    onChange = { onInputChange }
                />

            </form>


        </>
    )
}
