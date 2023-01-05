import React, {useState, useEffect} from "react";
import {useParams} from "react-router-dom";

const NotePage = () => {
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

    return (
        <div>
            <h1>{note.body}</h1>
        </div>
    );
};

export default NotePage;
