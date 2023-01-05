const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/No-Trouble.jpeg") {
    myImage.setAttribute("src", "images/Dino-Fall.jpeg");
  } else {
    myImage.setAttribute("src", "images/No-Trouble.jpeg");
  }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

  
  myButton.onclick = () => {
    setUserName();
  };

  function setUserName() {
    const myName = prompt("Please enter your name.");
    localStorage.setItem("name", myName);
    myHeading.textContent = `Learning to code is fun, ${myName}!`;
  }
  
  if (!localStorage.getItem("name")) {
    setUserName();
  } else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Learning to code is fun, ${storedName}!`;
  }
  
  function setUserName() {
    const myName = prompt("Please enter your name.");
    if (!myName) {
      setUserName();
    } else {
      localStorage.setItem("name", myName);
      myHeading.textContent = `Learning to code is fun, ${myName}!`;
    }
  }
  