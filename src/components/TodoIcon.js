import React from 'react';
import { MdCheckCircle, MdMoreVert } from "react-icons/md";
import '../styles/TodoIcon.css'



const iconTypes = {
    "check": color => (
        <MdCheckCircle className="Icon-svg Icon-svg--check" fill={color} />
      ),
      "delete": color => (
        <MdMoreVert className="Icon-svg Icon-svg--delete" fill={color} />
      ),
}

function TodoIcon({ type, color = 'gray', onClick }) {
    return (
        <span
          className={`Icon-container Icon-container--${type}`}
          onClick={onClick}
        >
          {iconTypes[type](color)}
        </span>
      );
};

export { TodoIcon };