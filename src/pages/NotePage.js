import React, {useState, useEffect} from 'react'
import { Link, useParams } from 'react-router-dom';

const NotePage = ({params}) => {
    const {id} = useParams(params)

  return (
    <div>
        <h1>Single Note {id}</h1>
    </div>
  )
}

export default NotePage