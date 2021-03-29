//console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
const breedUrl = 'https://dog.ceo/api/breeds/list/all';

document.addEventListener("DOMContentLoaded", () => {
    getPictures();
    getBreeds();
    loadDropDown();
    document.querySelector("select").onchange = filterBreeds;
});
    
function getPictures () {
    fetch(imgUrl)
    .then(response => response.json())
    .then(data => {
        for (i in data.message) {
            url = data.message[i];
            let dogPic = document.createElement("img");
            dogPic.setAttribute("src", url);
            document.getElementById("dog-image-container").appendChild(dogPic);
        }
    });
}

function getBreeds() {
    fetch(breedUrl)
    .then(response => response.json())
    .then(data => { 
        for (breed in data.message) {
            const li = document.createElement("li");
            li.innerText = breed;
            document.getElementById("dog-breeds").appendChild(li);
            li.addEventListener("click", changeColor);
        }
    });
}

function changeColor() {
    this.style.color = "blue";
}

function loadDropDown() {
    for (i = 101; i <123; i++ ) {
        let menuLetter = document.createElement("option");
        menuLetter.text = String.fromCharCode(i);
        document.getElementById("breed-dropdown").add(menuLetter);
    }
}

function filterBreeds() {
    const breedLetter = this.value;
    let ul = document.getElementById("dog-breeds");
    let items = ul.getElementsByTagName("li");
    let dogs = Object.values(items);
    dogs.map(function(i) {
        i.hidden = true;
        return i;
    });
    dogs.map(function(j) {
        if (j.innerText[0] === breedLetter) {
            j.hidden = false;
            return j;
        }
    });
}