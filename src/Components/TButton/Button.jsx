import React, { useState } from "react";
import { AATranslationex } from "../../AATranslationex"
import i18n from '../../Translation/i18n.js';



const Button = () => {

  const [language, setLanguage] = useState('en');

  const handleOnclick = (e) => {
    e.preventDefault();
    setLanguage(e.target.value);
    i18n.changeLanguage(e.target.value);
  }
  return (
    <div>
      <button value='ar' onClick={handleOnclick} style={{ marginLeft: "43%" }}>
        Arabic
      </button>
      <button value='en' onClick={handleOnclick}>
        English
      </button>
      <button value='hi' onClick={handleOnclick}>
        Hindi
      </button>



      <AATranslationex lang={language} />
    </div>
  )
}

export default Button