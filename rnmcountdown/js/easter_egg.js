var myAudio = new Audio('js/PoopyButthole.ogg');
function playVid() {
  document.getElementById("bgvid").play();
}
function loadVid() {
    document.getElementById("bgvid").load();
}
function pauseVid() {
    document.getElementById("bgvid").pause();
}
new KonamiCode(function () {
  myAudio.addEventListener('ended', function() {
      this.currentTime = 0;
      this.play();
  }, false);
myAudio.play();
pauseVid()
document.getElementById('video').src = "RGB.mp4";
loadVid()
setTimeout(function(){
playVid()
}, 2000);
var rnmep = document.querySelector("#rnmep");
rnmep.classList.add("rainbow");
var days = document.querySelector("#days");
days.classList.add("rainbow");
var hours = document.querySelector("#hours");
hours.classList.add("rainbow");
var minutes = document.querySelector("#minutes");
minutes.classList.add("rainbow");
var seconds = document.querySelector("#seconds");
seconds.classList.add("rainbow");
var dsmalltext = document.querySelector("#dsmalltext");
dsmalltext.classList.add("rainbow");
var hsmalltext = document.querySelector("#hsmalltext");
hsmalltext.classList.add("rainbow");
var msmalltext = document.querySelector("#msmalltext");
msmalltext.classList.add("rainbow");
var ssmalltext = document.querySelector("#ssmalltext");
ssmalltext.classList.add("rainbow");
});
