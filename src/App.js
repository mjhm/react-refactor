import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <h1 className="App-title">Refactoring Cats and Dogs</h1>
        <section>
          <ul>
            <li>
              <dt>Order</dt>
              <dd>Carnivora</dd>
              <ul>
                <li>
                  <dt>Suborder</dt>
                  <dd>Caniformia</dd>
                  <ul>
                    <li>
                      <dt>Genus</dt>
                      <dd>Canis</dd>
                    </li>
                    <li>
                      <dt>Genus</dt>
                      <dd>Vulpes</dd>
                    </li>
                  </ul>
                </li>
                <li>
                  <dt>Suborder</dt>
                  <dd>Feliformia</dd>
                  <ul>
                    <li>
                      <dt>Genus</dt>
                      <dd>Felis</dd>
                    </li>
                    <li>
                      <dt>Genus</dt>
                      <dd>Leopardus</dd>
                    </li>
                    <li>
                      <dt>Genus</dt>
                      <dd>Lynx</dd>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
        </section>
      </div>
    )
  }
}

export default App
