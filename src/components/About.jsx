import React from 'react'

function About() {
  return (
    <div >
        <img src={`${process.env.PUBLIC_URL}/aashram.jpg`} alt="Temple"/>
        <h1>Bhagavaan Gopinaath Ji</h1>
        <p>
          Bhagavaan Gopinath Ji (3 July 1898 – 28 May 1968), born Gopinath Bhan,
           also called Bhagavaan Ji, was a mystic saint of early 20th century Kashmir in 
           India. He has been called a jivanmukta (liberated soul) and his spiritual state
           has been described as Shambhavi avastha (state of Shiva).
          Contemporary saints of his times have also called him an Aghoreshwar. It was sometime during 1946–1956 that he came to be called as Bhagavaan Gopinath Ji by his devotees.
        </p>
    </div>
  )
}

export default About