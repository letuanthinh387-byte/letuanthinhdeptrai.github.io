
onload = () => {
  document.body.classList.remove("not-loaded");
  const flowersContainer = document.querySelector(".flowers");
  setTimeout(() => {
    flowersContainer.classList.add("show-flower");
  }, 35000);
};

  