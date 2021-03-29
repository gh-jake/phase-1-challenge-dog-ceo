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
    console.log("clicked");
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
    console.log("chosen: " + breedLetter);
    let ul = document.getElementById("dog-breeds");
    const items = ul.getElementsByTagName("li");
    // items = filter(item => {
    //     let firstLetter = item.innerText[0];
    // });
    // let sortedArray;
    for (i = 0; i < items.length; i++) {
        let firstLetter = items[i].innerText[0];
        if (firstLetter != breedLetter) {
            console.log(items[i].innerText + " does not match " + breedLetter);
            // console.log(items[i].innerText + " " + ul.childNodes[i + 1].innerText);
            // console.log("removing " + items[i].innerText);
            // // items[i].innerText = " ";
            // ul.removeChild(ul.childNodes[i + 1]);
            // console.log(items[i].innerText + " was removed");
        }
    }
}