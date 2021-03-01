import React from 'react';

const Country = (props) => {
    //console.log(props);
    const {name, population, region, flag} = props.country;
    const flagStyle={
        height: '50px',
        width: '50px'
    }
    const countryStyle={
        border: '1px solid red',
        margin: '10px',
        padding: '10px'
    }
    return (
        <div style={countryStyle}>
            <h4>{name} has a population of <small>{population}</small></h4> 
            <img style={flagStyle} src={flag} alt=""/>
            <p>Region: {region}</p>
        </div>
    );
};

export default Country;