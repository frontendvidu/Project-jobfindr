import styles from "./Map.module.css";
const MapJob = () => {
  return (
    <div className={styles.mapJobOuter}>
      <iframe
        className={styles.iframeStyles}
        src="https://maps.google.com/maps?width=1296px&amp;height=419px&amp;hl=en&amp;q=Sheikh%20Zayed%20Rd%20-%20Dubai%20Marina%20-%20Dubai%20-%20United%20Arab%20Emirates+(jobfindr)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
      >
        <a href="https://www.gps.ie/">gps vehicle tracker</a>
      </iframe>
    </div>
  );
};

export default MapJob;
