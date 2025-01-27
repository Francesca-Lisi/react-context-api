import { useGlobalContext } from '../context/GlobalContext'
import { useEffect } from 'react'

const PostList = () => {

  const { posts, fetchPosts } = useGlobalContext();

  useEffect(() => {
    fetchPosts()
  }, [])

  return (
    <div className='container my-5 p-3'>
      <div className='row row-cols-2'>
        {posts.map(post => (
          <div className="col" key={post.id}>
            <div className="card m-2 p-4">
              <img src={post.image} alt={post.title} />
              <h4>{post.title}</h4>
              <p>{post.content}</p>
              <p><strong>Tags:</strong> {post.tags.join(', ')}</p>
              <div><button className='btn btn-outline-danger'>Elimina</button></div>
            </div>
          </div>
        ))}
      </div>

    </div >
  )
}

export default PostList