console.log('%c HI', 'color: firebrick')


document.addEventListener("DOMContentLoaded", function (){
    fetchDogImg()
    fetchDogBreed()
})

function fetchDogImg(){
    fetch ("https://dog.ceo/api/breeds/image/random/4")
.then(resp => resp.json())
.then(data => {
    //console.log(data)
let images = data.message
// console.log(images)
images.forEach(image => {
    //console.log(image)
    loadImagesToDom(image)
});
})
}


function loadImagesToDom(image){
let dogsCont = document.getElementById("dog-image-container")
let ourImg = document.createElement('img')
ourImg.src = image
dogsCont.appendChild(ourImg)
}

function fetchDogBreed(){
    fetch ('https://dog.ceo/api/breeds/list/all')
    
    .then (resp => resp.json())
    .then (data => {
        //console.log(data)
        let breed = data.message
        breed.forEach(breeds =>{
            loadBreedsToDom(breeds)
        });
    })
    
}