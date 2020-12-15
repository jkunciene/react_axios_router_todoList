import React, {useState, useEffect} from 'react'
import axios from 'axios'

const Main = () => {


//state saugos mano gautus duomenis apie kates
const [posts, setPosts]= useState([])


    //duomenu is API gavimas
const getFacts=()=>{
    axios.get('https://cat-fact.herokuapp.com/facts')
    .then((response)=>{
        console.log(response)
        let facts = response.data;
        console.log(facts)
        setPosts(facts)
    })
}


useEffect(()=>{
    getFacts()
}, [])

    return (
        <div>
           {posts.map((fact, index)=>(
            <p key={index}>{fact.text}</p>)               
           )}
           </div>
    )
}

export default Main
