import CoreConcept from "./components/CoreConcept/CoreConcept";
import { CORE_CONCEPTS } from "../../utils/data";

function CoreConcepts() {
  return (
    <section id="core-concepts">
      <h2>Core Concepts</h2>
      <ul>
        {CORE_CONCEPTS.map((conceptItem) => (
          <CoreConcept {...conceptItem} key={conceptItem.title} />
        ))}
      </ul>
    </section>
  );
}

export default CoreConcepts;
