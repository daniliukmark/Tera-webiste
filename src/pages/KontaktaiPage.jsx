import { ContactInfoCard } from "src/components/ContactInfoCard";
import { CONTACTS } from "src/assets/data";
import GoogleMapReact from "google-map-react";
import styles from "src/styles/kontaktaiPage.module.css";
import contactImg from "src/assets/contactsPic.webp";

export function KontaktaiPage() {
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627,
    },
    zoom: 11,
  };
  return (
    <>
      <h1 className={styles["header"]}>Kontaktai</h1>
      <div className={styles["content-wrap"]}>
        <div className={styles["contact-cards-wrap"]}>
          <ContactInfoCard
            contactImg={contactImg}
            statusInClub={CONTACTS.statusInClub}
            name={CONTACTS.name}
            email={CONTACTS.email}
            phoneNumber={CONTACTS.phoneNumber}
          />
        </div>
        <div className={styles["map"]}>
          <GoogleMapReact
            bootstrapURLKeys={{ key: "" }}
            defaultCenter={defaultProps.center}
            defaultZoom={defaultProps.zoom}
          ></GoogleMapReact>
        </div>
      </div>
    </>
  );
}
