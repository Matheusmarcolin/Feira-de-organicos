import React, { useState } from 'react';

function Vegetables() {
  const [verduras, setVerduras] = useState("");
  const [showContent, setShowContent] = useState(false); 

  
  function handleRadioChange() {
    setShowContent(true); 
  }

  function renderContent() {
    if (showContent) {
      return <div className='fruits-content'>Verduras: alfaceuhgduhfdhguft</div>;
    }
    return null;
  }

  function handleRadioEmpty() {
    setShowContent(false);
  }

  return (
    <div>
      <input type="radio" name="inputs" onClick={handleRadioChange} onBlur={handleRadioEmpty} /> Verduras
      {renderContent()} 
    </div>
  );
}

export default Vegetables;
