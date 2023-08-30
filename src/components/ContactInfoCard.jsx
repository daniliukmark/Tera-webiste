import styles from "src/styles/ContactCard.module.css";
export function ContactInfoCard({
  personImage,
  headerValue,
  propertiesFields,
  size,
}) {
  size === undefined ? (size = "medium") : size;

  const sizes = {
    small: {
      photoSize: {
        height: "100px",
      },
      wrapSize: {
        maxWidth: "420px",
        maxHeight: "160px",
      },
    },
    medium: {
      wrapSize: {
        maxWidth: "500px",
        maxHeight: "200px",
      },
      photoSize: {
        height: "140px",
      },
    },
    large: {
      wrapSize: {
        maxWidth: "650px",
        maxHeight: "250px",
      },
      photoSize: {
        height: "180px",
      },
    },
  };

  return (
    <>
      <div className={styles["wrap"]}>
        <div
          style={sizes[size].wrapSize}
          className={styles["contact-info-card-wrap"]}
        >
          <img
            src={personImage}
            style={sizes[size].photoSize}
            alt={`image of ${headerValue}`}
            className={styles["contact-img"]}
          />
          <div className={styles["contact-info-wrap"]}>
            <h1 className={`${styles["header"]} ${styles[`header-${size}`]}`}>
              {headerValue}
            </h1>
            <ul className={styles["contact-info"]}>
              {propertiesFields != null
                ? propertiesFields.map((propertiesField, i) => (
                    <li className={styles[`contact-field-${size}`]} key={i}>
                      {propertiesField}
                    </li>
                  ))
                : ""}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
