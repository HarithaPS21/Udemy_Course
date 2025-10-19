import { useState } from "react";
import TabButton from "./components/TabButton/TabButton";
import { EXAMPLES } from "../../utils/data";
import "./Examples.css";

function Examples() {
  let tabContent = "Please click on a button";

  const [selectedTopic, setSelectedTopic] = useState("");
  const [selectedTabContent, setSelectedTabContent] = useState("");

  const handleSelect = (selectedButton) => {
    console.log(selectedButton);
    // tabContent variable updation will not trigger a rerender of the component.
    tabContent = selectedButton;
    // Hence replace it with a state variable, selectedTopic
    setSelectedTopic(selectedButton);
    setSelectedTabContent(EXAMPLES[selectedButton]);
    console.log(selectedTabContent); // will not see the latest value here, because the state updation is only scheduled by React.
  };
  console.log(selectedTabContent); // here, we will get the latest value

  return (
    <section id="examples">
      <h2>Examples</h2>
      <menu>
        <TabButton
          isSelected={selectedTopic === "components"}
          onSelect={() => handleSelect("components")}
        >
          Components
        </TabButton>
        <TabButton
          isSelected={selectedTopic === "jsx"}
          onSelect={() => handleSelect("jsx")}
        >
          JSX
        </TabButton>
        <TabButton
          isSelected={selectedTopic === "props"}
          onSelect={() => handleSelect("props")}
        >
          Props
        </TabButton>
        <TabButton
          isSelected={selectedTopic === "state"}
          onSelect={() => handleSelect("state")}
        >
          State
        </TabButton>
      </menu>
      {!selectedTopic && <p>Please select a topic.</p>}
      {selectedTopic && (
        <div className="tab-content">
          {/* {tabContent} */}
          <h3>{selectedTabContent.title}</h3>
          <p>{selectedTabContent.description}</p>
          <pre>
            <code>{selectedTabContent.code}</code>
          </pre>
        </div>
      )}
    </section>
  );
}

export default Examples;
