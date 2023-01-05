import React, {useState, useEffect} from "react";
import {Link, useParams} from "react-router-dom";
import {ReactComponent as ArrowLeft} from "../assets/arrow-left.svg";

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
        <div className="note">
            <div className="note-header">
                <h3 className="arrow">
                    <Link to="/">
                        <ArrowLeft/>
                    </Link>
                </h3>
            </div>
            <textarea defaultValue={note.body}></textarea>
        </div>
    );
};

export default NotePage;
