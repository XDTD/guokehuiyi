import React from 'react'
import ReactDOM from 'react-dom'
import Cropper from '../src/index.js'

const WIDTH = 262
const HEIGHT = 147

class Wrapper extends React.Component {
  state = {
    image: null,
    previewUrl: null
  }

  onChange = evt => {
    this.setState({
      image: evt.target.files[0]
    })
  }

  crop = () => {
    return this.cropper.cropImage().then(image => {
      this.setState({
        previewUrl: window.URL.createObjectURL(image)
      })
    })
  }

  clear = () => {
    this.file.value = null
    this.setState({
      previewUrl: null,
      image: null
    })
  }

  imageLoaded = img => {
    if (
      img.naturalWidth &&
      img.naturalWidth < WIDTH &&
      img.naturalHeight &&
      img.naturalHeight < HEIGHT
    ) {
      this.crop()
    }
  }

  render() {
    return (
      <div>
        <input ref={e => this.file = e} type="file" onChange={this.onChange} />
        <div className="Wrapper">
          {this.state.image && (
            <div>
              <Cropper
                ref={e => this.cropper = e}
                image={this.state.image}
                width={WIDTH}
                height={HEIGHT}
                onImageLoaded={this.imageLoaded}
              />
            </div>
          )}
        </div>
        <div>
          <button onClick={this.crop}>Crop</button>
          <button onClick={this.clear}>Clear</button>
        </div>
        {this.state.previewUrl && <img src={this.state.previewUrl} />}
      </div>
    )
  }
}

ReactDOM.render(<Wrapper />, document.querySelector('#view'))
