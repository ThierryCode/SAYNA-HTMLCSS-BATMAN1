// const AllitemNav = document.querySelectorAll(".itemNav");
// const link = document.querySelectorAll(".itemNav");
// link.forEach((item) => {
//   item.addEventListener("click", () => {
//     link.classList.add("active");
//   });
// });
// const AllitemNav = document.querySelectorAll(".itemNav");
// const link = document.querySelectorAll(".itemNav");
// link.forEach((item) => {
//   item.addEventListener("click", () => {
//     item.classList.toggle("active");
//   });
// });
const allItemNav = document.querySelectorAll(".itemNav");
allItemNav.forEach((item) => {
  item.addEventListener("click", () => {
    // Supprimer la classe active de tous les éléments
    allItemNav.forEach((item) => {
      item.classList.remove("active");
    });
    // Ajouter la classe active uniquement à l'élément cliqué
    item.classList.add("active");
  });
});
