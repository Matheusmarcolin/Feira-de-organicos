import React, { useState } from 'react';

function Fruits() {
  const [frutas, setFrutas] = useState("");
  const [showContent, setShowContent] = useState(false);

  function handleRadioChange() {
    setShowContent(true); 
  }
  
  function renderContent() {
    if (showContent) {
      return <div className='fruits-content'>As frutas são boas porque são saudáveis</div>;
    }
    return null;
  }

  function handleRadioEmpty() {
    setShowContent(false);
  }

  return (
    <div>
      <input type="radio" name="inputs"  onClick={handleRadioChange}  onBlur={handleRadioEmpty} /> Frutas
      {renderContent()} {/* Renderiza o conteúdo de acordo com o estado showContent */}
    </div>
  );
}

export default Fruits;
