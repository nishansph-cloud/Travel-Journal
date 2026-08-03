import {createRoot} from "react-dom/client"
import App from "/src/App.jsx"

const root = createRoot(document.querySelector("#root"))
root.render(<App />)


//Some challanges from map
// const num = [1, 2, 3, 4, 5]
// const square = num.map((x)=> x*x)
// console.log(square)



// const name = ["alice", "bob", "charlie", "denielle"]
// const capital = name.map((x)=> x.toUpperCase())
// console.log(capital)

// const name = ["alice", "bob", "charlie", "denielle"]
// const capital = name.map((x)=> x.charAt(0).toUpperCase())
// console.log(capital)

// const name = ["alice", "bob", "charlie", "denielle"]
// const capital = name.map((x)=> x.charAt(0).toUpperCase() + x.slice(1))
// console.log(capital)


//array of string to type p (paragraph)
// const pokemon = ["Bulbasur", "Charmander", "Squirtle"]
// const parag = pokemon.map((x, index)=> (<p key={index}>{x}</p>))
// console.log(parag)

// const pokemon = ["Bulbasur", "Charmander", "Squirtle"]
// const parag = pokemon.map((x)=> (<p key={x}>{x}</p>))
// console.log(parag)

// const pokemon = [
//     {id : "1" ,name : "Bulbasur"},
//     {id : "2" ,name : "Charmander"}, 
//     {id : "3" ,name : "Squirtle"}
// ]
// const parag = pokemon.map((x)=> (<p key={x.id}>{x.name}</p>))
// console.log(parag)