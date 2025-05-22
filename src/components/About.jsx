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
        <div className="info-section">
  <h2>Information</h2>

  <div className="info-row">
    <div className="info-title">Dham</div>
    <div className="info-value">
      <button className="tag">Prayer Hall</button>
      <button className="tag">Shri Radha Krishna</button>
      <button className="tag">Shri Gauri Shankar</button>
      <button className="tag">Shri Ram Pariwar</button>
      <button className="tag">Maa Durga</button>
      <button className="tag">Shivling with Gan</button>
      <button className="tag">Outer Area</button>
    </div>
  </div>

  <div className="info-row">
    <div className="info-title">Basic Services</div>
    <div className="info-value">
      Prasad, Drinking Water, Water Cooler, Shoe Store, Sitting Benches, Prasad Shop, Washrooms
    </div>
  </div>

  <div className="info-row">
    <div className="info-title">Founder</div>
    <div className="info-value">Kashmiri Welfare Society</div>
  </div>

  <div className="info-row">
    <div className="info-title">Organized By</div>
    <div className="info-value">Kashmiri Welfare Society</div>
  </div>

  <div className="info-row">
    <div className="info-title">Dedicated To</div>
    <div className="info-value">Shri Shiv</div>
  </div>

  <div className="info-row">
    <div className="info-title">Photography</div>
    <div className="info-value">
      ✓ Yes <small>(It's not ethical to capture photographs during worship. Follow temple’s rules.)</small>
    </div>
  </div>

  <div className="info-row">
    <div className="info-title">Free Entry</div>
    <div className="info-value">✓ Yes</div>
  </div>
</div>
    </div>
  )
}

export default About