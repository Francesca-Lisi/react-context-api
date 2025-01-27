import React from 'react'

const PostList = () => {
  return (
    <div className='card m-5 p-3'>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Immagine</th>
            <th scope="col">Titolo</th>
            <th scope="col">Contenuto</th>
            <th scope="col">Tags</th>
            <th scope="col">Azioni</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Mark</td>
            <td>Mark</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>

        </tbody>
      </table>
    </div>
  )
}

export default PostList