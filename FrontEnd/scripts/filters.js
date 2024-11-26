import { works, createWorkThumbnails } from './works.js';
// Fonction qui va créer les filtres pour les projets sur la page d'accueil
export let categories = [];

export function createFilterButtons() {
    // Sélectionner l'élément contenant les filtres
    const filtresContainer = document.querySelector(".filters");
        
    // Créer le bouton "Tous"
    const bouton = document.createElement("button");
    bouton.classList.add('filter-btn');
    bouton.innerText = "Tous";
    filtresContainer.appendChild(bouton);

    bouton.addEventListener('click', () => {
        createWorkThumbnails(works); 
        console.log('Bouton tous');
    })

    // Créer un bouton pour chaque catégorie
    categories.forEach(categorie => {
        const bouton = document.createElement('button'); // Crée un élément bouton
        bouton.classList.add('filter-btn'); // Ajoute la classe CSS
        bouton.innerText = categorie.name; // Utilise la propriété 'name' de chaque catégorie

        bouton.addEventListener('click', () => {
            // 1. Filtrer le tableau works avec l'id de la category
            // Utiliser la fonction filter sur le tableau works
            // dans filter faire en sorte d'avoir une condition qui renvoie true ou false
            // exemple : numbers.filter(number => number > 40)
            // Condition => dans le filter doit garder uniquement les works qui ont le categoryId identique au categorie.id du bouton qu'on vient de cliquer
            const filteredWorks = works.filter(work => work.categoryId === categorie.id);
             // Appeler la fonction pour afficher uniquement les projets filtrés
            createWorkThumbnails(filteredWorks);
            console.log(filteredWorks);
        })

        // Attacher les boutons au conteneur de filtres
        filtresContainer.appendChild(bouton);
    });

}

// Charger les catégories
export function loadCategories() {
    fetch("http://localhost:5678/api/categories").then(response => {
        return response.json().then(apiCategories => {
            categories = apiCategories; // Met à jour le tableau des catégories
            createFilterButtons();
        });
    })
}