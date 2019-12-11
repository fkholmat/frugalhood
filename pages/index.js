import React from 'react'

class HomePage extends React.Component {
  render() {
    return (
      < >
        <div className="hero is-medium is-primary is-bold">
          <div className="hero-body">
            <div className="container">
              <h1 className="title is-size-3">Welcome</h1>
              <h2 className="subtitle is-size-5">I am Next.js, Bulma and Contentful starter</h2>
              <button className="button is-uppercase">Learn More</button>
            </div>
          </div>
        </div>
        <div className="section">
          <div className="columns">
            <div className="column"></div>
            <div className="column"></div>
          </div>
        </div>
      </>
    )
  }
}

export default HomePage