import React from 'react'

function LoveTune() {
  return (
    <>
    {/* About Section */}
    <section className="section" id="lovetune">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-md-6 pr-md-5 mb-4 mb-md-0">
            <h6 className="section-title mb-0">🎧 Love Tunes 🎧 Music Player</h6>
            <h6 className="section-subtitle mb-4" />
           
            <h6> 
            LoveTune: 🎵 Your Song. 💖 Your Love. 📱 Our App.
              
              </h6>
          <p className='love-tune-desc'>
          Dive into the magic of LoveTune, where your favorite melodies take the spotlight! 🌟 More than just a music player, LoveTune is your sidekick in creating moments as unique as your taste in music. 🎶 Share the beats you love with those who matter and let LoveTune be the vibrant soundtrack to your one-of-a-kind story. 🚀
            </p>
            <div className="addlyrics">
      <a
        href="/assets/lovetunes.apk"
        download="Love Tunes"
        className="btn btn-primary mt-5 btn  p-3 create-btn "
      >
     🎵 Download Apk
      </a>
    </div>
         
          </div>
          <div className="col-md-6 pl-md-5">
            <div className="row">
            <img
              src="/imgs/rm-lovetune.png"
              alt=""
              className="m-3"
            />
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
  
  )
}

export default LoveTune