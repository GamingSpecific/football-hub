
const liveSites = [
"https://roxiestreams.su",
"https://www.bintv.net/",
"https://v2.sportsurge.net/home5",
"https://score808hd.tv/",
"https://s1.sportsurge.pk/",
"https://dami-tv.pro/",
"https://streamcorner.fyi/",
"https://strumyk.net/",
"https://streamninja.xyz/",
"https://xyzstreams.shop/"
];

const replaySites = [
"https://replay-exc.pages.dev/",
"https://www.footballorgin.com/",
"https://fullmatchshows.com/",
"https://soccerfull.net/",
"https://www.reddit.com/r/footballhighlights/"
];

function createCards(sites, containerId){

const container = document.getElementById(containerId);

sites.forEach(site => {

const hostname = new URL(site).hostname.replace("www.","");

const card = document.createElement("a");

card.href = site;
card.target = "_blank";

card.className = "card";

card.innerHTML = `
<i class="fa-solid fa-trophy"></i>
<h3>${hostname}</h3>
<p>Open Website</p>
`;

container.appendChild(card);

});
}

createCards(liveSites,"live-links");
createCards(replaySites,"replay-links");

const searchInput = document.getElementById("searchInput");

searchInput.addEventListener("input", () => {

const search = searchInput.value.toLowerCase();

document.querySelectorAll(".card").forEach(card => {

const text = card.innerText.toLowerCase();

card.style.display =
text.includes(search)
? "block"
: "none";

});

});

function updateClock(){
document.getElementById("clock").textContent =
new Date().toLocaleTimeString();
}

updateClock();
setInterval(updateClock,1000);
