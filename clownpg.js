const pgbContainer = document.querySelector('.containerClownpg');


// creating progressBar
const containerProgressBar = document.createElement('div');
containerProgressBar.style.width = "80%";
containerProgressBar.style.height = "3em";
containerProgressBar.style.backgroundColor = "#c4c4c4";
containerProgressBar.style.borderRadius = "2em";
containerProgressBar.style.overflow = "hidden";
containerProgressBar.style.border = "2px solid #FF974B"

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
//containerMovedHorizontalProgressBar.style.transition="0.2s";

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

pgbContainer.appendChild(containerProgressBar);
containerProgressBar.appendChild(fixedContainerHorizontalProgressBar);
fixedContainerHorizontalProgressBar.appendChild(containerMovedHorizontalProgressBar);
containerMovedHorizontalProgressBar.appendChild(smallOrangeBar);
containerMovedHorizontalProgressBar.appendChild(smallWhiteBar);


containerMovedHorizontalProgressBar.style.width = `${fixedContainerHorizontalProgressBar.clientWidth * 2}px`

const quantityOfNecessarySmallBar = (containerMovedHorizontalProgressBar.clientWidth / smallOrangeBar.clientWidth);

//rendering small bars
for (let i = 0; i < quantityOfNecessarySmallBar; i++) {

    if (i % 2 == 0) {
        const cloneSmallBar = smallOrangeBar.cloneNode(true);
        containerMovedHorizontalProgressBar.appendChild(cloneSmallBar);
    } else {
        const cloneSmallBar = smallWhiteBar.cloneNode(true);
        containerMovedHorizontalProgressBar.appendChild(cloneSmallBar);
    }
};

const secondContainerMovedHorizontalProgressBar = containerMovedHorizontalProgressBar.cloneNode(true);



let barLocation = -fixedContainerHorizontalProgressBar.clientWidth * 1;
let speedBar = 2;

//Moving bars
setInterval(() => {


    containerMovedHorizontalProgressBar.style.transform = `translateX(${barLocation}px)`;

    if (barLocation == 0) {
        console.log('barraInteira')
        barLocation = -fixedContainerHorizontalProgressBar.clientWidth + smallWhiteBar.clientWidth;
    }
    barLocation += 1;

}, speedBar);

