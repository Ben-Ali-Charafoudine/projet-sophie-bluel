// Liste des projets de Sophie Bluel dans un tableau
export let works = [];

// 2. Faire en sorte que la fonction createWorkThumbnails ne prennent plus
// directement "works" mais un paramètre avec un tableau de works qu'on lui passe
// Exemple :
// const numbers = []
// export function createNumber (nbs) {...}



export function createWorkThumbnails(filteredWorks) {
    const gallery = document.querySelector(".gallery")
    // Créer toutes les vignettes pour les works

    // Effacer les éléments works qui sont dans .gallery, sans effacer les boutons
    const figures = document.querySelectorAll(".gallery figure");
    figures.forEach(figure => {
        figure.remove();
    })
    
    filteredWorks.forEach(work => {
        //créer un élément article pour chaque produit
        const workElement = document.createElement("figure");
        //créer et ajouter les images
        const imageElement = document.createElement("img");
        imageElement.src = work.imageUrl;
        imageElement.alt = work.title;
        //créer et ajouter les tritres
        const nomElement = document.createElement("figcaption");
        nomElement.innerText = work.title;
        workElement.appendChild(imageElement);
        workElement.appendChild(nomElement);
        
        gallery.appendChild(workElement); 
    });
}

// Fonction qui charge les projets et les mets dans le tableau ci-dessus
export function loadWorks () {
    
    fetch("http://localhost:5678/api/works").then(response => {
        return response.json().then(apiWorks => { 
            works = apiWorks;
          createWorkThumbnails(works);
          console.log(works);
          
          
        })
    });
}