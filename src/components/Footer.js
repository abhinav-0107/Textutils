import React from 'react'

export default function Footer(props) {
  return (
    <div >
        <div className="card">
        <div className={`card-header bg-${props.mode} text-${props.mode === 'light' ? 'dark' : 'light'}`} >
            <strong>Quote</strong> 
        </div>
        <div className={`card-body bg-${props.mode} text-${props.mode === 'light' ? 'dark' : 'light'}`}>
            <blockquote className="blockquote">
            <p><strong>Know the rules of game and game of rules!</strong></p>
            <footer className="blockquote-footer"><strong>Abhinav Singh</strong></footer>
            </blockquote> 
        </div>
        </div>
    </div>

  )
}
