import { useState } from "react";
import Header from "./components/Header/Header.jsx";
import CoreConcept from "./components/CoreConcept/CoreConcept.jsx";
import TabButton from "./components/TabButton/TabButton.jsx";
import { CORE_CONCEPTS, EXAMPLES } from "./utils/data.js";

function App() {
  let tabContent = "Please click on a button";
  
  const [selectedTabContent, setSelectedTabContent] = useState(
    EXAMPLES["components"]
  );
  const handleSelect = (selectedButton) => {
    console.log(selectedButton);
    // tabContent variable updation will not trigger a rerender of the component.
    tabContent = selectedButton;
    // Hence replace it with a state variable, selectedTabContent
    setSelectedTabContent(EXAMPLES[selectedButton]);
    console.log(selectedTabContent); // will not see the latest value here, because the state updation is only scheduled by React.
  };
  console.log(selectedTabContent); // here, we will get the latest value

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcept
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
              img={CORE_CONCEPTS[0].img}
            />
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} />
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton onSelect={() => handleSelect("components")}>
              Components
            </TabButton>
            <TabButton onSelect={() => handleSelect("jsx")}>JSX</TabButton>
            <TabButton onSelect={() => handleSelect("props")}>Props</TabButton>
            <TabButton onSelect={() => handleSelect("state")}>State</TabButton>
          </menu>
          <div className="tab-content">
            {/* {tabContent} */}
            <h3>{selectedTabContent.title}</h3>
            <p>{selectedTabContent.description}</p>
            <pre>
              <code>{selectedTabContent.code}</code>
            </pre>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
