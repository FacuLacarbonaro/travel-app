import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { updateEntry } from "../../api/Api";

import "./PopUpEdit.scss";

const PopUp = ({ entry }) => {
  const [edit, setEdit] = useState(true);
  const { register, handleSubmit } = useForm();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const [newData, setNewData] = useState(entry);
  const handleInputChange = (event) => {
    // console.log(event.target.name)
    // console.log(event.target.value)
    setNewData({
      ...newData,
      [event.target.name]: event.target.value,
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const updated = await updateEntry(newData);
    updateEntry(updated);
  };

  return (
    <div className="popup">
      {edit ? (
        <div className="popup__complete">
          <h3>{entry.title}</h3>
          <p>{entry.comments}</p>
          <p>{entry.description}</p>
          {entry.image && <img src={entry.image} alt={entry.title} />}
          <small>
            Visited on: {new Date(entry.visitDate).toLocaleDateString()}
          </small>
          <button onClick={(e) => setEdit(false)}>Edit</button>
        </div>
      ) : (
        <div>
          <form
            className="entryForm"
            onSubmit={(e) => handleSubmit(onSubmit(e))}
          >
            {error ? <h3>{error}</h3> : null}
            <label for="title">Title</label>
            <input
              type="text"
              name="title"
              defaultValue={entry.title}
              required
              ref={register}
              onChange={handleInputChange}
            />
            <label for="comments">Comments</label>
            <input
              type="text"
              name="comments"
              defaultValue={entry.comments}
              onChange={handleInputChange}
              ref={register}
            />
            <label for="description">Description</label>
            <textarea
              type="text"
              name="description"
              defaultValue={entry.description}
              ref={register}
            />
            <label for="image">Image (url)</label>
            <input
              type="text"
              name="image"
              defaultValue={entry.image}
              alt=""
              onChange={handleInputChange}
              ref={register}
            />
            <label for="visitDate">Visit Date</label>
            <input
              type="date"
              name="visitDate"
              required
              ref={register}
              onChange={handleInputChange}
            />
            <button className="entryForm__button" disabled={loading}>
              {loading ? "Loading..." : "Save new Entry"}
            </button>
            <button
              className="entryForm__button"
              onClick={(e) => setEdit(true)}
            >
              Cancel
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default PopUp;
