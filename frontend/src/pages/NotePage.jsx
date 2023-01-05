import React, {useState, useEffect} from "react";
import {Link, useParams} from "react-router-dom";
import {ReactComponent as ArrowLeft} from "../assets/arrow-left.svg";

const NotePage = ({match, history}) => {
    const {id} = useParams();
    let [note, setNote] = useState("");

    useEffect(() => {
        getNote();
    }, [id]);

    let getNote = async () => {
        if (id === 'new') return;

        let response = await fetch(`http://127.0.0.1:8000/api/note/${id}/`);
        let data = await response.json();
        setNote(data);
    };

    let createNote = async () => {
        await fetch(`http://127.0.0.1:8000/api/notes/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(note),
        });
        history.push('/');
    };

    let updateNote = async () => {
        await fetch(`http://127.0.0.1:8000/api/note/${id}/`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(note),
        });
    };

    let deleteNote = async () => {
        await fetch(`http://127.0.0.1:8000/api/note/${id}/`, {
            method: 'Delete',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        history.push('/');
    };

    let handleSubmit = () => {
        if (id !== 'new' && note.body === '') deleteNote()
        else if (id !== 'new') updateNote()
        else if (id === 'new' && note.body !== null) createNote()

        history.push('/');
    };

    return (
        <div className="note">
            <div className="note-header">
                <h3 className="arrow">
                    <ArrowLeft onClick={handleSubmit}/>
                </h3>

                {id !== 'new'
                    ? <button onClick={deleteNote}>Delete</button>
                    : <button onClick={createNote}>Create</button>
                }
            </div>

            <textarea onChange={(e) => {
                setNote({...note, 'body': e.target.value})
            }} defaultValue={note.body}></textarea>
        </div>
    );
};

export default NotePage;
