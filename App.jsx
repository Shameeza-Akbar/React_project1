import { CORE_CONCEPTS } from "./data";
import Head from "./Components/Header";
import CoreConcepts from "./Components/CoreConcepts";
import Btn from "./Components/Button.jsx";
import { useState } from "react";
function App() {
  const [changeVar, stateUpdatingFunction]=useState("Please Select a button");
  function clickFun(btnSelect){
    stateUpdatingFunction(btnSelect);
}
  return (
    <div>
      <Head></Head>
      <main>
      <h2>Core Concepts</h2>
        <section id="core-concepts">
          <ul>
            <CoreConcepts {...CORE_CONCEPTS[0]}></CoreConcepts>
            <CoreConcepts {...CORE_CONCEPTS[1]}></CoreConcepts>
            <CoreConcepts {...CORE_CONCEPTS[2]}></CoreConcepts>
            <CoreConcepts {...CORE_CONCEPTS[3]}></CoreConcepts>
          </ul>
        </section>
        <section id="examples">
          <menu>
            <Btn onSelect={()=>clickFun("Comp")}>Components</Btn>
            <Btn onSelect={()=>clickFun("jsx")}>JSX</Btn>
            <Btn onSelect={()=>clickFun("prop")}>Props</Btn>
            <Btn onSelect={()=>clickFun("state")}>State</Btn>
          </menu>
        </section>
        {changeVar}
      </main>
    </div>
  );
}

export default App;
