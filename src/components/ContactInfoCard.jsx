import styles from "src/styles/ContactCard.module.css";
import phoneIcon from "src/assets/phone.svg";
import emailIcon from "src/assets/email.svg";

export function ContactInfoCard({
  contactImg,
  statusInClub,
  name,
  email,
  phoneNumber,
}) {
  return (
    <>
      <div className={styles["contact-info-card-wrap"]}>
        <img
          src={contactImg}
          alt="image of owner of the contact information"
          className={styles["contact-img"]}
        />
        <div className={styles["contact-info-wrap"]}>
          <ul className={styles["contact-info"]}>
            <li>
              <h1>
                <b>{statusInClub}</b>
              </h1>
            </li>
            <li>
              <h2>
                <b>{name}</b>
              </h2>
            </li>
            <li>
              <img
                className={styles["icon"]}
                src={phoneIcon}
                alt="Phone icon"
              />
              <h3>
                Tel. Numeris: <b>{phoneNumber}</b>
              </h3>
            </li>
            <li>
              <img
                className={styles["icon"]}
                src={emailIcon}
                alt="Email icon"
              />
              <h3>
                Email: <b>{email} </b>
              </h3>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
