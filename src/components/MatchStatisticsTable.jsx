function MatchStatisticsTable({
  teamAway,
  teamAwayLogo,
  teamHome,
  teamHomeLogo,
  matchStatistics,
  windowWidth,
}) {
  const matchStatisticsList = matchStatistics.map((matchEvent, i) => {
    return (
      <div
        key={i}
        style={{
          position: "relative",
          display: "flex",
          justifyContent: "center",
          width: "100%",
          height: "70px",
          marginBottom: "20px",
        }}
      >
        <div
          style={{
            width: "120px",
            height: "70px",
            background: "black",
            color: "white",
          }}
        >
          <h1
            style={{
              textAlign: "center",
              fontSize: "36px",
              fontFamily: "Cabin",
              margin: "0px",
              height: "100%",
              width: "100%",
              lineHeight: "70px",
            }}
          >
            {matchEvent.minute}'
          </h1>
        </div>
        <div style={{ background: "rgba(0,0,0,0.5)" }}></div>
      </div>
    );
  });
  return (
    <>
      <div
        style={{
          position: "relative",
          boxSizing: "border-box",
          height: "100%",
          borderRadius: "10px",
          display: "flex",
          gap: "35px",
        }}
      >
        <div
          style={{
            flex: "1",
            background: "white",
            borderRight: "solid 3px #f2f2f2",
            borderRadius: "10px",
            position: "relative",
          }}
        >
          <div
            style={{ display: "flex", justifyContent: "start", width: "100%" }}
          >
            <div
              style={{
                display: "flex",
                justifyItems: "start",
                padding: "10px",
                width: "72px",
                height: "72px",
              }}
            >
              <img
                style={{ objectFit: "contain", width: "100%", height: "100%" }}
                src={teamHomeLogo}
                alt="Team Home Logo"
              />
            </div>
            <div
              style={{
                position: "absolute",
                bottom: "0px",
                left: "0px",
                padding: "10px",
              }}
            >
              <h1
                style={{ fontFamily: "Cabin", fontSize: "24px", margin: "0px" }}
              >
                {teamHome.name}
              </h1>
            </div>
          </div>
        </div>
        <div
          style={{
            background: "white",
            position: "relative",
            flex: "1",
            borderLeft: "solid 3px #f2f2f2",
            borderRadius: "10px",
          }}
        >
          <div
            style={{ display: "flex", justifyContent: "end", width: "100%" }}
          >
            <div
              style={{
                padding: "10px",
                width: "72px",
                height: "72px",
              }}
            >
              <img
                style={{ objectFit: "contain", width: "100%", height: "100%" }}
                src={teamAwayLogo}
                alt="Team Away Logo"
              />
            </div>
            <div
              style={{
                position: "absolute",
                bottom: "0px",
                right: "0px",
                padding: "10px",
              }}
            >
              <h1
                style={{ fontFamily: "Cabin", fontSize: "24px", margin: "0px" }}
              >
                {teamAway.name}
              </h1>
            </div>
          </div>
        </div>
        <div
          style={{
            position: "absolute",
            boxSizing: "border-box",
            padding: "90px 50px 60px 50px",
            width: "100%",
            height: "100%",
          }}
        >
          <div
            style={{
              boxSizing: "border-box",
              width: "100%",
              height: "100%",
            }}
          >
            {matchStatisticsList}
          </div>
        </div>
      </div>
    </>
  );
}

export default MatchStatisticsTable;
