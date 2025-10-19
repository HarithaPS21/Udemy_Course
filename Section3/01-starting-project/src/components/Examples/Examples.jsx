import { useState } from "react";
import TabButton from "./components/TabButton/TabButton";
import Section from "../Section/Section";
import Tabs from "../Tabs";
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
    <Section id="examples" title="Examples">
      <Tabs
        buttonsContainer="menu"
        buttons={
          <>
            <TabButton
              isSelected={selectedTopic === "components"}
              onClick={() => handleSelect("components")}
            >
              Components
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "jsx"}
              onClick={() => handleSelect("jsx")}
            >
              JSX
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "props"}
              onClick={() => handleSelect("props")}
            >
              Props
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "state"}
              onClick={() => handleSelect("state")}
            >
              State
            </TabButton>
          </>
        }
      >
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
      </Tabs>
    </Section>
  );
}

export default Examples;
