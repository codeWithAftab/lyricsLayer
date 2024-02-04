import React from 'react'

function Services() {
  return (
    <>
  {/* Service Section */}
  <section id="service" className="section pt-0">
    <div className="container">
      <h6 className="section-title text-center">Our Services</h6>
      <h6 className="section-subtitle text-center mb-5 pb-3">
        We'll create the new Era of Digital music &amp; songs.
      </h6>
      <div className="row">
        <div className="col-md-4">
          <div className="card mb-4 mb-md-0">
            <div className="card-body">
              <small className="text-primary font-weight-bold">01</small>
              <h5 className="card-title mt-3"> 🎶📝 Overlays Lyrics </h5>
              <h5>
                <p className="mb-0">
                  
Introducing "Overlays Lyrics" by Lyrics Layer: effortlessly add lyrics to your music videos. Utilize this feature by providing an Lrc file and the corresponding video. Boom! Your personalized lyrics-overlaid video song is ready to share. Enhance your music experience with Overlays, where words meet melody visually. 🎶📝🎥
                </p>
                <div className="goto">
                  <a className="btn btn-primary px-5 mt-3" href="/addlyrics">
                    Create Overlays lyrics
                  </a>
                </div>
              </h5>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card mb-4 mb-md-0">
            <div className="card-body">
              <small className="text-primary font-weight-bold">02</small>
              <h5 className="card-title mt-3"> 💕 Love Tunes Music Player</h5>
              <h5>
                <p className="mb-0">
                  
LoveTune transforms music into shared moments. Experience the joy of synchronized tunes with friends through our collaborative listening feature. 🎵 It’s not just a music player; it’s your social soundtrack. 🤝 Share the beats, create memories, and let LoveTune be the harmony in your life. 🌟📱
                </p>
                <div className="goto">
                  <a className="btn btn-primary px-5 mt-3" href="#lovetune">
                    Download App
                  </a>
                </div>
              </h5>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card mb-4 mb-md-0">
            <div className="card-body">
              <small className="text-primary font-weight-bold">03</small>
              <h5 className="card-title mt-3"> 🎵 Virtual Music Room 🌐</h5>
              <h5>
                <p className="mb-0">
                Explore the Virtual Music Room on our site, where you and friends sync up in real-time, enjoying favorite songs and music videos together. 🎶 Elevate your shared experiences, turning every tune into a virtual concert. It's more than music; it's a personalized, real-time connection experience. 🌐🔗
                </p>
                <div className="goto">
                  <a
                    className="btn btn-primary px-5 mt-3"
                    href="/createlyricalvideo"
                  >
                    Create the Virtual Room
                  </a>
                </div>
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</>

  )
}

export default Services