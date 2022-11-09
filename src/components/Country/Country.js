import React from 'react';
import './Country.css';

const Country = (props) => {
    const {name, flags,area} = props.country
    return (
        <div className='country text-white'>
            <h3>{name.common}</h3>
            <img src={flags.png} alt=""/>
            <p><small>Area: {area}</small></p>
            
        </div>
    );
};

export default Country;