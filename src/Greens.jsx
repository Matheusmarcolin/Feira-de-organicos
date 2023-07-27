import React, { useState } from 'react';

function Greens() {
  const [legumes, setLegumes] = useState("");
  const [showContent, setShowContent] = useState(false);
  const [isEmptyChecked, setIsEmptyChecked] = useState(false);

  function handleRadioChange() {
    setShowContent(true); 
  }


  function renderContent() {
    if (showContent) {
      return <div className='fruits-content'>LEGUME ADFHUIAEFUI</div>;
    }
    return null
    
  }

  function handleRadioEmpty() {
    setShowContent(false);
  }

  return (
    <div>
      <input type="radio" name="inputs" onClick={handleRadioChange} onBlur={handleRadioEmpty} /> Legumes
      {renderContent()} 
    </div>
  );
}

export default Greens;
