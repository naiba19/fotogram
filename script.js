let myImgs = [
    "alaska_1.jpg",
    "anime_2.jpg",
    "atmosphere_3.png",
    "blue_4.jpg",
    "hurricane_5.jpg",
    "lake_6.jpg",
    "moorente_7.jpg",
    "sea_8.jpg",
    "snow_bunting_9.jpg",
    "snow_leopard_cubs_10.jpg",
    "travel_11.jpg",
    "winter_12.jpg"
];
let myAlts = [
    "Lake surrounded by mountains in Alaska",
    "City street at night",
    "Dark storm clouds in the sky",
    "Blue tit sitting on a branch",
    "Hurricane seen from above",
    "Snowy mountain lake",
    "Duck swimming in a lake",
    "Person standing on a rock at night",
    "Snow bunting sitting on a rock",
    "Snow leopard cubs sitting on a rock",
    "Snowy mountain landscape",
    "Frost-covered tree in a snowy landscape"
];

function init() {
    renderImgs();
}

function renderImgs() {
    let contentRef = document.getElementById('content')
    contentRef.innerHTML = "";

    for (let index = 0; index < myImgs.length; index++) {
        const element = myImgs[index];
        contentRef.innerHTML += getImgTemplate(element, index)
    }
}

function openDetail(index) {
    let dialogRef = document.getElementById('dialog');
    dialogRef.classList.remove('d_none');
    dialogRef.innerHTML = getDialogTemplate(index);
}

function closeDetail() {
    let dialogRef = document.getElementById('dialog');
    dialogRef.classList.add('d_none');
}

function getImgTemplate(src, index) {
  return `<img onclick="openDetail(${index})" onkeydown="if(event.key === 'Enter') openDetail(${index})" class="small_img" src="./assets/images/${src}" alt="${myAlts[index]}" tabindex="0">`
}

function clickDetail(event) {
    event.stopPropagation();
}

function getCleanTitle(index) {
    return myImgs[index].split(".")[0];
}

function nextImg(index) {
    if (index + 1 >= myImgs.length) {
        openDetail(0);
    } else {
        openDetail(index + 1);
    }
}

function prevImg(index) {
    if (index - 1 < 0) {
        openDetail(myImgs.length - 1);
    } else {
        openDetail(index - 1);
    }
}

