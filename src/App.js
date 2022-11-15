import { AxiosError } from "axios";
import { ThematicVaultCardRootRoot1 } from "./ThematicVaultCardRootRoot1";


//props
const name = "Kelp Thematic Vault";
const price = "18.1";
const aer = "111222333";
const sdgs = []; //list of images
const region = "Africa";
const numProjects = "6";
const walletBalance = "100";
const rating = "AAA";

export default function App() {
  document.body.style.backgroundColor = "#e5e5e5";
  document.body.style.margin = "0";
  return <ThematicVaultCardRootRoot1 
  name={name} price={price} aer={aer} sdgs={sdgs} region={region} numProjects={numProjects} walletBalance={walletBalance} rating={rating} />;
}
