import React from 'react'

function Header() {
  return (
    <header className="header">
  <div className="overlay">
    {/* <h1 class="subtitle">Layer Of Lyrics.</h1> */}
    <h1 className="title">Ready  for Music Revolution.</h1>
    <h1 className="subtitle">Lyrics Layer</h1>
    <div className="addlyrics">
      <a
        href="#service"
        className="btn btn-primary mt-5 btn rounded p-3 create-btn "
      >
     Explore Services
      </a>
    </div>
    {/* <h1 class="title">Add Layer of Lyrics In the Video.</h1>   */}
  </div>
  <div className="shape">
    <svg viewBox="0 0 1500 200">
      <path d="m 0,240 h 1500.4828 v -71.92164 c 0,0 -286.2763,-81.79324 -743.19024,-81.79324 C 300.37862,86.28512 0,168.07836 0,168.07836 Z" />
    </svg>
  </div>
  <div className="mouse-icon">
    <div className="wheel" />
  </div>
</header>

  )
}

export default Header