// Liste des projets de Sophie Bluel dans un tableau
export let works = [];

export function createWorkThumbnails() {
    
}

// Fonction qui charge les projets et les mets dans le tableau ci-dessus
export function loadWorks () {
    fetch("http://localhost:5678/api/works").then(response => {
        return response.json().then(apiWorks => {
        works = apiWorks

        console.log(works);
        // récuperer les élements sur le Dom
        // crée une boucle pour filtrer les élements 
        
        const filtresBtn = document.querySelectorAll(filtres);
        
        
        
        })
    });
}