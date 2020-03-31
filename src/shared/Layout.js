import React from 'react'

import Nav from './Nav'

const Layout = props => (
  <div>
    <Nav />

    {props.children}

    <section>
      <p>Created by: {props.email}</p>
    </section>
  </div>
)

export default Layout
