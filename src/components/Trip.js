import React from 'react';
import './Trip.css';
import TripData from './TripData';

function Trip() {
  return (
    <>
      <div className="trip">
        <h1>Recent Trips</h1>
        <p>You can discover unique destinations using Google Maps.</p>
        <div className="tripcard">
          <TripData
            image="../assets/5.jpg"
            heading="Trip in Indonesia"
            text="Indonesia, officially the Republic of Indonesia is a country in Southeast Assia and Oceannia between the Indian and Pacific oceans. It consists of over 17,000 islands, including Sumatra, Java, Sulawesi, and parts of Borneo and New Guinea"
          />
          <TripData
            image="../assets/8.jpg"
            heading="Trip in Malaysia"
            text="Indonesia, officially the Republic of Indonesia is a country in Southeast Assia and Oceannia between the Indian and Pacific oceans. It consists of over 17,000 islands, including Sumatra, Java, Sulawesi, and parts of Borneo and New Guinea"
          />
          <TripData
            image="../assets/6.jpg"
            heading="Trip in France"
            text="Indonesia, officially the Republic of Indonesia is a country in Southeast Assia and Oceannia between the Indian and Pacific oceans. It consists of over 17,000 islands, including Sumatra, Java, Sulawesi, and parts of Borneo and New Guinea"
          />
        </div>
      </div>
    </>
  );
}

export default Trip;
