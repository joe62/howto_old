import React, { Component } from 'react';
import { map, tileLayer, marker, circle} from 'leaflet'
import styled, { injectGlobal } from 'styled-components'
import '../../../node_modules/leaflet/dist/leaflet.css'

const MyDiv = styled.div`
  height: 768px;
`

export class MyMap extends Component {
  constructor(props){
    super(props)
  }
  componentDidMount() {
    const { url, accessToken,  maxZoom} = this.props.mapInfo
    const mymap = map('map').fitWorld();
    tileLayer(url, {
        id: 'mapbox.streets',
        accessToken,
      
    }).addTo(mymap);

    mymap.locate({setView: true,maxZoom})
    
    mymap.on('locationfound', e => {
      const radius = e.accuracy / 2
      marker(e.latlng).addTo(mymap)
        .bindPopup(`You are within ${radius} meters from this point`).openPopup()
      circle(e.latlng,radius).addTo(mymap)
    })

    mymap.on('locationerror', e => alert(e.message))

  } 
  render() {
    return (
      <MyDiv id="map"></MyDiv>
    );
  }
}


