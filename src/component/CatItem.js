
function CatItem ({data}){

    const handleClick = (data) =>{
        alert(data.name)
    }

    return(

                    <div onClick={() => handleClick(data)}>
                        <img src={data.image?.url} width={150} alt="" />
                        <h3>Name : {data.name}</h3>
                        <h4>Origin : {data.origin}</h4>
                    </div>

    )
}

export default CatItem;