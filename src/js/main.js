let search = document.getElementById("search");
let form = document.getElementById("form");
input.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      event.preventDefault(); // prevent default behavior
      form.submit(); // submit the form
    }
  });