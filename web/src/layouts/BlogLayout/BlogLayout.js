import { Link, routes } from '@redwoodjs/router'
import { useAuth } from '@redwoodjs/auth'

const BlogLayout = ({ children }) => {
  const { logIn, logOut, isAuthenticated, currentUser } = useAuth()

  return (
    <>
      <header>
        <h1>
          <Link to={routes.home()}>Redwood Blog</Link>
        </h1>
        <nav>
          <Link to={routes.about()}>About</Link>
          <Link to={routes.contact()}>Contact</Link>
          <button onClick={isAuthenticated ? logOut : logIn}>
            {isAuthenticated ? 'Log Out' : 'Log In'}
          </button>
          {isAuthenticated && <span>{currentUser.email}</span>}
        </nav>
      </header>
      <main>{children}</main>
    </>
  )
}

export default BlogLayout
