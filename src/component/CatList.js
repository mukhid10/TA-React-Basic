import { useEffect, useState } from "react";
import axios from "axios";
import CatItem from "./CatItem";


function CatList(){
    const [cat, setCat] = useState([])

    useEffect(async () => {
        const hasil = await axios.get (
            "https://api.thecatapi.com/v1/breeds"
        );
        setCat(hasil.data)
    },[])

    return(
        <>
            <h1>Search...</h1>
            <input type="text" placeholder="Ketikan sesuatu" />
            <h1>List Cat</h1>
            {cat.length == 0 ? (<p>Loading...</p>) : cat.map((item, nomor) =>(
                <CatItem data={item} />
            )
            )}
        </>
    )
}

export default CatList;