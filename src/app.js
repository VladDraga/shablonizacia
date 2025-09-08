import move from "./move.json";
import tamplate from "./move-tamplate.hbs";
const moveList = document.querySelector(".move-list");
moveList.innerHTML = tamplate({ move });
