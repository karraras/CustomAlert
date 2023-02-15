let click = document.querySelector(".click");
let parent = document.querySelector(".parent");
let one = document.querySelector(".one");
let two = document.querySelector(".two");
click.addEventListener("click", (ele) => {
  ele.currentTarget.classList.add("hide");
  parent.classList.add("show");
});

one.addEventListener("click", (e) => {
  parent.classList.remove("show");
  click.classList.remove("hide");
});

two.addEventListener("click", (el) => {
  alert("Your Account Deleted Successfully");
});
