const body = document.querySelector("body");
const navbar = document.querySelector(".navbar");
const menu = document.querySelector(".menu-list");
const menuBtn = document.querySelector(".menu-btn");
const cancelBtn = document.querySelector(".cancel-btn");

menuBtn.onclick = () => {
  menu.classList.add("active");
  menuBtn.classList.add("hide");
  cancelBtn.classList.add("show");
  body.classList.add("disabledScroll");
}

cancelBtn.onclick = () => {
  menu.classList.remove("active");
  menuBtn.classList.remove("hide");
  cancelBtn.classList.remove("show");
  body.classList.remove("disabledScroll");
}

const siteLogo = document.querySelector('.logo a');


const navLinks = document.querySelectorAll('.menu-list li');

const playSongBtn = document.querySelector('.play-song-btn');


navLinks.forEach(item => {
  item.addEventListener('click', function () {
  
    navLinks.forEach(menuItem => menuItem.classList.remove('active-menu-list'));


    this.classList.add('active-menu-list');
  });
});

playSongBtn.onclick = () => {
  removeActiveClass();
}

siteLogo.onclick = () => {
  removeActiveClass();
};

function removeActiveClass() {
  navLinks.forEach(menuItem => menuItem.classList.remove('active-menu-list'));
}

window.onscroll = () => {
  this.scrollY > 20 ? navbar.classList.add("sticky") : navbar.classList.remove("sticky");

  if (document.body.scrollTop > 75 || document.documentElement.scrollTop > 75) {
    moveTopBtn.style.display = "block";
  } else {
    moveTopBtn.style.display = "none";
  }
}


const playSong = document.getElementById("song");
var icon = document.getElementById("icon");

icon.addEventListener("click", playMusic);

function playMusic() {
  if (playSong.paused) {
    playSong.play();
    icon.src = "./assets/Image/pause.png";
  } else {
    playSong.pause();
    icon.src = "./assets/Image/play.png";
  }
}


var moveTopBtn = document.getElementById("moveTopBtn");


function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
  removeActiveClass();
}


var loader = document.getElementById("loading");
function preLoader() {
  loader.style.display = "none";
}


const buttons = document.querySelectorAll(".btn");

const photo = document.getElementById("banner");
const song = document.getElementById("song");
const songName = document.getElementById("songName");
const songBy = document.getElementById("songBy");
const aboutSong = document.getElementById("aboutSong");
const title = document.getElementById("title");
const download = document.getElementById("download");

buttons[0].addEventListener("click", () => {
  icon.src = "./assets/Image/play.png";
  photo.src = "./assets/Image/khoya.jpg";
  song.src = "./assets/Songs/khoya.mp3";
  songName.innerText = "Khoya Sa";
  songBy.innerText = "Kasyap";
  title.innerText = "Khoya Sa";
  download.href = "./assets/Songs/khoya.mp3";
  aboutSong.innerText = "Music has the power to uplift your mood and also makes you feel the warmth of emotions in the most memorable ways.Weaving magic once again, Label Day One announces the launch of 'khoya sa' by singer, songwriter & composer, KASYAP who is ready to twirl up emotions and make you feel the jitters of love at first sight. ";
});

buttons[1].addEventListener("click", () => {
  icon.src = "assets/Image/play.png";
  photo.src = "assets/Image/ilikemebetter.png";
  song.src = "assets/Songs/I Like Me Better - Lauv.mp3";
  songName.innerText = "I Like Me Better";
  songBy.innerText = "Lauv";
  title.innerText = " I Like Me Better";
  download.href = "assets/Songs/I Like Me Better - Lauv.mp3";
  aboutSong.innerText = "“I Like Me Better” is a song recorded by American singer-songwriter Lauv. It was released on May 19, 2017, and is included on Lauv's compilation album I Met You When I Was 18, which was released on May 31, 2018. It has also been used in an Android Auto app commercial, in the trailer of Netflix's romantic comedy To All the Boys I've Loved Before, and in the fall ball episode of Netflix's comedy series The Expanding Universe of Ashley Garcia.";
});

