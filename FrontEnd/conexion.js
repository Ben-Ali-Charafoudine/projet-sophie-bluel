document.addEventListener("DOMContentLoaded", () => {
    gererAffichageBoutons(); // Vérifie le token et ajuste les boutons
    
});

// Fonction pour gérer l'affichage des boutons
export function gererAffichageBoutons() {
    const boutonLogin = document.querySelector(".loging");
    const boutonLogout = document.querySelector(".logout");
    const contenairOpenModal = document.querySelector(".titletwo");
    const filtresContainer = document.querySelector(".filters");

    if (localStorage.getItem("token")) {
        console.log("Token trouvé, utilisateur connecté !");
        boutonLogin.style.display = "none";
        boutonLogout.style.display = "block";
        contenairOpenModal.style.display = "flex";
        filtresContainer.style.display = "none";
        
    } else {
        console.log("Aucun token, utilisateur non connecté.");
        boutonLogin.style.display = "block";
        boutonLogout.style.display = "none";
        contenairOpenModal.style.display = "none";
        filtresContainer.style.display = "flex";
        
       
        
    }
    
  
}
