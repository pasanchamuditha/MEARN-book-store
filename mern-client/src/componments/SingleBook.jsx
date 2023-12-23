import React from 'react'
import { useLoaderData } from 'react-router-dom'

function SingleBook() {

  const {_id,bookTitle} = useLoaderData();
  return (
    <div>
    <h2>{bookTitle}</h2>
    </div>
  )
}

export default SingleBook
