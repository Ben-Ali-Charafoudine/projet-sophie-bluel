// les chauses fait et fonctionnable 
// 1- tous les écouteur pour l'ouverture et fermeture des modale fonction
//1.0 cette action et réalisé sur la fonction  acceModal

// les chose qui reste a faires js
// 1-faitte en sorte que le boutton de modifie les modale aparer
//1.0  apparer et dispare au connection et deconnection.
//2 -bien positionner le bouton dans le dive des filtre.
//3-ne pas oublier de rendre le bouton valider fonctionable.

// la dernier phase et de travailler le css et un peut le html 
//en regardent la maquette 
let work=[];
//import { createFilterButtons } from "./scripts/filters";
//import { configurerBoutonDeconnexion } from "./déconnexion";
import { gererAffichageBoutons } from "./conexion";

import { works, createWorkThumbnails, loadWorks } from "./scripts/works";


const modalOne = document.querySelector(".galleryModale");
const openModalBtn = document.querySelector(".btnModifGallery");
const modalTwo = document.querySelector(".modifModale");
const openModalAjouter =document.querySelector(".twomodal")
const modaCloBtnOne = document.getElementById("closeModalOne");
const modaCloBtnTwo = document.getElementById("closeModalTwo");
const mdiOpenModalBtn= document.querySelector(".mdi-square-edit-outline");



export function acceModal(){
  const dialogPicturesContainer = document.querySelector('.contenairGalleryModif');

  //ici ecouteure modale 1  
  //ouverture modale one       
  openModalBtn.addEventListener("click", () => {
    dialogPicturesContainer.innerHTML = "";
    createWorkThumbnails(works, dialogPicturesContainer, false,true)
    modalOne.showModal();
    loadWorks();
  }); 
  mdiOpenModalBtn.addEventListener("click", () =>{
    modalOne.showModal();
  });
  // féremetur modale one
  modaCloBtnOne.addEventListener("click", () => {
    modalOne.close();
    loadWorks();
  }); 
  
  modalOne.addEventListener('click', (e) => {
    if (e.target === modalOne) {
      modalOne.close()
    }
  })
  // ici écouteur modale 2
  openModalAjouter.addEventListener("click",()=>{
    modalTwo.showModal();
  });
  // féremeture modale two
  modaCloBtnTwo.addEventListener("click", () => {
    modalTwo.close();
  }); 
  // ici on rajoute l'élement dans les section filtre
  
}


// export function newGallery(){
//   // netoyer la galerie avant d'ajouté les images
//   // ici ce que on va faire:
//   //1- recuperer la fonction fetch de la gallery qui le works.js
//   loadWorks();
  
//   //2-ajout dynamiquement les image sans leut tire 
//   //créer un élément article pour chaque produit
//   const contenairGalleryModif =document.querySelector(".contenairGalleryModif");
//   const GalleryModf = document.querySelector(".GalleryModf");
//   //créer un élément article pour chaque produit
//   const elementWork = document.createElement("figure");
//   //créer et ajouter les images
//   const elementImage=document.createElement("img");
//   elementImage.src = work.imageUrl;
//   //attaché au parent
//   elementWork.appendChild(elementImage);
//   GalleryModf.appendChild(elementWork);
//   contenairGalleryModif.appendChild(GalleryModf);
  
  
// }
// console.log(newGallery);



