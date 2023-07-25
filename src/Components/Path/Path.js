import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faSuitcase } from '@fortawesome/free-solid-svg-icons';
import './Path.css'
export default function Path() {
  return (
    <div className='pathComo'>
      <div className='icon1'>
      <FontAwesomeIcon icon={faSuitcase} id='icon1'/>&nbsp; &nbsp;jobs - Full-stack Developer
      <button className='btn1'>view job details</button>
      <select name="Add Candidate" className='cd'>
        <option value="Full Stack">Add Candidate</option>
        <option value="Front-End">Front-End</option>
        <option value="Back-End">Back-End</option>
        <option value="Back-End">None</option>
      </select>
      <button className='btn2'>Published</button>
      </div>
      </div>
  )
}
