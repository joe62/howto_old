import React, { Component } from 'react';
import './style.css'

export default () => (
  <div>
    <div className="header"><h1>Chania</h1></div>
    <div className="row">
      <div className="col-3 menu">
        <ul>
          <li>The Flight</li>
          <li>The City</li>
          <li>The Island</li>
          <li>The Food</li>
        </ul>
      </div>
      <div className="col-9">
        <h1>The City</h1>
        <p>Chania is the capital of the Chania region on the island of Crete. The city can be divided in two parts, the old town and the modern city.</p>
        <p>Resize the browser window to see how the content respond to the resizing.</p>
      </div>
    </div>
  <div class="footer">
    <p>Resize the browser window to see how the content respond to the resizing.</p>
  </div>
  </div>
)
