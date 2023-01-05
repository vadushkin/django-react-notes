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
        let response = await fetch(`http://127.0.0.1:8000/api/note/${id}/`);
        let data = await response.json();
        setNote(data);
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
        updateNote();
        history.push('/');
    };

    return (
        <div className="note">
            <div className="note-header">
                <h3 className="arrow">
                    <ArrowLeft onClick={handleSubmit}/>
                    <button onClick={deleteNote}>Delete</button>
                </h3>
            </div>
            <textarea onChange={(e) => {
                setNote({...note, 'body': e.target.value})
            }} defaultValue={note.body}></textarea>
        </div>
    );
};

export default NotePage;
