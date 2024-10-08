let head = document.querySelector('h1')
let auther = document.querySelector('p')
let button = document.querySelector('button')

const clickNew = async () => { 
    let api = await fetch('http://quotable.io/random')
    let data = await api.json()

    console.log(data)
    head.textContent = data.content
    auther.textContent = data.author  
}
clickNew();
button.addEventListener('click', clickNew)

// setInterval(() => {
//     clickNew();
// }, 5000);