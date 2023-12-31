export const BASE_URL = "";
export const CONTACTS = {
  name: "Sergejus Vasilievas",
  statusInClub: "Direktorius",
  email: "tera.vilnius@gmail.com",
  phoneNumber: "+37068710033",
  location: "Žolyno g., 10210 Vilnius",
};

export const ROUTES = [
  {
    path: `${BASE_URL}/`,
    text: "Pagrindinis",
    isSelected: false,
  },

  {
    path: `${BASE_URL}/parama`,
    text: "1.2% Parama",
    isSelected: false,
  },
  {
    path: `${BASE_URL}/komanda`,
    text: "Komanda",
    isSelected: false,
  },
  {
    path: `${BASE_URL}/kontaktai`,
    text: "Kontaktai",
    isSelected: false,
  },
];

export const CALLS_FOR_ACTIONS = [
  {
    path: "/",
    componentId: "promo",
    text: "Paremti Komanda",
  },
  {
    path: "/",
    componentId: "next-match",
    text: "Sekančios Rungtynės",
  },
];

export const STANDINGS = [
  {
    Place: "1",
    Team: "FK Granitas",
    Matches: "9",
    Wins: "7",
    Draws: "0",
    Losses: "2",
    GoalsFor: "23",
    GoalsAgainst: "4",
    GoalDifference: "+19",
    Points: "21",
  },
  {
    Place: "2",
    Team: "Širvintos-VGTU-Vilkai",
    Matches: "10",
    Wins: "7",
    Draws: "0",
    Losses: "3",
    GoalsFor: "23",
    GoalsAgainst: "13",
    GoalDifference: "+10",
    Points: "21",
  },
  {
    Place: "3",
    Team: "FK Medžiai",
    Matches: "10",
    Wins: "6",
    Draws: "2",
    Losses: "2",
    GoalsFor: "37",
    GoalsAgainst: "16",
    GoalDifference: "+21",
    Points: "20",
  },
  {
    Place: "4",
    Team: "FK Tera",
    Matches: "10",
    Wins: "6",
    Draws: "1",
    Losses: "3",
    GoalsFor: "26",
    GoalsAgainst: "16",
    GoalDifference: "+10",
    Points: "19",
  },
  {
    Place: "5",
    Team: "Ataka",
    Matches: "9",
    Wins: "5",
    Draws: "2",
    Losses: "2",
    GoalsFor: "25",
    GoalsAgainst: "18",
    GoalDifference: "+7",
    Points: "17",
  },
  {
    Place: "6",
    Team: "ESFA-Versmė",
    Matches: "10",
    Wins: "5",
    Draws: "0",
    Losses: "5",
    GoalsFor: "22",
    GoalsAgainst: "26",
    GoalDifference: "-4",
    Points: "15",
  },
  {
    Place: "7",
    Team: "FK Navigatoriai",
    Matches: "10",
    Wins: "4",
    Draws: "0",
    Losses: "6",
    GoalsFor: "28",
    GoalsAgainst: "23",
    GoalDifference: "+5",
    Points: "12",
  },
  {
    Place: "8",
    Team: "FC Vova",
    Matches: "9",
    Wins: "3",
    Draws: "1",
    Losses: "5",
    GoalsFor: "14",
    GoalsAgainst: "22",
    GoalDifference: "-8",
    Points: "10",
  },
  {
    Place: "9",
    Team: "AFK",
    Matches: "9",
    Wins: "2",
    Draws: "4",
    Losses: "3",
    GoalsFor: "11",
    GoalsAgainst: "17",
    GoalDifference: "-6",
    Points: "10",
  },
  {
    Place: "10",
    Team: "VJFK Trakai",
    Matches: "9",
    Wins: "2",
    Draws: "0",
    Losses: "7",
    GoalsFor: "11",
    GoalsAgainst: "25",
    GoalDifference: "-14",
    Points: "6",
  },
  {
    Place: "11",
    Team: "FK Geležinis Vilkas",
    Matches: "9",
    Wins: "0",
    Draws: "0",
    Losses: "9",
    GoalsFor: "13",
    GoalsAgainst: "53",
    GoalDifference: "-40",
    Points: "0",
  },
];
