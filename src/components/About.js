import React from 'react'

export default function About(props) {
  return (
    <div className="container accordion my-5" id="accordionExample">
    <div className="accordion-item">
        <h2 className="accordion-header" id="headingOne">
        <button className={`accordion-button bg-${props.mode === 'light' ? 'light' : 'secondary'} text-${props.mode === 'light' ? 'dark' : 'light'}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        <strong> About the develoer </strong>
        </button>
        </h2>
        <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
        <div className={`accordion-body bg-${props.mode === 'light' ? 'light' : 'secondary'} text-${props.mode === 'light' ? 'dark' : 'light'}`}>
            This web application is developed by Abhinav Singh, 4th year undergraduate student at IIT(BHU), Varanasi.
            <br /> I'm also pursuing diploma in Computer programming from   IIT Madras and this is my first web application.

            <br /> Technologies used - 
            <ol>
                <li>HTML </li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>BootStrap</li>
                <li>React JS</li>
            </ol>
            My Socials: 
            <ul>
                <li><a href='https://linkedin.com/in/abhinav-singh-432466206'> Linkedin </a></li> 
                <li><a href='https://leetcode.com/abhinav_0107/'> LeetCode </a></li> 
                <li><a href='https://github.com/abhinav-0107'> GitHub </a></li> 
            </ul>
        </div>
        </div>
    </div>
    </div>
  )
}


