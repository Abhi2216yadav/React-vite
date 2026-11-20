
// import NetflixSerise from "./assets/components/NetflixSerise";
// import { Profile } from "./assets/components/Profile";
import "./assets/components/Netflix.css";

import "./assets/components/EventPropagation";
import "./assets/components/EventHandling";
// import { EventHandling } from "./assets/components/EventHandling";
import "./assets/components/EventProps";
// import { EventProps } from "./assets/components/EventProps";
// import { EventPropagation } from "./assets/components/EventPropagation";

// import { State } from "./assets/components/hooks/State";
import { DericedState  } from "./assets/components/DericedState";
export const App = () => { 
  
  return  (
    <section className="container">
      {/* //using inline tailwindcss  */}
    {/* //   <h1 className = "text-blue-600/100 dark:text-sky-400/100 text text-center pb-5">  */}
    {/* //   List of best Netflix Serise</h1>  */}
     {/* <Profile /> */}
    {/* // <NetflixSerise />  */}
    {/* <State/>
    <Sibling/> */}
    <DericedState />
    </section>
    // <EventHandling/>
    // <EventProps/>
    // <EventPropagation/>
   
  );

};

export function Sibling() {
  console.log("Sibling Component rendered");
  return (
    <div className="main-div">
      <h2> Sibling Component</h2>
    </div>
  )
}

