import axios from 'axios';
import React, {useState, useEffect} from 'react';



const Pokeman = () => {
//     try{
//     let pokeman = axios
//     .get('https://pokeapi.co/api/v2/pokemon')
//     .then(response => {
//         console.log(response.data.results);
//     })
// } catch (err) {
//     console.log(err);
// }

    // console.log(pokeman);

const [pokeman, setPokeman] = useState([]);

const getPokeman = async () => {
    try{
        const {data} = await axios.get('https://pokeapi.co/api/v2/pokemon');
        // console.log(data.results);
         return data.results
    } catch (err) {
        console.log(err);
    }
};
useEffect(() => {
    (async () => {
        const pokemanData = await getPokeman();
        console.log(pokemanData);
        setPokeman((pokeman) => [...pokemanData])
    })()
    return () => {};
}, []);


    return (
        <>
            <h2>In pokeman component</h2>
            <button onClick={getPokeman}>Get Pokemon</button>
            <div>
                {pokeman.map((pokeman, index) => {
                    return <p key={index}>Pokeman's name: {pokeman.name}</p>
                })}
            
            </div>
        </>
    ) 
}
export default Pokeman