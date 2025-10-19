import CoreConcept from "./components/CoreConcept/CoreConcept";
import Section from "../Section/Section";
import { CORE_CONCEPTS } from "../../utils/data";

function CoreConcepts() {
  return (
    <Section id="core-concepts" title="Core Concepts">
      <ul>
        {CORE_CONCEPTS.map((conceptItem) => (
          <CoreConcept {...conceptItem} key={conceptItem.title} />
        ))}
      </ul>
    </Section>
  );
}

export default CoreConcepts;
