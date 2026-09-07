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

function init(){
    renderImgs();
}

function renderImgs(){
    let contentRef = document.getElementById('content')
    contentRef.innerHTML ="";
    
    for (let index = 0; index < myImgs.length; index++) {
        const element = myImgs[index];
        contentRef.innerHTML += getImgTemplate(element,index)
    }
}

function openDetail(index){
    let dialogRef = document.getElementById('dialog');
    dialogRef.classList.remove('d_none');
    dialogRef.innerHTML = getDialogTemplate(index);
}

function closeDetail(){
    let dialogRef = document.getElementById('dialog');
    dialogRef.classList.add('d_none');
}

function getImgTemplate(src,index){
    return `<img onclick="openDetail(${index})" class="small_img" src="./assets/images/${src}" alt="" srcset="">`
}

function clickDetail(event){
    event.stopPropagation();
}

function getCleanTitle(index){
    return myImgs[index].split(".")[0];
}

function nextImg(index){
    if(index + 1 >= myImgs.length){
        openDetail(0);
    } else {
        openDetail(index + 1);
    }
}

function prevImg(index){
    if(index - 1 < 0){
        openDetail(myImgs.length - 1);
    } else {
        openDetail(index - 1);
    }
}

function getDialogTemplate(index){
    return `<div onclick="clickDetail(event)" class="dialog_content">
            
            <div class="headline">
                <p>${getCleanTitle(index)}</p> 
                <div onclick="closeDetail()" class="cross_icon">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.9998 8.4L2.0998 13.3C1.91647 13.4833 1.68314 13.575 1.3998 13.575C1.11647 13.575 0.883138 13.4833 0.699805 13.3C0.516471 13.1167 0.424805 12.8833 0.424805 12.6C0.424805 12.3167 0.516471 12.0833 0.699805 11.9L5.5998 7L0.699805 2.1C0.516471 1.91667 0.424805 1.68333 0.424805 1.4C0.424805 1.11667 0.516471 0.883333 0.699805 0.699999C0.883138 0.516666 1.11647 0.424999 1.3998 0.424999C1.68314 0.424999 1.91647 0.516666 2.0998 0.699999L6.9998 5.6L11.8998 0.699999C12.0831 0.516666 12.3165 0.424999 12.5998 0.424999C12.8831 0.424999 13.1165 0.516666 13.2998 0.699999C13.4831 0.883333 13.5748 1.11667 13.5748 1.4C13.5748 1.68333 13.4831 1.91667 13.2998 2.1L8.3998 7L13.2998 11.9C13.4831 12.0833 13.5748 12.3167 13.5748 12.6C13.5748 12.8833 13.4831 13.1167 13.2998 13.3C13.1165 13.4833 12.8831 13.575 12.5998 13.575C12.3165 13.575 12.0831 13.4833 11.8998 13.3L6.9998 8.4Z" fill="white"/>
                    </svg>
                </div> 
            </div>  
            <img class="dialog_img" src="./assets/images/${myImgs[index]}" alt="">

            <div class="back_forward_nav">
                <div onclick="prevImg(${index})">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <mask id="mask0_84_1828" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="24"
                            height="24">
                            <rect width="24" height="24" fill="#D9D9D9" />
                        </mask>
                        <g mask="url(#mask0_84_1828)">
                            <path
                                d="M7.82499 13L12.725 17.9C12.925 18.1 13.0208 18.3333 13.0125 18.6C13.0042 18.8667 12.9 19.1 12.7 19.3C12.5 19.4833 12.2667 19.5792 12 19.5875C11.7333 19.5958 11.5 19.5 11.3 19.3L4.69999 12.7C4.59999 12.6 4.52915 12.4917 4.48749 12.375C4.44582 12.2583 4.42499 12.1333 4.42499 12C4.42499 11.8667 4.44582 11.7417 4.48749 11.625C4.52915 11.5083 4.59999 11.4 4.69999 11.3L11.3 4.7C11.4833 4.51667 11.7125 4.425 11.9875 4.425C12.2625 4.425 12.5 4.51667 12.7 4.7C12.9 4.9 13 5.1375 13 5.4125C13 5.6875 12.9 5.925 12.7 6.125L7.82499 11H19C19.2833 11 19.5208 11.0958 19.7125 11.2875C19.9042 11.4792 20 11.7167 20 12C20 12.2833 19.9042 12.5208 19.7125 12.7125C19.5208 12.9042 19.2833 13 19 13H7.82499Z"
                                fill="#FD5B4F" />
                        </g>
                    </svg>
                </div>
                <p class="img_count">${index + 1}/${myImgs.length}</p>
                <div onclick="nextImg(${index})">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <mask id="mask0_84_1828" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="24"
                            height="24">
                            <rect width="24" height="24" fill="#D9D9D9" />
                        </mask>
                        <g mask="url(#mask0_84_1828)">
                            <path
                                d="M7.82499 13L12.725 17.9C12.925 18.1 13.0208 18.3333 13.0125 18.6C13.0042 18.8667 12.9 19.1 12.7 19.3C12.5 19.4833 12.2667 19.5792 12 19.5875C11.7333 19.5958 11.5 19.5 11.3 19.3L4.69999 12.7C4.59999 12.6 4.52915 12.4917 4.48749 12.375C4.44582 12.2583 4.42499 12.1333 4.42499 12C4.42499 11.8667 4.44582 11.7417 4.48749 11.625C4.52915 11.5083 4.59999 11.4 4.69999 11.3L11.3 4.7C11.4833 4.51667 11.7125 4.425 11.9875 4.425C12.2625 4.425 12.5 4.51667 12.7 4.7C12.9 4.9 13 5.1375 13 5.4125C13 5.6875 12.9 5.925 12.7 6.125L7.82499 11H19C19.2833 11 19.5208 11.0958 19.7125 11.2875C19.9042 11.4792 20 11.7167 20 12C20 12.2833 19.9042 12.5208 19.7125 12.7125C19.5208 12.9042 19.2833 13 19 13H7.82499Z"
                                fill="#FD5B4F" />
                        </g>
                    </svg>
                </div>
            </div>
        </div>`
}