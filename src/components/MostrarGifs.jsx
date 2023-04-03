import { useFetchGifs } from "../hooks/useFetchGifs";
import { MostrarItemGif } from "./MostrarItemGif";

export const MostrarGifs = ({ categoriaEnviada }) => {

    const { imagenes } = useFetchGifs(categoriaEnviada);

    return (
        <>
            <h3><strong> Busqueda: </strong>{categoriaEnviada} </h3>

            <div className="card-grid" >
                {
                    imagenes.map((img) => (

                        <MostrarItemGif key={img.id}
                            //title = { img.title }
                            //url = { img.url }
                            {...img} // Traer todas las props de imagenes
                        />

                    ))
                }
            </div>

        </>
    )
}