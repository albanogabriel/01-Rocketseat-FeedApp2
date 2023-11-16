/* eslint-disable react/jsx-key */
import { useState } from 'react'

import { Comment } from './Comment'
import styles from './Post.module.css'

export function Post2() {
  const [comments, setComments] = useState(['1º Array'])
  const [textAreaValue, setTextAreaValue] = useState('')

  function handleCommentInArray() {
    event.preventDefault()
    setComments([...comments, textAreaValue])
  }

  function handleCommentInTextarea() {
    setTextAreaValue(event.target.value)
  }

  return (
    <div>
      <form onSubmit={handleCommentInArray} className={styles.commentForm}>
        <strong>Deixa seu feedback</strong>
        <textarea onChange={handleCommentInTextarea} name="comment" placeholder="deixe um comentário" />
        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>
      {comments.map((comment) => {
        return <Comment content={comment} />
      })}
    </div>
  )
}
