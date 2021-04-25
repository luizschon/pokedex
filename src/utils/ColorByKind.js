export const kindColors = {
  bug: "#7ED578",
  dark: "#5F0047",
  electric: "#FFF34B",
  fairy: "#FF7EE5",
  fighting: "#F17373",
  fire: "#FFB433",
  flying: "#D7F1E9",
  ghost: "#E2E2E2",
  grass: "#5EFF53",
  ground: "#AA8546",
  ice: "#AEE3FB",
  normal: "#D7DBA8",
  poison: "#CE52F9",
  psychic: "#FFC157",
  rock: "#757575",
  steel: "#A1A1A1",
  water: "#7192FF",
  dragon: "#43372D",
};

export const ColorByKind = (kinds, index) => {
  let kind = kinds.split(";").sort()[index];

  if (!kind && index > 0) {
    kind = kinds.split(";")[0];
  }
  return kind;
}