buttons[2].addEventListener("click", () => {
  icon.src = "assets/Image/play.png";
  photo.src = "assets/Image/mazaak.jpg";
  song.src = "assets/Songs/mazaak.mp3";
  songName.innerText = "Mazaak";
  songBy.innerText = "Anuv Jain";
  title.innerText = "Mazaak";
  download.href = "assets/Songs/mazaak.mp3";
  aboutSong.innerText = "I don't think that I needs to explain much about this song just close your eyes and try to feel it but for now I am just gonna tell ya' for the context that how absurd is it that when we least expect love, it still finds us? And when it does, we hope that it isn't a Mazaak, it isn't a joke…";
});

buttons[3].addEventListener("click", () => {
  icon.src = "assets/Image/play.png";
  photo.src = "assets/Image/lord-hanuman-8k-3840x2160-14689.jpg";
  song.src = "assets/Songs/hanu_man_movie_bgm.mp3";
  songName.innerText = " Hanuman";
  songBy.innerText = "Director";
  title.innerText = "Hanuman";
  download.href = "assets/Songs/hanu_man_movie_bgm.mp3";
  aboutSong.innerText = `"Feb 20, 2024 · A spiritual journey with the divine vibrations of 'Raghunandana,' a soul-stirring devotional ode to Lord Ram From HanuMan (Telugu) Movie, Sung By Saicharan Bhaskaruni, Lokeshwar Edara,...`;
});

buttons[4].addEventListener("click", () => {
  icon.src = "./assets/Image/play.png";
  photo.src = "assets/Image/pushpa2.jpeg";
  song.src = "assets/Songs/pushpa_2.mp3";
  songName.innerText = "Pushpa2";
  songBy.innerText = "Director";
  title.innerText = "Pushpa2";
  download.href = "assets/Songs/pushpa_2.mp3";
  aboutSong.innerText = `"The song Pushpa Pushpa from Pushpa 2: The Rule is a celebration of Pushpa's physical prowess, unflinching courage and unmatched swag. The lyrical video of the song is out today and it's a treat for Pushpa fans.`;
});

buttons[5].addEventListener("click", () => {
  icon.src = "./assets/Image/play.png";
  photo.src = "./assets/Image/baraat.jpeg";
  song.src = "./assets/Songs/baraat.mp3";
  songName.innerText = "Baaraat";
  songBy.innerText = "Ritviz";
  title.innerText = "Baaraat";
  download.href = "./assets/Songs/baraat.mp3";
  aboutSong.innerText = `Ritviz is an Indian electronic music producer, singer, and songwriter known for his fusion of electronic music with traditional Indian sounds. He gained popularity with his breakthrough track "Udd Gaye" in 2017 and has since released several successful songs, collaborating with various artists.
  
  "Baaraat" is a song from Ritviz's debut album, "Ved," which was released in 2018. The song showcases Ritviz's unique blend of electronic music with traditional Indian sounds, creating a dynamic and energetic track.

  Ritviz is an Indian electronic music producer, singer, and songwriter known for his fusion of electronic music with traditional Indian sounds. He gained popularity with his breakthrough track "Udd Gaye" in 2017 and has since released several successful songs, collaborating with various artists..
  `;
});

buttons[6].addEventListener("click", () => {
  icon.src = "assets/Image/play.png";
  photo.src = "assets/Image/ishq.jpg";
  song.src = "assets/Songs/ishq.mp3";
  songName.innerText = "Ishq Bulaava";
  songBy.innerText = "Vishal-Shekhar & Shipra Goyal";
  title.innerText = "Ishq Bulaava";
  download.href = "assets/Songs/ishq.mp3";
  aboutSong.innerText = "Music has the power to uplift your mood and also makes you feel  the warmth of emotions in the most memorable ways. Weaving magic once again, Label Day One announces the launch of 'Ishq Bulaava' that is ready to twirl up emotions and make you feel the jitters of love at first sight.";
});

