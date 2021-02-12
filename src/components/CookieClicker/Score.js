import React from 'react'

export class Score extends React.Component {
  render() {
    const { clicks } = this.props

    return (
      <h3>{clicks} Clicks</h3>
    );
  }
}
