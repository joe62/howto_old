import React from 'react'
import { MyMap } from './components'

const mapInfo = {
  url: 'https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}',
  accessToken: 'pk.eyJ1Ijoiam9lNjIiLCJhIjoiY2ozNDF4ZWM1MDAwZjMycGd4eHFneDhqcCJ9.FRaGWugufuLcZw5tnBJBwA',
  maxZoom: 16
}
export default () => <MyMap mapInfo = {mapInfo} />