import React, { Component } from 'react'

export default class Header extends Component {
  render() {
    return (
      <header>
        <div>Fullstack HQ - Frontend Guidelines</div>
        <div style={{fontSize: '10px'}}>inspired by Code Guide by @mdo</div>
      </header>
    )
  }
}