buttons[7].addEventListener("click", () => {
  icon.src = "assets/Image/play.png";
  photo.src = "assets/Image/katputli.jpg";
  song.src = "assets/Songs/katputli.mp3";
  songName.innerText = "Katputli Ke Dhaage";
  songBy.innerText = "Anumita Nadesan & Himonshu Parikh";
  title.innerText = "Katputli Ke Dhaage";
  download.href = "assets/Songs/katputli.mp3";
  aboutSong.innerText = "Music has the power to uplift your mood and also makes you feel the warmth of emotions in the most memorable ways. 'Katputli Ke Dhaage' song was released in 2021.";
});

buttons[8].addEventListener("click", () => {
  icon.src = "assets/Image/play.png";
  photo.src = "assets/Image/you.jpg";
  song.src = "assets/Songs/you.mp3";
  songName.innerText = "Tu/You";
  songBy.innerText = "Armaan Malik";
  title.innerText = "Tu/You";
  download.href = "assets/Songs/you.mp3";
  aboutSong.innerText = "Music has the power to uplift your mood and also makes you feel  the warmth of emotions in the most memorable ways. 'Tu/You' was released in 2022";
});

buttons[9].addEventListener("click", () => {
  icon.src = "assets/Image/play.png";
  photo.src = "assets/Image/pal.jpg";
  song.src = "assets/Songs/pal.mp3";
  songName.innerText = "Har Ek Pal";
  songBy.innerText = "Ashu Shukla";
  title.innerText = "Har Ek Pal";
  download.href = "assets/Songs/pal.mp3";
  aboutSong.innerText = "Music has the power to uplift your mood and also makes you feel  the warmth of emotions in the most memorable ways. 'Har Ek Pal' was released in 2017.";
});

buttons[10].addEventListener("click", () => {
  icon.src = "assets/Image/play.png";
  photo.src = "assets/Image/chand.jpg";
  song.src = "assets/Songs/chand.mp3";
  songName.innerText = "Chand Baliyan";
  songBy.innerText = "Aditya A";
  title.innerText = "Chand Baliyan";
  download.href = "assets/Songs/chand.mp3";
  aboutSong.innerText = "Music has the power to uplift your mood and also makes you feel  the warmth of emotions in the most memorable ways. 'Chand Baliyan' was released in 2023.";
});

buttons[11].addEventListener("click", () => {
  icon.src = "assets/Image/play.png";
  photo.src = "assets/Image/aisay.jpeg";
  song.src = "assets/Songs/aisay.mp3";
  songName.innerText = "Aisay Kaisay";
  songBy.innerText = "Hasan Raheem & Abdullah Kasumbi";
  title.innerText = "Aisay Kaisay";
  download.href = "assets/Songs/aisay.mp3";
  aboutSong.innerText = "Music has the power to uplift your mood and also makes you feel  the warmth of emotions in the most memorable ways. 'Aisay Kaisay' was released in 2020.";
});

buttons[12].addEventListener("click", () => {
  icon.src = "assets/Image/play.png";
  photo.src = "assets/Image/Mharaj.jpeg";
  song.src = "assets/Songs/ti-talwar.mp3";
  songName.innerText = "Ti Talwar";
  songBy.innerText = "MusicDirector";
  title.innerText = "Shreyas Talpade";
  download.href = "assets/Songs/ti-talwar.mp3";
  aboutSong.innerText = "Dec 21, 2016 · Presenting Superhit Marathi Songs of 'Ti Talwar (Powada)' feat Shreyas Talpade from Marathi Movie 'Baghtos Kay Mujra Kar'. Sung by Adarsh Shinde and composed by Amitraj. …";
});






