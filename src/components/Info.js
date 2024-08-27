import React from 'react';

function Info({ personObj }) {
  return (
    <li>
      <img src={personObj.photoName} alt={personObj.name} />
      <div>
      <br/><br/>
        <h2 style={{color:'white'}}>{personObj.name}</h2>
        <br/>
        <p style={{color:'white'}}>{personObj.paragraph}</p>
        <br/>
        <button>{personObj.button}</button>
      </div>
    </li>
  );
}

export default Info;

