

const pgbContainer = document.querySelector('.containerClownpg');

//container for progressBar

const containerPG = document.createElement('div');
containerPG.style.width = `${window.innerWidth * 0.8}px`;
containerPG.style.position = 'relative';


// creating progressBar
const containerProgressBar = document.createElement('div');
containerProgressBar.style.width = "100%";
containerProgressBar.style.height = "3em";
containerProgressBar.style.backgroundColor = "#c4c4c4";
containerProgressBar.style.borderRadius = "2em";
containerProgressBar.style.overflow = "hidden";
containerProgressBar.style.border = "2px solid #FF974B";

//creating fixed horizontal progressBar

const fixedContainerHorizontalProgressBar = document.createElement('div');
fixedContainerHorizontalProgressBar.style.width = "100%";
fixedContainerHorizontalProgressBar.style.height = "100%"
fixedContainerHorizontalProgressBar.style.backgroundColor = "purple";
fixedContainerHorizontalProgressBar.style.display = "flex";
fixedContainerHorizontalProgressBar.style.overflow = "hidden";
fixedContainerHorizontalProgressBar.style.position = 'relative';


//creating horizontal moved progressBar
const containerMovedHorizontalProgressBar = document.createElement('div');
containerMovedHorizontalProgressBar.style.width = "100%";
containerMovedHorizontalProgressBar.style.height = "100%"
containerMovedHorizontalProgressBar.style.backgroundColor = "purple";
containerMovedHorizontalProgressBar.style.display = "flex";
containerMovedHorizontalProgressBar.style.overflow = "hidden";
containerMovedHorizontalProgressBar.style.position = 'absolute';

//creating orange piece progressBar
const smallOrangeBar = document.createElement('div');
smallOrangeBar.style.width = "3em";
smallOrangeBar.style.height = "6.5em";
smallOrangeBar.style.backgroundColor = "#FF974B";
smallOrangeBar.style.transform = "translateY(-1.5em) rotate(45deg)";

//creating orange piece progressBar
const smallWhiteBar = document.createElement('div');
smallWhiteBar.style.width = "3em";
smallWhiteBar.style.height = "6.5em";
smallWhiteBar.style.backgroundColor = "#FFF";
smallWhiteBar.style.transform = "translateY(-1.5em)  rotate(45deg)";

pgbContainer.appendChild(containerPG);
containerPG.appendChild(containerProgressBar);
containerProgressBar.appendChild(fixedContainerHorizontalProgressBar);
fixedContainerHorizontalProgressBar.appendChild(containerMovedHorizontalProgressBar);
containerMovedHorizontalProgressBar.appendChild(smallOrangeBar);
containerMovedHorizontalProgressBar.appendChild(smallWhiteBar);


containerMovedHorizontalProgressBar.style.width = `${fixedContainerHorizontalProgressBar.clientWidth * 10}px`; //*2

const quantityOfNecessarySmallBar = (containerMovedHorizontalProgressBar.clientWidth / smallOrangeBar.clientWidth);

//Rendering small bars
for (let i = 0; i < quantityOfNecessarySmallBar; i++) {

    if (i % 2 == 0) {
        const cloneSmallBar = smallOrangeBar.cloneNode(true);
        containerMovedHorizontalProgressBar.appendChild(cloneSmallBar);
    } else {
        const cloneSmallBar = smallWhiteBar.cloneNode(true);
        containerMovedHorizontalProgressBar.appendChild(cloneSmallBar);
    }
};

let barLocation = -fixedContainerHorizontalProgressBar.clientWidth * 9; // *1
let speedBar = 2;

//Moving bars
setInterval(() => {


    containerMovedHorizontalProgressBar.style.transform = `translateX(${barLocation}px)`;

    if (barLocation == 0) { //If bar moved all the way put it back

        barLocation = -fixedContainerHorizontalProgressBar.clientWidth *9;
    }
    barLocation += 1;

}, speedBar);

//reseting bar
fixedContainerHorizontalProgressBar.style.width = "0%";

//Creating pinBar

const pinHeight = "90px";
const pinWidth = "50px";

