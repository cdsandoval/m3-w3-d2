let first = document.getElementById("data");
let second = document.getElementById("saved");

fetching = (value, dom_element) => {
  fetch(`https://jsonplaceholder.typicode.com/todos/${value}`)
    .then(response => response.json())
    .then(json => {
      dom_element.innerHTML = JSON.stringify(json);
      localStorage.setItem("data", JSON.stringify(json));
    });
};

if (typeof localStorage.getItem("data") == "object") {
  fetching(1, first);
} else {
  first.innerHTML = localStorage.getItem("data");
  fetching(2, second);
}
