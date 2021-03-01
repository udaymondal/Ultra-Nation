import React from 'react';

const Country = (props) => {
    // console.log(props);
    const {name, population, region, flag} = props.country;
    const flagStyle={
        height: '50px',
        width: '50px'
    }
    const countryStyle={
        border: '1px solid red',
        margin: '10px',
        padding: '10px',
        display: 'inline-grid',
        gridTemplateColumns: 'repeat(3, 3fr)',
    }

    
    return (
        <div style={countryStyle}>
            <h4>{name}</h4>
            <p><small>{population}</small></p> 
            <img style={flagStyle} src={flag} alt=""/>
            <p>Region: {region}</p>
            <button onClick={()=>props.handleAddCountry(props.country)}>Add Country</button>
        </div>
    );
};

export default Country;