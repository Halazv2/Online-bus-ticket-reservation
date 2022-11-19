// import React, { useState, useRef, useEffect } from 'react';

import { useState } from "react";
import UpdateTripModal from "./updateTripModal";

function UpdateTrip({ getTrips, modalOpenTrip, setModalOpenTrip }) {
  return (
    <>
      {/* Modal */}
      <UpdateTripModal
        modalOpen={modalOpenTrip}
        setModalOpen={setModalOpenTrip}
        getTrips={getTrips}
      />
    </>
  );
}

export default UpdateTrip;
