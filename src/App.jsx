import { GlobalProvider } from "./context/GlobalContext"
import PostPage from "./components/PostPage"
import PostList from "./components/PostList"

const App = () => {
  return (
    <GlobalProvider>
      <PostPage />
      <PostList />
    </GlobalProvider>

  )
}

export default App