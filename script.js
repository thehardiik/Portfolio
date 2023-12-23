const readButton = document.querySelector("#Read")
const leftContainer = document.querySelector(".left")
const bodyContainer = document.querySelector(".body");


readButton.addEventListener("click" , () => {

    readButton.parentElement.remove()
    const newLeft = document.createElement("div");
    newLeft.className = "written";
    const newHone = document.createElement("h1");
    newHone.id = "techStack";

    newHone.innerHTML = "Tech Stack"
    
    const imgDiv = document.createElement("div");
    const img = document.createElement("img")

    img.src = "Logo.png"
    img.className = "logo"
    imgDiv.className = "logoBox"

    imgDiv.appendChild(img)
    
    newLeft.appendChild(newHone)
    newLeft.appendChild(imgDiv)
    bodyContainer.appendChild(newLeft)
})