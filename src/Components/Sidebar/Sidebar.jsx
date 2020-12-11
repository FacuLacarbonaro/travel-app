import React from "react";
import axios from "axios";
import "./Sidebar.scss";
import { deleteLogEntry } from "../../api/Api";

const Sidebar = ({ logEntries, onClose, flyTo }) => {
  let Entries = logEntries.data || [];

  const deleteLocation = async (e, entry) => {
    e.preventDefault();
    let idToDelete = entry._id;
    deleteLogEntry(idToDelete);
    onClose();
  };

  return (
    <div className="sidebar">
      <h3>Locations saved</h3>
      <ul>
        {Entries.map((entry) => (
          <div className="sidebar__item" key={entry._id}>
            <li onClick={(e) => flyTo(e, entry)}>
              <h4>{entry.title}</h4>
            </li>
            <button onClick={(e) => deleteLocation(e, entry)}>X </button>
          </div>
        ))}
      </ul>
      <div className="sidebar__help">
        <h4>Double click on Map to save a new Location</h4>
      </div>
    </div>
  );
};

export default Sidebar;
