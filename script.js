*{
margin:0;
padding:0;
box-sizing:border-box;
font-family:'Inter',sans-serif;
}

body{
background:
radial-gradient(circle at top right,#2563eb33,transparent 30%),
radial-gradient(circle at bottom left,#06b6d433,transparent 30%),
#050816;

min-height:100vh;
color:white;
overflow-x:hidden;
}

.container{
width:min(1200px,92%);
margin:auto;
padding:40px 0;
}

.logo{
display:flex;
align-items:center;
gap:12px;
}

.logo i{
font-size:2rem;
color:#22d3ee;
}

header{
display:flex;
justify-content:space-between;
align-items:center;
margin-bottom:40px;
}

h1{
font-size:3rem;
font-weight:800;
background:linear-gradient(90deg,#22d3ee,#60a5fa);
-webkit-background-clip:text;
-webkit-text-fill-color:transparent;
}

#clock{
padding:10px 18px;
border-radius:20px;
background:rgba(255,255,255,.05);
backdrop-filter:blur(20px);
border:1px solid rgba(255,255,255,.1);
}

.search-box{
position:relative;
margin-bottom:50px;
}

.search-box input{
width:100%;
padding:18px 20px 18px 55px;
font-size:1rem;
border:none;
outline:none;
border-radius:25px;

background:rgba(255,255,255,.08);
backdrop-filter:blur(25px);

color:white;

border:1px solid rgba(255,255,255,.1);
}

.search-box i{
position:absolute;
left:20px;
top:50%;
transform:translateY(-50%);
color:#9ca3af;
}

section{
margin-bottom:50px;
}

section h2{
margin-bottom:20px;
font-size:1.5rem;
color:#e5e7eb;
}

.links{
display:grid;
grid-template-columns:repeat(auto-fill,minmax(260px,1fr));
gap:22px;
}

.card{
text-decoration:none;
color:white;

padding:24px;

border-radius:24px;

background:rgba(255,255,255,.06);
backdrop-filter:blur(25px);

border:1px solid rgba(255,255,255,.08);

transition:all .3s ease;

position:relative;
overflow:hidden;
}

.card::before{
content:"";
position:absolute;
top:0;
left:-100%;
width:100%;
height:100%;

background:
linear-gradient(
90deg,
transparent,
rgba(255,255,255,.1),
transparent
);

transition:.7s;
}

.card:hover::before{
left:100%;
}

.card:hover{
transform:translateY(-8px);

box-shadow:
0 10px 40px rgba(37,99,235,.35),
0 0 20px rgba(34,211,238,.25);

border-color:rgba(96,165,250,.4);
}

.card i{
font-size:2rem;
margin-bottom:15px;
color:#22d3ee;
display:block;
}

.card h3{
margin-bottom:10px;
font-size:1.1rem;
}

.card p{
color:#9ca3af;
font-size:.9rem;
}

.bg-ball{
position:fixed;

width:500px;
height:500px;

background:
radial-gradient(circle,#2563eb,#06b6d4);

filter:blur(150px);

top:-150px;
right:-150px;

opacity:.4;

pointer-events:none;

animation:float 10s ease-in-out infinite;
}

@keyframes float{
0%,100%{
transform:translateY(0);
}
50%{
transform:translateY(40px);
}
}

::-webkit-scrollbar{
width:8px;
}

::-webkit-scrollbar-thumb{
background:#2563eb;
border-radius:20px;
}
