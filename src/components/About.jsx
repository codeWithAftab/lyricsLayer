import React from 'react'

function About() {
  return (
    <>
    {/* About Section */}
    <section className="section" id="about">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-md-6 pr-md-5 mb-4 mb-md-0">
            <h6 className="section-title mb-0">About Company</h6>
            <h6 className="section-subtitle mb-4" />
           
            <h6> 
            ✨ Welcome to LyricsLayer: Where Music Finds Its Voice  🎶
              </h6>
          <p className='love-tune-desc'>

At LyricsLayer, we embrace the transformative magic of music, recognizing its profound impact on our lives. Pioneering in the digital music realm, we embark on a journey to reshape how people connect with their cherished tunes. Our mission revolves around seamlessly weaving lyrics, melodies, and meaningful moments, offering a revolutionary platform for global music enthusiasts. Join us in redefining your music experience. 🎶✨**
            </p>
         
          </div>
          <div className="col-md-6 pl-md-5">
            <div className="row">
            <img
              src="/imgs/logo.jpg"
              alt=""
              className="w-100 mt-3 shadow-sm"
            />
         
       
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
  
  )
}

export default About