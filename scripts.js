// // Visualizar o conteúdo do document
// // console.log(document)

// //Obter title da página
// console.log(document.title)

// const guest = document.getElementById("guest-2")

// console.log(guest)

// //Mostra as propriedades do objeto

// //console.dir(guest)

// const guestsByClass = document.getElementsByClassName("guest")

// console.log(guestsByClass)

// console.log(guestsByClass.item(0))
// console.log(guestsByClass[1])

// const guestByTag = document.getElementsByTagName("li")
// console.log(guestByTag)

// console.log(document.querySelector("#guest-2"))
// console.log(document.querySelectorAll(".guest"))

// const guest2 = document.querySelector("#guest-2 span")

// guest2.textContent = "Maria"

// console.log(guest2.textContent) // Retorna o conteúdo visivel e oculto
// console.log(guest2.innerText) // Retorna só o conteu visivel
// console.log(guest2.innerHTML) // Retorna o HTML


// const input = document.querySelector("#name")

// input.classList.add("input-error")

// input.classList.remove("input-error")

// input.classList.toggle("input-error") // se tiver remove se não tiver adiciona

// const button = document.querySelector("button")

// button.style.backgroundColor = "red"

const guests = document.querySelector("ul")

const newGuest = document.createElement("li")

newGuest.classList.add("guest")

const guestName = document.createElement("span")

guestName.textContent = "Diego"


//append adiciona após o último filho
newGuest.append(guestName)
//prepend adiciona antes
newGuest.prepend(guestName)
//permite apenas receber um valor
newGuest.appendChild(guestName)

console.log(newGuest)

guests.prepend(newGuest)

