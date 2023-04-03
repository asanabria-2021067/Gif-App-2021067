import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

// Los hooks son funciones que retornan algo y son propias de react
// En este caso es un hook personalizado

export const useFetchGifs = ( categoria ) => {
    //array para guardar los gifs
    const [imagenes, setImagenes] = useState([]);

    const getImagenes = async () => {
        const nuevasImagenes = await getGifs( categoria );
        setImagenes(nuevasImagenes);
    }
    
    // useEffect. Ejecutar efectos secundarios al momento de
    // detectar una acción en especifico.
    useEffect(() => {
      getImagenes();
    }, [] );
    
    return {
        imagenes
    }

}