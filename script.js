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

function buildCards(list,id){

    const container=document.getElementById(id);

    list.forEach(link=>{

        const hostname=new URL(link).hostname.replace("www.","");

        const card=document.createElement("a");

        card.href=link;
        card.target="_blank";

        card.className="card";

        card.innerHTML=`
            <i class="fa-solid fa-globe"></i>
            <h3>${hostname}</h3>
            <p>Click to open</p>
        `;

        container.appendChild(card);
    });
}

buildCards(liveSites,"live-links");
buildCards(replaySites,"replay-links");

const searchInput=document.getElementById("searchInput");

searchInput.addEventListener("keyup",()=>{

    const value=searchInput.value.toLowerCase();

    document.querySelectorAll(".card").forEach(card=>{

        card.style.display=
        card.innerText.toLowerCase().includes(value)
        ? "block"
        : "none";

    });

});

function updateClock(){

    document.getElementById("clock").innerHTML=
    new Date().toLocaleTimeString();

}

setInterval(updateClock,1000);
updateClock();