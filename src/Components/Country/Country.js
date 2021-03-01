import React from 'react';

const Country = (props) => {
    //console.log(props);
    const {name, population, region, flag} = props.country;
    const flagStyle={
        height: '50px',
        width: '50px'
    }
    return (
        <div>
            <h4>{name} has a population of <small>{population}</small></h4> 
            <img style={flagStyle} src={flag} alt=""/>
            <p>Region: {region}</p>
        </div>
    );
};

export default Country;