const firstPinBar = document.createElement('div');
firstPinBar.style.height = pinHeight; // 5em
firstPinBar.style.width = pinWidth; // 3em
firstPinBar.style.backgroundImage = "url('https://i.ibb.co/vJQghtM/snip.png')";
firstPinBar.style.backgroundSize = "contain";
firstPinBar.style.backgroundRepeat = "no-repeat";
firstPinBar.style.position = "absolute";
firstPinBar.style.left = "25%";

const zeroPinBar = firstPinBar.cloneNode(true);
zeroPinBar.style.left = "0%";
zeroPinBar.style.transform = "rotate(180deg)";

const secondPinBar = firstPinBar.cloneNode(true);
secondPinBar.style.left = "50%";
secondPinBar.style.transform = "rotate(180deg)";

const thirdPinBar = firstPinBar.cloneNode(true);
thirdPinBar.style.left = "75%";


const fourthPinBar = secondPinBar.cloneNode(true);

fourthPinBar.style.left = `100%`;

//Rendering
containerPG.appendChild(zeroPinBar);
containerPG.appendChild(firstPinBar);
containerPG.appendChild(secondPinBar);
containerPG.appendChild(thirdPinBar);
containerPG.appendChild(fourthPinBar);

//Adjusting pins to barLocation
zeroPinBar.style.transform = `rotate(180deg) translateX(${-zeroPinBar.clientWidth / 2}px)`;
firstPinBar.style.transform = `translateX(${-firstPinBar.clientWidth / 2}px)`;
secondPinBar.style.transform = `rotate(180deg) translateX(${secondPinBar.clientWidth / 2}px)`;
thirdPinBar.style.transform = `translateX(${-thirdPinBar.clientWidth / 2}px)`;
fourthPinBar.style.transform = `rotate(180deg) translateX(${fourthPinBar.clientWidth / 2 + 20}px)`;
zeroPinBar.style.top = `${-zeroPinBar.clientHeight}px`;
secondPinBar.style.top = `${-secondPinBar.clientHeight}px`;
fourthPinBar.style.top = `${-fourthPinBar.clientHeight}px`;

// Styling first pin text
const firstPinText = document.createElement('p');
firstPinText.style.fontFamily = "Fredoka One";
firstPinText.style.bottom = "-5em";
firstPinText.style.transform = 'translateX(-2em)';
firstPinText.style.textAlign = 'center';
firstPinText.style.color = "#FF974B";
firstPinText.style.width = '110px';
firstPinText.innerHTML = `Me conte mais \n sobre você`;

//Styling firt pin image

const firstPinImage = document.querySelector('.image-step-one');
firstPinImage.style.width = '100px';
firstPinImage.style.height = '200px'

// Apending pin-text and pin-image to div

const firstPinContainer = document.createElement('div');
firstPinContainer.appendChild(firstPinText);
firstPinContainer.appendChild(firstPinImage);
firstPinContainer.style.position = 'absolute';
firstPinContainer.style.top=pinHeight;
firstPinBar.appendChild(firstPinContainer);


//styling second pin text
const secondPinText = document.createElement('p');
secondPinText.style.fontFamily = "Fredoka One";
secondPinText.style.bottom = "-5em";
secondPinText.style.transform = 'translateX(-2em) rotate(180deg)';
secondPinText.style.textAlign = 'center';
secondPinText.style.width = '110px';
secondPinText.style.color = "#FF974B";
secondPinText.innerHTML = `Que dia posso ir na sua festinha ?`


// styling second pin image

const secondPinImage = document.querySelector('.image-step-two');
secondPinImage.style.width = '125px';
secondPinImage.style.height = '250px';
secondPinImage.style.transform = 'rotate(180deg)';

// appending second pin-image and pin-text to div
const secondPinContainer = document.createElement('div');
secondPinContainer.appendChild(secondPinText);
secondPinContainer.appendChild(secondPinImage);

// styling second-pin-container
secondPinContainer.style.position='absolute';
secondPinContainer.style.top=pinHeight;
secondPinBar.appendChild(secondPinContainer);


