import { loadWorks, works } from "./scripts/works";
import { createFilterButtons } from "./scripts/filters";

createFilterButtons();

loadWorks();
console.log(works);
