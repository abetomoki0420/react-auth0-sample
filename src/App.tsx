import { useAuth0 } from "@auth0/auth0-react"

const App = () => {
  const { user, loginWithRedirect, isLoading, logout, isAuthenticated } = useAuth0()

  if(isLoading){
    return (
      <p>Now Loading...</p>
    )
  }

  if (isAuthenticated) {
    return (
      <div>
        <p>こんにちは { user?.name } さん</p>
        <button onClick={ () => logout() }>
          Logout
        </button>
      </div>
    )
  }

  return (
    <div>
      <p>ログインして下さい</p>
      <button onClick={ () => loginWithRedirect() }>
        Login
      </button>
    </div>
  )
}

export default App;