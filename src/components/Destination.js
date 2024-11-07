import React from 'react';
import './Destination.css';
function Destination() {
  return (
    <>
      <div className="destination">
        <h1>Popular Destination</h1>
        <p>Tours give you the opportunity to see a within time frame </p>
      </div>
      <div className="first-desc">
        <div className="desc-text">
          <h2>Tall Valcano, Batangas</h2>
          <p>
            One of the most iconic views in Luzon,MT. Taal boasts a volcano
            inside a take an island. If you fancy a closer look, the hike up to
            the crater is a mere 45 minutes and is easy engoush gor beginners.
            Guide will assists you most of the way, and you'll see the pecullar
            environment found on an active volcano, including volcano rocks and
            steam vents. The hike can be dusty and host, so plan for an early
            morning trip and them unwind with some bulalo before heading back
            home.
          </p>
        </div>
        <div className="image">
          <img src="../assets/1.jpg" alt="errr" />
          <img src="../assets/2.jpg" alt="errr" />
        </div>
      </div>
      <div className="first-desc-reverse">
        <div className="desc-text">
          <h2>Mt. Daguldul, Batangas</h2>
          <p>
            One of the most iconic views in Luzon,MT. Taal boasts a volcano
            inside a take an island. If you fancy a closer look, the hike up to
            the crater is a mere 45 minutes and is easy engoush gor beginners.
            Guide will assists you most of the way, and you'll see the pecullar
            environment found on an active volcano, including volcano rocks and
            steam vents. The hike can be dusty and host, so plan for an early
            morning trip and them unwind with some bulalo before heading back
            home.
          </p>
        </div>
        <div className="image">
          <img src="../assets/4.jpg" alt="errr" />
          <img src="../assets/5.jpg" alt="errr" />
        </div>
      </div>
    </>
  );
}

export default Destination;
