import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { NextMatchday } from "src/components/NextMatchday";
import { LeagueTable } from "src/components/LeagueTable";
import GoogleMapReact from "google-map-react";
import pinIcon from "src/assets/location.svg";
import MatchStatisticsTable from "../components/MatchStatisticsTable";
import teamHomeLogo from "src/assets/logo.png";
import teamAwayLogo from "src/assets/teamPlaceholder.png";

export function RungtyniuDetalesPage() {
  const params = useParams();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const mockMatchDetails = {
    location: "Širvintų stadionas",
    date: "2023-04-15",
    time: "15:00",
    result: "2 - 1",
    teamAway: {
      id: "1234567890",
      name: "FK Širvintai",
      logo: "",
    },
    teamHome: {
      id: "0987654321",
      name: "FK Tera",
      logo: "",
    },
    matchStatistics: [
      {
        teamId: "1234567890",
        minute: "12",
        playerName: "Donat",
        action: "goal",
      },
      {
        teamId: "0987654321",
        minute: "45",
        playerName: "Slava",
        action: "penalty",
      },
    ],
  };
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
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <>
      <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
        <div
          style={{
            width: "100%",
            ...(windowWidth <= 1000 && { maxWidth: "800px" }),
            ...(windowWidth > 1000 &&
              windowWidth <= 1200 && { maxWidth: "900px" }),
            ...(windowWidth > 1200 &&
              windowWidth <= 1400 && { maxWidth: "1100px" }),
            ...(windowWidth > 1400 && { maxWidth: "1300px" }),
          }}
        >
          <section
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
              gap: "30px",
              marginBottom: "30px",
            }}
          >
            <NextMatchday isMainPage={false} />
            <LeagueTable />
          </section>
          <section
            style={{
              display: "flex",
              justifyContent: "space-between",
              ...(windowWidth > 800 && {
                height: "600px",
                gap: "30px",
                marginBottom: "30px",
              }),
              ...(windowWidth <= 800 && {
                flexDirection: "column",
                height: "800px",
                gap: "0px",
                marginBottom: "0px",
              }),
              width: "100%",
            }}
          >
            <div
              style={{
                height: "100%",
                flex: "3",
                marginBottom: "30px",
                borderRadius: "10px",
                overflow: "hidden",
              }}
            >
              <MatchStatisticsTable
                matchStatistics={mockMatchDetails.matchStatistics}
                teamAway={mockMatchDetails.teamAway}
                teamHome={mockMatchDetails.teamHome}
                teamAwayLogo={teamAwayLogo}
                teamHomeLogo={teamHomeLogo}
                windowWidth={windowWidth}
              />
            </div>
            <div
              style={{
                height: "100%",
                flex: "2",
                ...(windowWidth <= 800 && {
                  borderTopLeftRadius: "10px",
                  borderTopRightadius: "10px",
                  borderBottomLeftRadius: "0px",
                  borderBottomRightadius: "0px",
                }),
                ...(windowWidth > 800 && { borderRadius: "10px" }),
                overflow: "hidden",
              }}
            >
              <GoogleMapReact
                bootstrapURLKeys={{ key: "" }}
                yesIWantToUseGoogleMapApiInternals
                defaultCenter={defaultProps.center}
                defaultZoom={defaultProps.zoom}
              >
                <AnyReactComponent lat={54.709186} lng={25.32505} />
              </GoogleMapReact>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
