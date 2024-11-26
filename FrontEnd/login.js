
//1-Ajoutez un écouteur d'événement  sur le formulaire pour détecter lorsqu'il est envoyé.
const formulaire = document.getElementById("loginForm");
formulaire.addEventListener("submit", (event) => {
    // Supprime le comportement par défaut de l'event écouté.
    // Ici c'est un SubmitEvent => comportement par défaut = envoyer le formulaire en rechargeant la page
    // En supprimant le comportement par défaut, plus de rechargement de la page
    event.preventDefault();
    console.log(formulaire);

    loadLogin();
});
function donneesConnexion() {
    //2. Récupérer les donées
    const userEmail = document.getElementById("email").value;
    const userPassword = document.getElementById("password").value;
    console.log(userEmail);
    console.log(userPassword);


    //3. Les transformer en JSON
    return JSON.stringify({
        email: userEmail,
        password: userPassword,
    });
};
console.log(donneesConnexion);

// Fonction pour vérifier si un token existe et ajuster l'interface
export function gererAffichageBoutons() {
    const boutonLogin = document.querySelector(".loging"); // Bouton login
    const boutonLogout = document.querySelector(".logout"); // Bouton logout

  
  
    // Vérifie si le token est dans le localStorage
    if (localStorage.getItem("token")) {
      // Si un token existe, afficher logout et cacher login
      console.log("Token trouvé, utilisateur connecté !");
      boutonLogin.style.display = "none";
      boutonLogout.style.display = "block";
    } else {
      // Sinon, afficher login et cacher logout
      console.log("Aucun token, utilisateur non connecté.");
      boutonLogin.style.display = "block";
      boutonLogout.style.display = "none";
    }
  }
  console.log(gererAffichageBoutons);
  
  // Appeler la fonction au chargement de la page
 document.addEventListener("DOMContentLoaded",gererAffichageBoutons);
  
  // Fonction de déconnexion
 export function deconnexion() {
    // Supprimer le token du localStorage
    localStorage.removeItem("token");
    console.log("Utilisateur déconnecté.");
    // Réajuster les boutons après déconnexion
    
   
// Ajouter un écouteur d'événement sur le bouton logout
document.addEventListener("DOMContentLoaded", () => {
    const boutonLogout = document.querySelector(".logout");
    if (boutonLogout) {
        boutonLogout.addEventListener("click", deconnexion);
    }
});
 }
console.log(deconnexion);

// appeler la fonction avec fetch
 function loadLogin() {
    fetch("http://localhost:5678/api/users/login", {
        // Ecrire des choses ici pour envoyer les données
        //4. Les envoyer avec fetch au server
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: donneesConnexion()
        
    }).then(async (response) => {
        
        const donnees = await response.json();
        

        if (response.ok) {
            //5.1 si les données sont OK =>
            //5.1.1 enregistrer le token dans le localStorage
            const token = donnees.token
            localStorage.setItem('token', token);
            //5.1.2 redirection vers la page d'accueil
            // windows.location <= pour la redirection
            console.log("utilisateur connecte");

            window.location.href = 'index.html';
               
        } else {
            const eurreurMessage = document.querySelector(".error-conteneur");
            if (eurreurMessage) {
                eurreurMessage.textContent = "Identifiants incorrects. Vérifiez votre email ou votre mot de passe.";
                eurreurMessage.style.display = "block"; // Rendre le message visible
            };
        } 
     
    });
   
}

