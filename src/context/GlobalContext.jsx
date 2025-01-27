import { useState, useContext, createContext } from "react";
import axios from "axios";

const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {

  const [posts, setPosts] = useState([])

  const fetchPosts = () => {
    axios.get('http://localhost:3000/posts')
      .then(res => {
        setPosts(res.data)
        console.log(res.data)
      })
  }

  return (
    <GlobalContext.Provider value={{ posts, fetchPosts }}>
      {children}
    </GlobalContext.Provider>
  )
};

const useGlobalContext = () => {
  return useContext(GlobalContext)
}

export { GlobalProvider, useGlobalContext }