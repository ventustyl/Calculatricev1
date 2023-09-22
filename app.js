// DOM
const touches = [...document.querySelectorAll(".bouton")];
const listeKeycode = touches.map((touche) => touche.dataset.key);
const ecran = document.querySelector(".ecran");

// Utiliser une fonction distincte pour gérer les événements de clavier
document.addEventListener("keydown", (e) => {
  const valeur = e.key.toString();
  calculer(valeur);
});

document.addEventListener("click", (e) => {
  const valeur = e.target.dataset.key;
  calculer(valeur);
});

const calculer = (valeur) => {
  if (listeKeycode.includes(valeur)) {
    switch (valeur) {
      case "8":
        ecran.textContent = "";
        break;
      case "13":
        const calcul = eval(ecran.textContent);
        ecran.textContent = calcul;
        break;
      default:
        const indexKeycode = listeKeycode.indexOf(valeur);
        const touche = touches[indexKeycode];
        ecran.textContent += touche.textContent;
    }
  }
};

// Utilisez un gestionnaire d'erreurs global pour attraper toutes les erreurs
window.addEventListener("error", (e) => {
  alert("Une erreur est survenue dans votre calcul : " + e.message);
});
