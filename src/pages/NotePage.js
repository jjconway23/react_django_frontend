import React, {useState, useEffect} from 'react'
import { useNavigate } from "react-router-dom";
import {useParams, useHistory } from 'react-router-dom';
import {ReactComponent as ArrowLeft} from '../assets/chevron-left.svg';

const NotePage = ({params, history}) => {
    const {id} = useParams(params)
    const navigate = useNavigate(history);

    let [note, setNote] = useState(null)
    useEffect( ()=> {
        getNote()
    }, [id])

    let getNote = async () => {
        let response = await fetch(`/api/notes/${id}`)
        let data = await response.json()
        setNote(data)

    }

    let updateNote = async () => {
      fetch(`/api/notes/${id}/update/`, {
        method:"PUT",
        headers: {
          'Content-Type' : 'application/json'
        },
        body: JSON.stringify(note)
      })
    }
    let handleSubmit = () => {
      updateNote()
      navigate('/')
      

    }
    let deleteNote = async () => {
      fetch(`/api/notes/${id}/delete/`, {
        method:"DELETE",
        'headers': {
          'Content-Type' : 'application/json'
        }
      })
      navigate('/')

    }
  return (
    <div className='note'>
      <div className='note-header'>
        <h3>
            <ArrowLeft onClick={handleSubmit}/>
        </h3>
        <button onClick={deleteNote}>Delete Note</button>
      </div>
        <textarea onChange={ e =>{setNote({...note, 'body': e.target.value})}} defaultValue={note?.body}></textarea>
    </div>
  )
}

export default NotePage