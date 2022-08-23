import React, {useState, useEffect} from 'react'
import {useParams, Link} from 'react-router-dom';
import {ReactComponent as ArrowLeft} from '../assets/chevron-left.svg';

const NotePage = ({params}) => {
    const {id} = useParams(params)
    let [note, setNote] = useState(null)

    useEffect( ()=> {
        getNote()
    }, [id])

    let getNote = async () => {
        let response = await fetch(`/api/notes/${id}`)
        let data = await response.json()
        setNote(data)

    }
  return (
    <div className='note'>
      <div className='note-header'>
        <h3>
          <Link to="/">
            <ArrowLeft />
          
          </Link>
        </h3>
      </div>
        <textarea defaultValue={note?.body}></textarea>
    </div>
  )
}

export default NotePage