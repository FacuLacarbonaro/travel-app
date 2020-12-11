import axios from "axios";

const API_URL = "https://travel-map-ap.herokuapp.com/";

export const listLogEntries = async () => {
  return await axios.get(`${API_URL}/entries`);
};

export const createLogEntry = async (data) => {
  return await axios.post(`${API_URL}/entries`, data);
};

export const deleteLogEntry = async (idToDelete, data) => {
  return await axios.delete(`${API_URL}/entries/${idToDelete}`, data);
};

export const updateEntry = async (updated) => {
  let id = updated._id;
  return await console.log(
    id
  ); /* axios.update(`${API_URL}/entries/${updated._id}`, updated); */
};
