function loading(id){
document.getElementById(id).innerText="Loading..."
}
async function getDog(){
try{
let res = await fetch("https://dog.ceo/api/breeds/image/random")
let data = await res.json()

document.getElementById("dogImg").src = data.message

let breed = data.message.split("/")[4]
document.getElementById("breed").innerText = breed

}catch{
alert("Error loading dog")
}
}

function copyDog(){
navigator.clipboard.writeText(
document.getElementById("dogImg").src
)
}
async function getJoke(){
let res = await fetch("https://official-joke-api.appspot.com/random_joke")
let data = await res.json()

document.getElementById("setup").innerText = data.setup
document.getElementById("punchline").innerText = data.punchline
}
async function getUser(){

let res = await fetch("https://randomuser.me/api/")
let data = await res.json()

let user = data.results[0]

document.getElementById("userImg").src = user.picture.large
document.getElementById("name").innerText =
user.name.first + " " + user.name.last

document.getElementById("email").innerText = user.email
document.getElementById("country").innerText = user.location.country

}
async function getPosts(){

let res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=5")
let data = await res.json()

let posts = document.getElementById("posts")

posts.innerHTML=""

data.forEach(post=>{
posts.innerHTML += `
<p><b>${post.title}</b></p>
`
})

}
function loading(id){
document.getElementById(id).innerText="Loading..."
}
async function getDog(){

document.getElementById("breed").innerHTML =
'<div class="loading"></div>'

let res = await fetch(
"https://dog.ceo/api/breeds/image/random"
)

let data = await res.json()

document.getElementById("dogImg").src = data.message

let breed = data.message.split("/")[4]

document.getElementById("breed").innerText = breed




}
async function getDog(){try{breed.innerText="Loading...";let r=await fetch("https://dog.ceo/api/breeds/image/random");if(!r.ok)throw new Error();let d=await r.json();dogImg.src=d.message;breed.innerText=d.message.split("/")[4]}catch{breed.innerText="⚠️ Failed to fetch due to server issue"}}

async function getJoke(){try{setup.innerText="Loading...";let r=await fetch("https://official-joke-api.appspot.com/random_joke");if(!r.ok)throw new Error();let d=await r.json();setup.innerText=d.setup;punchline.innerText=d.punchline}catch{setup.innerText="⚠️ Failed to fetch due to server issue"}}

async function getUser(){try{name.innerText="Loading...";let r=await fetch("https://randomuser.me/api/");if(!r.ok)throw new Error();let d=await r.json();let u=d.results[0];userImg.src=u.picture.large;name.innerText=u.name.first+" "+u.name.last;email.innerText=u.email;country.innerText=u.location.country}catch{name.innerText="⚠️ Failed to fetch due to server issue"}}

async function getPosts(){try{posts.innerHTML="Loading...";let r=await fetch("https://jsonplaceholder.typicode.com/posts?_limit=5");if(!r.ok)throw new Error();let d=await r.json();posts.innerHTML=d.map(p=>`<p>${p.title}</p>`).join("")}catch{posts.innerHTML="⚠️ Failed to fetch due to server issue"}}