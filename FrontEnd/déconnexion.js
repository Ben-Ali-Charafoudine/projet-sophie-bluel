import { gererAffichageBoutons } from "./conexion.js";
document.addEventListener("DOMContentLoaded", () => {
    configurerBoutonDeconnexion(); // Ajoute l'écouteur pour la déconnexion
});
// Fonction pour configurer le bouton logout
export function configurerBoutonDeconnexion() {
    const boutonLogout = document.querySelector(".logout");
    

    boutonLogout.addEventListener("click", () => {
        localStorage.removeItem("token"); // Supprime le token
        console.log("Utilisateur déconnecté.");
        gererAffichageBoutons(); // Réinitialise les boutons
    });
}