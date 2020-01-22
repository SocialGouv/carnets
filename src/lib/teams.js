let teams = [
  "Archifiltre",
  "Code du travail numérique",
  "DomiFa",
  "e-MJPM",
  "EgaPro",
  "FCE",
  "Maraudes",
  "MedLé",
  "Ops",
  "Pass Préservatif / Tumeplay",
  "RAMSES",
  "Siao Data",
  "TextStyle",
  "Work In France"
];

export const sanitize = name =>
  name
    .replace(/[éè]/g, "e")
    .replace(/[\s/;:,!?#]/g, "-")
    .toLowerCase();

teams = teams.reduce((teams, team) => {
  teams.push({
    name: team,
    id: sanitize(team)
  });
  return teams;
}, []);

teams.getById = id => teams.find(item => item.id === id);

export default teams;
