import React from "react"
import {useState}from'react'

const SocialMedia = () => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <>
      <section className='social'>
        <select className='socBox'value={selectedOption} onChange={handleOptionChange}>
     
     
        <option value=""> Select Categoty</option>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        </select>
        <select className='socBox'value={selectedOption} onChange={handleOptionChange}>
     
     
     <option value=""> Select Theature</option>
     <option value="option1">Option 1</option>
     <option value="option2">Option 2</option>
     </select>
     <select className='socBox'value={selectedOption} onChange={handleOptionChange}>
     
     
     <option value=""> Select Provinence</option>
     <option value="option1">Option 1</option>
     <option value="option2">Option 2</option>
     </select>
     <select className='socBox'value={selectedOption} onChange={handleOptionChange}>
     
     
     <option value=""> Select  District</option>
     <option value="option1">Option 1</option>
     <option value="option2">Option 2</option>
     </select>
     <select className='socBox'value={selectedOption} onChange={handleOptionChange}>
     
     
     <option value=""> Select Time Period</option>
     <option value="option1">Option 1</option>
     <option value="option2">Option 2</option>
     </select>

     
        
        
      </section>
    </>
  )
}

export default SocialMedia
