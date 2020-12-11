import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { createLogEntry } from "../../api/Api";

import "./LogEntryForm.scss";

const LogEntryForm = ({ location, onClose }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    data.latitude = location.latitude;
    data.longitude = location.longitude;
    const createdLog = await createLogEntry(data);
    console.log(createdLog);
    createLogEntry(createdLog);
    onClose();
  };

  return (
    <form className="entryForm" onSubmit={handleSubmit(onSubmit)}>
      {error ? <h3>{error}</h3> : null}
      <label for="title">Title</label>
      <input type="text" name="title" required ref={register} />
      <label for="comments">Comments</label>
      <input type="text" name="comments" ref={register} />
      <label for="description">Description</label>
      <textarea type="text" name="description" ref={register} />
      <label for="image">Image (url)</label>
      <input type="text" name="image" alt="" ref={register} />
      <label for="visitDate">Visit Date</label>
      <input type="date" name="visitDate" required ref={register} />
      <button className="entryForm__button" disabled={loading}>
        {loading ? "Loading..." : "Create Entry"}
      </button>
    </form>
  );
};

export default LogEntryForm;
