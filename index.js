const colors = [
  {
    name: "red",
    motto: "Rose Red",
  },
  {
    name: "blue",
    motto: "Ocean Blue",
  },
  {
    name: "gray",
    motto: "Smoke Gray",
  },
  {
    name: "green",
    motto: "Grass Green",
  },
  {
    name: "purple",
    motto: "Deep Purple",
  },
];


const randomColorButton = document.querySelector('#randomColorButton');
// const colorList = ['blue','green','black','purple']
const bodyElement = document.querySelector('body');
const setColorButton = document.querySelector('#setColorButton');
const colorName = document.querySelector('#colorName');
const colorMotto = document.querySelector('#colorDesc');

randomColorButton.addEventListener('click',addColor);
setColorButton.addEventListener('click',setColor);

function addColor() {
  let randomNumber = Math.floor(Math.random() * colors.length);
  bodyElement.style.backgroundColor = colors[randomNumber].name;
  colorName.textContent = colors[randomNumber].name;
  colorMotto.innerHTML = colors[randomNumber].motto;

}

function setColor() {
  const userInput = document.querySelector('.colorInput');
  const userInputObject = userInput.value.split(":");
  const colorObject = {
      name:userInputObject[0],
      motto:userInputObject[1]
  }
  bodyElement.style.backgroundColor = userInputObject[0];
  if(colors.findIndex(color => color.name === colorObject.name )=== -1){
      colors.push(colorObject);
      colorName.textContent = colorObject.name
      colorMotto.innerHTML = colorObject.motto
      console.log(colors)
  }else{
      alert('This color is already in my list')
  } 
  userInput.value='';
  userInput.focus() ; 
}