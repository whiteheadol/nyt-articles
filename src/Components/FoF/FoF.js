import React from 'react';
import { Link } from 'react-router-dom';
import './FoF.css'


const FoF = () => {

  return(
    <div>
      <p className='fof-message'>Hey! You're trying to visit a page that doesn't exist. <Link to={'/'}>Go back home!</Link></p>
    </div>
  )
}

export default FoF;
