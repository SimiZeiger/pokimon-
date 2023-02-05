import axios from 'axios';

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

const getPokeman = async () => {
    try{
        const {data} = await axios.get('https://pokeapi.co/api/v2/pokemon');
        console.log(data)
    } catch (err) {
        console.log(err);
    }
};

    return (
        <>
            <p>in pokeman component</p>
            <button onClick={getPokeman}>Get Pokemon</button>
        </>
    ) 
}
export default Pokeman