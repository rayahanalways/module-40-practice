import { useState } from 'react';
import './Country.css'
const Country =({country,handleVisitedCountry,handleVisitedFlags})=>{
    // console.log(country)
    const {name,area,capital,flags,population,cca3} = country;
    const [visited, setVisited] = useState(false);
    // const handleVisited =()=>{
    //     setVisited(true);
    // }
    return(
        <div className= {`country ${visited ? 'visited' :'non-visited'}`}>
            <h3 style={{color: visited? 'red' : 'white'}}>Name: {name?.common} </h3>
            <img src={flags?.png} alt="flags" />
            <h3><small>{capital}</small></h3>
            <h3><small>Population:{population} </small></h3>
            <h3><small>Area: {area} </small></h3>
            <h3 style={{color: visited ? 'black': 'red'}}><small>Code: {cca3} </small></h3>
            {/* <button onClick={handleVisited} className='btn-primary'>Visited</button> */}
            <button onClick={()=>{setVisited(!visited)}} className='btn-primary'>{visited ? 'visited' : 'going'}</button>
            <br/>
            <button onClick={()=>{handleVisitedCountry(country.name.common)}}>Mark Visited</button>
            <br/>
            <button  onClick={() =>{handleVisitedFlags(country.flags.png)}}>Add Flag</button>
            {`${visited? 'i have visited this country' : 'i want to visit'}`}


        </div>
    )
};

export default Country;