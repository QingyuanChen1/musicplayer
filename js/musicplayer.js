const musiclist =[
    {
        singer: `Moumoon`,
        albumname: `愛は続くよどこまでも (demo ver.)`,
        prodID: 1,
        name: `愛は続くよどこまでも`,
        icon: `fas fa-play-circle fa-2x`,
        length: 310,
        rating: 4.1,
        likeit: true,
        isplaying: false,
    },
    {
        singer: `Moumoon`,
        albumname: `New moon`,
        prodID: 2,
        name: `ゆいいつむに`,
        icon: `fas fa-play-circle fa-2x`,
        length: 400,
        rating: 4.3,
        likeit: true,
        isplaying: false,
    },
    {
        singer: `Moumoon`,
        albumname: `Happy New Year Acoustics!`,
        prodID: 3,
        name: `緑の道`,
        icon: `fas fa-play-circle fa-2x`,
        length: 390,
        rating: 3.2,
        likeit: true,
        isplaying: false,
    },
    {
        singer: `Moumoon`,
        albumname: `BF`,
        prodID: 4,
        name: `BF`,
        icon: `fas fa-play-circle fa-2x`,
        length: 320,
        rating: 4.4,
        likeit: true,
        isplaying: false,
    },
    {
        singer: `Moumoon`,
        albumname: `Love is Everywhere`,
        prodID: 5,
        name: `Love is Everywhere`,
        icon: `fas fa-play-circle fa-2x`,
        length: 350,
        rating: 4.8,
        likeit: true,
        isplaying: false,
    },
    {
        singer: `Moumoon`,
        albumname: `Summer Moon`,
        prodID: 6,
        name: `Summer Time`,
        icon: `fas fa-play-circle fa-2x`,
        length: 330,
        rating: 4.6,
        likeit: true,
        isplaying: false,
    },
    {
        singer: `Moumoon`,
        albumname: `Flyways`,
        prodID: 7,
        name: `FlyWays`,
        icon: `fas fa-play-circle fa-2x`,
        length: 430,
        rating: 4.5,
        likeit: true,
        isplaying: false,
    },
    {
        singer: `Moumoon`,
        albumname: `Moonlight`,
        prodID: 8,
        name: `Moonlight`,
        icon: `fas fa-play-circle fa-2x`,
        length: 450,
        rating: 4.7,
        likeit: false,
        isplaying: false,
    },
    {
        singer: `Moumoon`,
        albumname: `Moumoon Acoustic Selection`,
        prodID: 9,
        name: `Pride`,
        icon: `fas fa-play-circle fa-2x`,
        length: 480,
        rating: 4.2,
        likeit: false,
        isplaying: false,
    },
    {
        singer: `Moumoon`,
        albumname: `Flyways`,
        prodID: 10,
        name: `声`,
        icon: `fas fa-play-circle fa-2x`,
        length: 440,
        rating: 4.2,
        likeit: false,
        isplaying: false,
    },
    {
        singer: `Moumoon`,
        albumname: `Moonlight`,
        prodID: 11,
        name: `Hello Shooting Star`,
        icon: `fas fa-play-circle fa-2x`,
        length: 410,
        rating: 3.8,
        likeit: true,
        isplaying: false,
    },
    {
        singer: `Moumoon`,
        albumname: `Hello, Shooting-star`,
        prodID: 12,
        name: `YAY`,
        icon: `fas fa-play-circle fa-2x`,
        length: 410,
        rating: 3.8,
        likeit: true,
        isplaying: false,
    }
]

const theAudio = new Audio();
const albumpicture = document.querySelector(`#albumpicture`);
const name = document.querySelector(`#name`);
const albumname = document.querySelector(`#albumname`);
const playorpause = document.querySelector(`#stop`);
const forward = document.querySelector(`#next`);
const backward = document.querySelector(`#previous`);
const trackTime = document.querySelector(`#tracktime`);
const trackDuration = document.querySelector(`#trackduration`);
const trackProgress = document.querySelector(`#trackprogress`);
let num = 0;
const testcode = function (music){
    document.querySelector(`#information`).innerHTML += `
    <li class="song">
    <p>${music.name}</p>
    <i class="${music.icon}" data-prodid="${music.prodID}"></i>
    </li>
    `
}



const condition = function(){
    const search = document.querySelector(`#searchName`).value;
    const rating = document.querySelector(`#rate`).value;
    document.querySelector(`#information`).innerHTML = ``;
    musiclist.filter(product => product.rating <= rating).filter(product => product.name.toUpperCase().includes(search.toUpperCase())).forEach(testcode)
}

const filterForm = document.querySelector(`#filterproducts`);

filterForm.addEventListener(`submit`,function(event){
    event.preventDefault();
    condition();
})

document.querySelector(`#rate`).addEventListener(`change`, function(event) {
    condition();
})

document.querySelector(`#searchName`).addEventListener(`input`, function(event) {
    condition();
})
window.addEventListener(`load`,function(event){
    condition();
    document.querySelector(`#information`).addEventListener(`click`, function(event){
        const iitem=  event.target.closest(`i`);
        console.log(iitem.dataset.prodid);
        if(iitem.matches(`.fa-play-circle`)){
            theAudio.src=`music/${iitem.dataset.prodid}.mp3`;
            theAudio.play();
            num = parseInt(iitem.dataset.prodid);
            albumpicture.src=`albumpic/${iitem.dataset.prodid}.jpg`;
            name.textContent = `Name:${musiclist[parseInt(iitem.dataset.prodid) - 1].name}`
            albumname.textContent=`Album:${musiclist[parseInt(iitem.dataset.prodid) - 1].albumname}`;
        }
    })

})


const changebutton = function(){
     if(document.querySelector(`#fa-stop`).className === "fas fa-2x fa-stop"){
         theAudio.pause();
         document.querySelector(`#fa-stop`).className = "fas fa-2x fa-play";
     }
     else{
         document.querySelector(`#fa-stop`).className = "fas fa-2x fa-stop";
         theAudio.play();
     }

}

const nextsong = function(){
    num = (num + 1) > 12 ? 1: num + 1;
    theAudio.src=`music/${num}.mp3`;
    theAudio.play();

    albumpicture.src=`albumpic/${num}.jpg`;
    name.textContent = `Name:${musiclist[num].name}`
    albumname.textContent=`Album:${musiclist[num].albumname}`;
}
const previoussong = function(){
    num = (num -1) < 0 ? 12: num -1;
    theAudio.src=`music/${num}.mp3`;
    theAudio.play();
    albumpicture.src=`albumpic/${num-1}.jpg`;
    name.textContent = `Name:${musiclist[num-1].name}`
    albumname.textContent=`Album:${musiclist[num-1].albumname}`;
}

theAudio.addEventListener(`canplaythrough`,event =>{
    trackTime.textContent = secondtomin(theAudio.currentTime);
    trackDuration.textContent = secondtomin(theAudio.duration);
    trackProgress.value = 0;
})

theAudio.addEventListener(`durationchange`,event =>{
    trackDuration.textContent = secondtomin(theAudio.duration);
    trackTime.value = 0;
})

theAudio.addEventListener(`timeupdate`,event=>{
    trackProgress.value = theAudio.currentTime/ theAudio.duration;
    trackTime.textContent = secondtomin(theAudio.currentTime);
})
const secondtomin = (sec) =>{
    return `${Math.floor(sec/60)}: ${Math.round(sec % 60).toString().padStart(2,'0')}`
}
playorpause.addEventListener(`click`,changebutton);
forward.addEventListener(`click`,nextsong)
backward.addEventListener(`click`,previoussong)
