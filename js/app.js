let elForm = document.querySelector(".form");
let elInput = document.querySelector(".form-control");
let elList = document.querySelector(".list");

elForm.addEventListener("submit", function(evt) {
  evt.preventDefault();

let elInputValue = (elInput.value);

  for (foodElement of elInputValue) {
    foodElement = []

    let elItem = document.createElement("li");
      if (elInputValue <= 0) {
      alert("Don't enter a number")
      elList.appendChild();
      } 
      else if (elInputValue >= 0)  {
        alert("Don't enter a number")
        elList.appendChild();
      }
    foodElement.push(elInputValue);
    elInput.value = "";
    elList.appendChild(elItem);
    elItem.textContent = `Your product - ${foodElement}`;
     return (foodElement);

  };
});