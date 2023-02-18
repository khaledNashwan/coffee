import React from 'react'
import './Map.css'

const Map = () => {
  return (
    <div className="map">
        <iframe src="https://maps.google.com/maps?q=university%20of%20gaza&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed" id="gmap_canvas"></iframe>
    </div>
  )
}

export default Map

