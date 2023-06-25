import "./contact.css";

const Map = () => {
  return (
    <div className="map-content">
      {/* eslint-disable-next-line */}
      <iframe
        width="100%"
        height="450"
        style={{ border: 0 }}
        src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=University of Oxford&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
      ></iframe>
    </div>
  );
};

export default Map;
