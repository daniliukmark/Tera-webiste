export const BASE_URL = "/Tera-website";
export const CONTACTS = {
  email: "email@example.com",
  phoneNumber: "+37067777777",
  location: "Žolyno g., 10210 Vilnius",
};

export const ROUTES = [
  {
    path: `${BASE_URL}/`,
    text: "Pagrindinis",
    isSelected: false,
  },
  {
    path: `${BASE_URL}/klubas`,
    text: "Apie Kluba",
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
    text: "Paremti Komanda",
  },
  {
    path: "/klubas",
    text: "Sekancios Rungtynes",
  },
];
