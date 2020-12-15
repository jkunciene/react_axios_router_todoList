import React, {useState} from 'react'
import axios from 'axios'

const Joke = () => {

    //TOP LEVEL for STATE
const [joke, setJoke] = useState([])

//duomenu gavimo metodas-funkcija
const getJoke=()=>{
    axios.get('https://evilinsult.com/generate_insult.php?lang=en&type=json')
    .then((response)=>{
        console.log(response)
        let item = response.data
        setJoke(item)
        
    })
}
console.log(joke)

    return (
        <div className='container'>            
            <div>{joke.insult}</div>
            <button className='btn btn-info' onClick={getJoke}>Get your joke...</button>
        </div>
    )
}

export default Joke
