import React, { Component } from 'react';
import Network from 'react-network'

export default class App extends Component {
  state = {
    image: null
  }
  
  handleNetworkChange = ({ online }) => {
    online ? this.fetch() : clearTimeout(this.timeout)
  }

  fetch = () => {
    fetch('https://unsplash.it/640/400/?random')
      .then(res => res.blob())
      .then(blob => {
        var image = URL.createObjectURL(blob)
        this.setState({ image })
        this.timeout = setTimeout(this.fetch, 5000)
      })
  }

  render() {
    return (
      <div style={{position: 'relative'}}>
        {this.state.image ? (
          <img src={this.state.image} width="100%"/>
        ) : (
          <p>Loading first image</p>
        )}
        <Network 
          onChange={this.handleNetworkChange}
          render={({online}) => (
            online ? null : (
              <p style={{color: 'red'}}>
                You are offline, images will continue when you get back online
              </p>
            )
          )}
        />
      </div>
    );
  }
}
