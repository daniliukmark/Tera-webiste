import { ContactInfoCard } from "src/components/ContactInfoCard";
import { CONTACTS } from "src/assets/data";
import GoogleMapReact from "google-map-react";
import styles from "src/styles/kontaktaiPage.module.css";
import contactImg from "src/assets/contactsPic.webp";
import phoneIcon from "src/assets/phone.svg";
import emailIcon from "src/assets/email.svg";
import pinIcon from "src/assets/location.svg";
import tipIcon from "src/assets/tipIcon.svg";

const iconStyles = {
  width: "20px",
  marginRight: "10px",
};
const ContactCardFields = [
  <>
    <h2>
      <b>{CONTACTS.name}</b>
    </h2>
  </>,
  <>
    <img style={iconStyles} src={phoneIcon} alt="Phone icon" />
    <h3>
      <b>{CONTACTS.phoneNumber}</b>
    </h3>
  </>,
  <>
    <img style={iconStyles} src={emailIcon} alt="Email icon" />
    <h3>
      <b>{CONTACTS.email} </b>
    </h3>
  </>,
];

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
      <div className={styles["content-wrap"]}>
        <div className={styles["contact-cards-wrap"]}>
          <div className={styles["tip-wrap"]}>
            <img className={styles["tip-icon"]} src={tipIcon} alt="tip icon" />
            <span className={styles["tip-text"]}>
              Jei tutite klausimu ar problemu - skambinkite, mes mielai juos
              issperesime.
            </span>
          </div>
          <ContactInfoCard
            personImage={contactImg}
            headerValue={"Direktorius"}
            propertiesFields={ContactCardFields}
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
