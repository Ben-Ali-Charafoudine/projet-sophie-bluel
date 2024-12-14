import { loadWorks, works, createWorkThumbnails, } from "./scripts/works.js"; 
import { loadCategories, createFilterButtons, categories } from "./scripts/filters.js";
import { gererAffichageBoutons } from "./conexion.js";
import { configurerBoutonDeconnexion } from "./déconnexion.js";
import { acceModal, } from "./modal.js";

loadWorks();
loadCategories();
gererAffichageBoutons();
configurerBoutonDeconnexion();

// Modal
acceModal();