// styling third pin text
const thirdPinText = document.createElement('p');
thirdPinText.style.fontFamily = "Fredoka One";
thirdPinText.style.bottom = "-5em";
thirdPinText.style.transform = 'translateX(-2em)';
thirdPinText.style.textAlign = 'center';
thirdPinText.style.width = '110px';
thirdPinText.style.color = "#FF974B";
thirdPinText.innerHTML = `Qual suas cores favoritas ?`
thirdPinBar.appendChild(thirdPinText);


// styling third pin image

const thirdPinImage = document.querySelector('.image-step-tree');
thirdPinImage.style.width = '125px';
thirdPinImage.style.height = '250px'
thirdPinImage.style.top = '100px';
thirdPinBar.appendChild(thirdPinImage);

//style third pin-container
const thirdPinContainer = document.createElement('div');
thirdPinContainer.appendChild(thirdPinImage);
thirdPinContainer.appendChild(thirdPinText);
thirdPinBar.appendChild(thirdPinContainer);


// styling fourth pin text
const fourthPinText = document.createElement('p');
fourthPinText.style.fontFamily = "Fredoka One";
//fourthPinText.style.position = "absolute";
fourthPinText.style.bottom = "-6em";
fourthPinText.style.transform = 'translateX(-2em) rotate(180deg)';
fourthPinText.style.textAlign = 'center';
fourthPinText.style.width = '110px';
fourthPinText.style.color = "#FF974B";
fourthPinText.innerHTML = `Eba ! agora é só me esperar, logo estarei na sua festa`;


//styling fourth pin image

const fourthPinImage = document.querySelector('.image-step-four');
fourthPinImage.style.width = '125px';
fourthPinImage.style.height = '250px'
fourthPinImage.style.transform = 'rotate(180deg)';


const fourthPinContainer = document.createElement('div');
fourthPinContainer.appendChild(fourthPinImage);
fourthPinContainer.appendChild(fourthPinText);
fourthPinBar.appendChild(fourthPinContainer);


//zero pin text
const zeroPinText = document.createElement('p');
zeroPinText.style.fontFamily = "Fredoka One";

zeroPinText.style.bottom = "-6em";
zeroPinText.style.transform = 'translateX(-2em) rotate(180deg)';
zeroPinText.style.textAlign = 'center';
zeroPinText.style.width = '110px';
zeroPinText.style.color = "#FF974B";
zeroPinText.innerHTML = `Olá venha comigo, e vamos fazer sua festinha`;

//zero pin image

const zeroPinImage = document.querySelector('.image-step-zero');
zeroPinImage.style.width = '100px';
zeroPinImage.style.transform = 'rotate(180deg)';



const zeroPinContainer = document.createElement('div');
zeroPinContainer.appendChild(zeroPinImage);
zeroPinContainer.appendChild(zeroPinText);
zeroPinContainer.style.position='absolute';
zeroPinContainer.style.top=pinHeight;
zeroPinBar.appendChild(zeroPinContainer);

let percentageBarSize = 0;
fixedContainerHorizontalProgressBar.style.transition = "1s";

firstPinBar.style.opacity = '0';
secondPinBar.style.opacity = '0';
thirdPinBar.style.opacity = '0';
fourthPinBar.style.opacity = '0';


function nextStep() {

    firstPinBar.style.transition = '1.5s';
    secondPinBar.style.transition = '1.5s';
    thirdPinBar.style.transition = '1.5s';
    fourthPinBar.style.transition = '1.5s';


    percentageBarSize += 25;
    if (percentageBarSize > 100) {
        percentageBarSize = 0;
    }

    fixedContainerHorizontalProgressBar.style.width = `${percentageBarSize}%`;

    if (percentageBarSize == 0) {
        firstPinBar.style.opacity = '0';
        secondPinBar.style.opacity = '0';
        thirdPinBar.style.opacity = '0';
        fourthPinBar.style.opacity = '0';
    } else if (percentageBarSize == 25) {
        firstPinBar.style.opacity = '1';
    } else if (percentageBarSize == 50) {
        secondPinBar.style.opacity = '1';
    } else if (percentageBarSize == 75) {
        thirdPinBar.style.opacity = '1';
    } else if (percentageBarSize == '100') {
        fourthPinBar.style.opacity = '1';
    }
};


document.querySelector('.buttonNext').addEventListener('click', nextStep);

