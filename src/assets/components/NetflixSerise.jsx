import seriseData from "../../api/seriseData.json";

import { SeriseCard } from "./SeriseCard";

const NetflixSerise = () => {//Componet using Dynamic variables

  return (
    <ul className="grid grid-three-cols">

      {seriseData.map((curElem) => (
        <SeriseCard key = {curElem.id} data = {curElem} /> //props
      ))}
        
    </ul>
  );
};

//anyone can import and asses and use using different name 
export default NetflixSerise;

