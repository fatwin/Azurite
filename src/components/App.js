import * as React from 'react'

export default class App extends React.Component {
  render() {
    return (
      <div className="container">
        {this.props.children}
      </div>
    )
  }
}