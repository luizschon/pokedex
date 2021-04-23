const ColorByType = (kind) => {
    if(kind.includes(";")){
      kind = kind.split(";")[0]
    }
    if (kind === "bug"){
      return "#7ED578";
    }if (kind === "electric"){
      return "#FFF34B";
    }if (kind === "fairy"){
      return "#FF7EE5";
    }if (kind === "fighting"){
      return "#F17373";
    }if (kind === "fire"){
      return "#FFB433";
    }if (kind === "flying"){
      return "#D7F1E9";
    }if (kind === "ghost"){
      return "#E2E2E2";
    }if (kind === "grass"){
      return "#5EFF53";
    }if (kind === "ground"){
      return "#AA8546";
    }if (kind === "ice"){
      return "#AEE3FB";
    }if (kind === "normal"){
      return "#D7DBA8";
    }if (kind === "poison"){
      return "#CE52F9";
    }if (kind === "psychic"){
      return "#FFC157";
    }if (kind === "rock"){
      return "#757575";
    }if (kind === "steel"){
      return "#A1A1A1";
    }if (kind === "water"){
      return "#7192FF";
    }if (kind === "dragon"){
      return "#43372D";
    }
}

export default ColorByType;