
export const MostrarItemGif = ({ title, url, id }) => {

    return (

        <>

            <div className="card">
                {/* <p> { id }</p> */}
                <img src={url} alt={title} ></img>
                <p> {title} </p>
            </div>

        </>

    )

}