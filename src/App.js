import React, { useState, useEffect } from "react";
import ReactMapGL, { Marker, Popup, FlyToInterpolator } from "react-map-gl";
import { listLogEntries } from "./api/Api";
import LogEntryForm from "./Components/LogEntryForm/LogEntryForm.jsx";
import { easeCubic } from "d3-ease";
import Sidebar from "./Components/Sidebar/Sidebar";
import PopUpEdit from "./Components/PopUp/PopUpEdit.jsx";

import "./App.scss";

const App = () => {
  const [logEntries, setLogEntries] = useState([]);
  const [showPopup, setShowPopup] = useState({});
  const [addEntryLocation, setAddEntryLocation] = useState(null);
  const [popUpOpen, setPopUpOpen] = useState(false);
  const [viewport, setViewport] = useState({
    width: "80%",
    height: "100%",
    latitude: 0,
    longitude: 0,
    zoom: 2,
  });

  const getEntries = async () => {
    const logEntries = await listLogEntries();
    setLogEntries(logEntries);
  };

  useEffect(() => {
    getEntries();
  }, []);

  const showAddMarkerPopup = (e) => {
    const [longitude, latitude] = e.lngLat;
    setAddEntryLocation({
      longitude,
      latitude,
    });
  };

  const flyTo = (e, entry) => {
    e.preventDefault();

    let longitude = entry.longitude;
    let latitude = entry.latitude;

    const newView = {
      ...viewport,
      latitude,
      longitude,
      zoom: 10,
      transitionDuration: 5000,
      transitionInterpolator: new FlyToInterpolator(),
      transitionEasing: easeCubic,
    };

    setViewport(newView);
    setShowPopup({
      ...showPopup,
      [entry._id]: true,
    });
  };

  let Entries = logEntries.data || [];

  return (
    <div className="app">
      <ReactMapGL
        {...viewport}
        mapStyle="mapbox://styles/faculacarbonaro/ckidhkgwk2fg819pbglqo4n12"
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        onViewportChange={(nextViewport) => setViewport(nextViewport)}
        onDblClick={showAddMarkerPopup}
      >
        {Entries.map((entry) => (
          <React.Fragment key={entry._id}>
            <Marker latitude={entry.latitude} longitude={entry.longitude}>
              <div
                onClick={() =>
                  setShowPopup({
                    ...showPopup,
                    [entry._id]: true,
                  })
                }
              >
                <svg
                  className="marker yellow"
                  style={{
                    height: `${6 * viewport.zoom}px`,
                    width: `${6 * viewport.zoom}px`,
                  }}
                  version="1.1"
                  id="Layer_1"
                  x="0px"
                  y="0px"
                  viewBox="0 0 512 512"
                >
                  <g>
                    <g>
                      <path
                        d="M256,0C153.755,0,70.573,83.182,70.573,185.426c0,126.888,165.939,313.167,173.004,321.035
                        c6.636,7.391,18.222,7.378,24.846,0c7.065-7.868,173.004-194.147,173.004-321.035C441.425,83.182,358.244,0,256,0z M256,278.719
                        c-51.442,0-93.292-41.851-93.292-93.293S204.559,92.134,256,92.134s93.291,41.851,93.291,93.293S307.441,278.719,256,278.719z"
                      />
                    </g>
                  </g>
                </svg>
              </div>
            </Marker>
            {showPopup[entry._id] ? (
              <Popup
                latitude={entry.latitude}
                longitude={entry.longitude}
                closeButton={true}
                closeOnClick={false}
                dynamicPosition={true}
                onClose={() =>
                  setShowPopup({
                    ...showPopup,
                    [entry._id]: false,
                  })
                }
                anchor="top"
              >
                <PopUpEdit entry={entry} />
              </Popup>
            ) : null}
          </React.Fragment>
        ))}

        {addEntryLocation ? (
          <>
            <Marker
              latitude={addEntryLocation.latitude}
              longitude={addEntryLocation.longitude}
            >
              <div>
                <svg
                  className="marker yellow"
                  style={{
                    height: `${6 * viewport.zoom}px`,
                    width: `${6 * viewport.zoom}px`,
                  }}
                  version="1.1"
                  id="Layer_1"
                  x="0px"
                  y="0px"
                  viewBox="0 0 512 512"
                >
                  <g>
                    <g>
                      <path
                        d="M256,0C153.755,0,70.573,83.182,70.573,185.426c0,126.888,165.939,313.167,173.004,321.035
                        c6.636,7.391,18.222,7.378,24.846,0c7.065-7.868,173.004-194.147,173.004-321.035C441.425,83.182,358.244,0,256,0z M256,278.719
                        c-51.442,0-93.292-41.851-93.292-93.293S204.559,92.134,256,92.134s93.291,41.851,93.291,93.293S307.441,278.719,256,278.719z"
                      />
                    </g>
                  </g>
                </svg>
              </div>
            </Marker>

            <Popup
              latitude={addEntryLocation.latitude}
              longitude={addEntryLocation.longitude}
              closeButton={true}
              closeOnClick={false}
              dynamicPosition={true}
              anchor="top"
              onClose={() => setAddEntryLocation(null)}
            >
              <div className="popup">
                <LogEntryForm
                  onClose={() => {
                    setAddEntryLocation(null);
                    getEntries();
                  }}
                  location={addEntryLocation}
                  
                />
              </div>
            </Popup>
          </>
        ) : null}
      </ReactMapGL>
      <Sidebar
        setLogEntries={setLogEntries}
        logEntries={logEntries}
        onClose={() => {
          setAddEntryLocation(null);
          getEntries();
        }}
        flyTo={flyTo}
      />
    </div>
  );
};

export default App;
