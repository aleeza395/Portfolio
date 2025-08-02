import React from 'react'
import { useState } from 'react'
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import '../pages/Home.css'
import { Link } from 'react-router-dom';

const Projectcard = ({title, imgLink,  imgSrc, description}) => {
    const [expanded, setExpanded] = useState(false);

    const handleExpand = () => {
        setExpanded((prev) => !prev)
    }

  return (
    <div className={`project-divs ${expanded ? 'expanded' : ''}`}>
        <p className='title'>{title}</p>
        <Link to={imgLink} target='_blank'><img className='images' src={imgSrc} alt='project'></img></Link>
        <small className='info'>Click on the image to open the page.</small>
        {expanded && (<div className='description-wrapper'><p className='description'>{description}</p></div>)}
        {expanded ? <div onClick={handleExpand}><FaChevronUp className='card-icons' /></div> : <div onClick={handleExpand}><FaChevronDown className='card-icons'/></div>}
    </div>
  )
}

export default Projectcard