let stepBarProgress = 75;

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
fixedContainerHorizontalProgressBar.style.width = `${stepBarProgress}%`;
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


containerMovedHorizontalProgressBar.style.width = `${fixedContainerHorizontalProgressBar.clientWidth * 2}px`

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

let barLocation = -fixedContainerHorizontalProgressBar.clientWidth * 1;
let speedBar = 2;

//Moving bars
setInterval(() => {


    containerMovedHorizontalProgressBar.style.transform = `translateX(${barLocation}px)`;

    if (barLocation == 0) {
        barLocation = -fixedContainerHorizontalProgressBar.clientWidth + smallWhiteBar.clientWidth;
    }
    barLocation += 1;

}, speedBar);

//Creating pinBar

const firstPinBar = document.createElement('div');
firstPinBar.style.height = "5em";
firstPinBar.style.width = "3em";
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

//first pin text
const firstPinText = document.createElement('p');
firstPinText.style.fontFamily = "Fredoka One";
firstPinText.style.position = "absolute";
firstPinText.style.bottom = "-5em";
firstPinText.style.transform = 'translateX(-2em)';
firstPinText.style.textAlign = 'center';
firstPinText.style.color = "#FF974B";
firstPinText.style.width = '110px';
firstPinText.innerHTML = `Me conte mais \n sobre você`
firstPinBar.appendChild(firstPinText);


//firt pin image

const clown1 = document.querySelector('.image-step-one');
clown1.style.width = '100px';
clown1.style.height = '200px'
clown1.style.position = 'absolute';
clown1.style.top = '140px'
firstPinBar.appendChild(clown1);

//second pin text
const secondPinText = document.createElement('p');
secondPinText.style.fontFamily = "Fredoka One";
secondPinText.style.position = "absolute";
secondPinText.style.bottom = "-5em";
secondPinText.style.transform = 'translateX(-2em) rotate(180deg)';
secondPinText.style.textAlign = 'center';
secondPinText.style.width = '110px';
secondPinText.style.color = "#FF974B";
secondPinText.innerHTML = `Que dia posso ir na sua festinha ?`
secondPinBar.appendChild(secondPinText);


//second pin image

const secondPinImage = document.querySelector('.image-step-two');
secondPinImage.style.width = '100px';
secondPinImage.style.height = '200px'
secondPinImage.style.position = 'absolute';
secondPinImage.style.top = '140px';
secondPinImage.style.transform = 'rotate(180deg)';
secondPinBar.appendChild(secondPinImage);

//third pin text
const thirdPinText = document.createElement('p');
thirdPinText.style.fontFamily = "Fredoka One";
thirdPinText.style.position = "absolute";
thirdPinText.style.bottom = "-5em";
thirdPinText.style.transform = 'translateX(-2em)';
thirdPinText.style.textAlign = 'center';
thirdPinText.style.width = '110px';
thirdPinText.style.color = "#FF974B";
thirdPinText.innerHTML = `Qual suas cores favoritas ?`
thirdPinBar.appendChild(thirdPinText);


//third pin image

const thirdPinImage = document.querySelector('.image-step-tree');
thirdPinImage.style.width = '150px';
thirdPinImage.style.height = '300px'
thirdPinImage.style.position = 'absolute';
thirdPinImage.style.top = '100px';
thirdPinBar.appendChild(thirdPinImage);

//fourth pin text
const fourthPinText = document.createElement('p');
fourthPinText.style.fontFamily = "Fredoka One";
fourthPinText.style.position = "absolute";
fourthPinText.style.bottom = "-6em";
fourthPinText.style.transform = 'translateX(-2em) rotate(180deg)';
fourthPinText.style.textAlign = 'center';
fourthPinText.style.width = '110px';
fourthPinText.style.color = "#FF974B";
fourthPinText.innerHTML = `Eba ! agora é só me esperar, logo estarei na sua festa`
fourthPinBar.appendChild(fourthPinText);


//fourth pin image

const fourthPinImage = document.querySelector('.image-step-four');
fourthPinImage.style.width = '125px';
fourthPinImage.style.height = '250px'
fourthPinImage.style.transform = 'rotate(180deg)';
fourthPinImage.style.position = 'absolute';
fourthPinImage.style.top = '135px';
fourthPinBar.appendChild(fourthPinImage);


//zero pin text
const zeroPinText = document.createElement('p');
zeroPinText.style.fontFamily = "Fredoka One";
zeroPinText.style.position = "absolute";
zeroPinText.style.bottom = "-6em";
zeroPinText.style.transform = 'translateX(-2em) rotate(180deg)';
zeroPinText.style.textAlign = 'center';
zeroPinText.style.width = '110px';
zeroPinText.style.color = "#FF974B";
zeroPinText.innerHTML = `Olá venha comigo, e vamos fazer sua festinha`
zeroPinBar.appendChild(zeroPinText);


//zero pin image

const zeroPinImage = document.querySelector('.image-step-zero');
zeroPinImage.style.width = '125px';
zeroPinImage.style.height = '250px'
zeroPinImage.style.transform = 'rotate(180deg)';
zeroPinImage.style.position = 'absolute';
zeroPinImage.style.top = '135px';
zeroPinBar.appendChild(zeroPinImage);

let asd = 0;
function nextStep() {

    console.log(asd);
    fixedContainerHorizontalProgressBar.style.width = `${asd}%`;
    asd+=25;
    if (asd > 100) {
        console.log('como asism')
        asd = 0;
    }
};