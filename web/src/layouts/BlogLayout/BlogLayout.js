// web/src/layouts/BlogLayout/BlogLayout.js

import { Link, routes } from '@redwoodjs/router'

const BlogLayout = ({ children }) => {
  return (
    <>
      <header>
        <h1>
          <Link to={routes.home()}>Redwood Blog</Link>
        </h1>
        <nav>
          <Link to={routes.about()}>About</Link>
          <Link to={routes.contact()}>Contact</Link>
        </nav>
      </header>
      <main>{children}</main>
    </>
  )
}

export default BlogLayout
