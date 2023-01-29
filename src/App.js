import "./styles.css";
// import Pagination from "./Pagination";

// RollDice
import RollDice from "./Components/RollDice/RollDice";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
library.add(fas);

export default function App() {
  return <RollDice />;
  // <Pagination />;
}
