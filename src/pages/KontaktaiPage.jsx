import { ContactInfoCard } from "src/components/ContactInfoCard";
import { CONTACTS } from "src/assets/data";
import GoogleMapReact from "google-map-react";
import styles from "src/styles/kontaktaiPage.module.css";
import contactImg from "src/assets/contactsPic.webp";
import pinIcon from "src/assets/location.svg";
export function KontaktaiPage() {
  const defaultProps = {
    center: {
      lat: 54.709186,
      lng: 25.325053,
    },
    zoom: 14,
  };
  const AnyReactComponent = () => (
    <img src={pinIcon} style={{ filter: "invert(100%)", height: "40px" }} />
  );
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

        <div className={styles["map-background"]}>
          <div className={styles["map-wrap"]}>
            <GoogleMapReact
              className={styles["map"]}
              bootstrapURLKeys={{ key: "" }}
              yesIWantToUseGoogleMapApiInternals
              defaultCenter={defaultProps.center}
              defaultZoom={defaultProps.zoom}
            >
              <AnyReactComponent lat={54.709186} lng={25.32505} />
            </GoogleMapReact>
          </div>
        </div>
      </div>
    </>
  );
}
