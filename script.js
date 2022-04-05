function saveExcel(event){
  event.preventDefault();

  let name = document.getElementById("name").value;
  console.log(name)

  let email = document.getElementById("email").value;
  console.log(email)

  let url = "https://script.google.com/macros/s/AKfycbwJScFseAiwEOGUbDnN8AaqWHCiA7gmhjOey1l_xP0RcxujUB6x/exec?"
  
  console.log("Entrou");
  fetch(url + new URLSearchParams({
    name: name.value,
    email
  }), {method: 'GET'})
    .then(response => {
        response.json()
            .then(data => {
                console.log(data)
            })
    })
}