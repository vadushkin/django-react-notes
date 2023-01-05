import React from 'react';
import {ReactComponent as AddIcon} from "../assets/add.svg";
import {Link} from "react-router-dom";

const AddButton = () => {
    return (
        <Link to="/note/new" className="floating-button">
            <AddIcon/>
        </Link>
    );
};

export default AddButton;
