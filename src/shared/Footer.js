import React from 'react'
import StickyFooter from 'react-sticky-footer'

const Footer = () => (
  <StickyFooter
    bottomThreshold={50}
    normalStyles={{
      backgroundColor: '#fff',
      padding: '20px',
      margin: ' 100px 0 0'
    }}
    stickyStyles={{
      backgroundColor: '#fff',
      padding: '1rem'
    }}
  >
      &copy; {new Date().getFullYear()} Copyright: <a href="https://www.pantlitz.dev"> Patricia Antlitz </a>
  </StickyFooter>

)

export default Footer
