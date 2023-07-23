import React from 'react'
import ReactImageZoom from 'react-image-zoom';

const ImageZoomer = (props) => {
  return (
    <>
        <ReactImageZoom zoomPosition={"original"} {...props} />
    </>
  )
}

export default ImageZoomer