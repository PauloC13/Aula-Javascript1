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

// const guests = document.querySelector("ul")

// const newGuest = document.createElement("li")

// newGuest.classList.add("guest")

// const guestName = document.createElement("span")

// guestName.textContent = "Diego"


// //append adiciona após o último filho
// newGuest.append(guestName)
// //prepend adiciona antes
// newGuest.prepend(guestName)
// //permite apenas receber um valor
// newGuest.appendChild(guestName)

// console.log(newGuest)

// guests.prepend(newGuest)

// const input = document.querySelector("input")

// input.setAttribute('disabled', true)

// input.setAttribute('type', 'file')

// input.removeAttribute('id')

window.addEventListener("load", () => {
    console.log("A página foi carregada!")
})

addEventListener("click", (event) => {
    event.preventDefault()

    console.log(event.target.textContent)
})

const ul = document.querySelector("ul")

ul.addEventListener("scroll", (event) => {
    //console.log(ul.scrollTop)

    if(ul.scrollTop > 300){
        console.log("final da lista")

        ul.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }
})

const button = document.querySelector("button")
button.addEventListener("click", (event) => {
    console.log("clicou")
})
