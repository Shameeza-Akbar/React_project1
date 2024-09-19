import { CORE_CONCEPTS, EXAMPLES } from "./data-with-examples.js";
import Head from "./Components/Header";
import CoreConcepts from "./Components/CoreConcepts";
import Btn from "./Components/Button.jsx";
import { useState } from "react";
function App() {
  const [changeVar, stateUpdatingFunction]=useState();
  let concept= <p>Please select a button</p>
  if(changeVar){
    concept= (    <div id="tab-content">
    <h3>
      {EXAMPLES[changeVar].title}
    </h3>
    <p>
      {EXAMPLES[changeVar].description}
    </p>
    <pre>
      <code>
        {EXAMPLES[changeVar].code}
      </code>
    </pre>
  </div>)
  }
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
            {CORE_CONCEPTS.map((items)=>(
            <CoreConcepts key={items.title} {...items}></CoreConcepts>))}
            </ul>
        </section>
        <section id="examples">
          <menu>
            <Btn isSelected={changeVar==="components"} onSelect={()=>clickFun("components")}>Components</Btn>
            <Btn isSelected={changeVar==="jsx"} onSelect={()=>clickFun("jsx")}>JSX</Btn>
            <Btn isSelected={changeVar==="props"} onSelect={()=>clickFun("props")}>Props</Btn>
            <Btn  isSelected={changeVar==="state"} onSelect={()=>clickFun("state")}>State</Btn>
          </menu>
        </section>
    {concept}
      </main>
    </div>
  );
}

export default App;
