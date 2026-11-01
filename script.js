const $=(s,r=document)=>r.querySelector(s);const $$=(s,r=document)=>[...r.querySelectorAll(s)];
const welcome=$('#welcome'),enter=$('#enterSite'),nav=$('#nav'),dock=$('#musicDock'),audio=$('#soundtrack'),toggle=$('#musicToggle'),status=$('#musicStatus');
audio.volume=.32;

async function playMusic(){try{await audio.play();dock.classList.remove('paused');toggle.textContent='❚❚';status.textContent='Pleasure Tsa Manyalo • playing softly';$('#songButton').innerHTML='Pause soundtrack <span>❚❚</span>'}catch(e){dock.classList.add('paused');toggle.textContent='♪';status.textContent='tap to play';$('#songButton').innerHTML='Play soundtrack <span>♪</span>'}}
function pauseMusic(){audio.pause();dock.classList.add('paused');toggle.textContent='♪';status.textContent='paused';$('#songButton').innerHTML='Play soundtrack <span>♪</span>'}
enter.addEventListener('click',()=>{playMusic();confetti(55);welcome.classList.add('hide');document.body.classList.remove('locked');nav.classList.add('show');dock.classList.add('show')});
toggle.addEventListener('click',()=>audio.paused?playMusic():pauseMusic());$('#songButton').addEventListener('click',()=>audio.paused?playMusic():pauseMusic());

const loves=[
'Your smile. It has a way of making a normal photo feel warmer than it has any right to.',
'Your playful side. I love that you can be beautiful and still completely unserious five seconds later.',
'The way you carry yourself. There is softness there, but there is strength too.',
'Your face when you are not trying to pose. The unplanned version of you is one of my favourites.',
'Your style. You somehow make simple things feel intentional.',
'The fact that being around you can make an ordinary moment feel worth remembering.',
'Your confidence when it shows up properly. I hope you never make yourself smaller for anyone.',
'Your softness. Not everyone gets to see it, which makes being trusted with it mean more.',
'The way you can look elegant without losing the part of you that is still playful and silly.',
'Your presence. Sometimes just having you next to me is enough.',
'Your beauty, obviously. I was never going to pretend that part does not matter to me.',
'The little moments when you are comfortable enough to stop performing and simply be yourself.',
'The way you make me want to keep photos I would normally forget about.',
'The fact that our memories do not need to be dramatic to matter to me.',
'The version of you that laughs properly—the one who forgets to worry about how she looks.',
'The way affection feels different when it comes from you.',
'Your independence. Loving you should add to who you are, never reduce you.',
'The parts of you I am still getting to know. I like that you can still surprise me.',
'The way you can make me miss you even when I am trying very hard to act normal about it.',
'The fact that somewhere along the way, “you” started feeling connected to “us.”',
'The person you are becoming. I hope 22 gives her room to become even more herself.',
'Simply you, Elgene. If I had to reduce all of this to one thing, I am grateful that I get to love you.'
];
const grid=$('#loveGrid'),opened=new Set();loves.forEach((text,i)=>{const card=document.createElement('article');card.className='love-card reveal';card.tabIndex=0;card.setAttribute('role','button');card.innerHTML=`<div class="love-inner"><div class="love-front"><strong>${String(i+1).padStart(2,'0')}</strong><span>${i===21?'the last one':'tap to open'}</span></div><div class="love-back"><p>${text}</p></div></div>`;const flip=()=>{card.classList.toggle('open');card.classList.contains('open')?opened.add(i):opened.delete(i);$('#openedCount').textContent=opened.size;if(i===21&&card.classList.contains('open'))confetti(70)};card.addEventListener('click',flip);card.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();flip()}});grid.appendChild(card)});

const notes={
miss:{title:'You miss me',text:`<p>Come here.</p><p>If I am not physically close enough for you to steal my attention, then let this be the next best thing: you are being thought about.</p><p>Send the message. Make the call. You do not need a clever reason.</p><p>I would rather know that you miss me than have you sit there pretending you do not.</p>`},
beauty:{title:'You do not feel beautiful',text:`<p>I wish you could borrow my eyes for a minute.</p><p>Not because I think beauty is the most important thing about you, but because on the days you cannot see it, I still can.</p><p>You do not need the perfect outfit, perfect hair, perfect lighting or anyone else's approval to be worth looking at with love.</p><p>You are beautiful. And you are much more than beautiful.</p>`},
hard:{title:'You have had a bad day',text:`<p>One bad day is not evidence of a bad life.</p><p>Rest. Eat something. Cry if you need to. Be quiet if you need to. You are allowed to have days where you do not perform strength for anybody.</p><p>You can try again tomorrow. I will still be rooting for you then too.</p>`},
overthink:{title:'You are overthinking',text:`<p>Your brain has probably already written seventeen different versions of what could go wrong.</p><p>Come back to what is actually true right now. Breathe. You do not need to solve every future problem tonight.</p><p>And if the thing you are overthinking is us, talk to me. I would rather have the uncomfortable conversation than let silence invent answers for us.</p>`},
angry:{title:'You are angry with me',text:`<p>I am going to assume I did something annoying. This is statistically possible.</p><p>Whatever brought you here, I want you to remember something: winning against you matters less to me than understanding you.</p><p>Be angry if you need to be. Tell me what hurt. Let me listen properly.</p><p>I would rather repair something honestly than pretend nothing happened.</p>`},
birthday:{title:'It is your 22nd birthday',text:`<p>Elgene Jamelia Januarie, you are officially 22.</p><p>Today, I hope you let yourself receive love without trying to minimise it. Let people celebrate you. Let yourself be proud of the person who made it here.</p><p>May this chapter bring you peace, good people, growth, answered prayers, laughter, softness and moments that make you stop and think, “I am glad I am here.”</p><p>Happy birthday, beautiful. Welcome to Chapter 22. 🤎</p>`}
};
const noteModal=$('#noteModal');$$('.open-card').forEach(b=>b.addEventListener('click',()=>{const n=notes[b.dataset.note];$('#noteTitle').textContent=n.title;$('#noteText').innerHTML=n.text;noteModal.classList.add('show');noteModal.setAttribute('aria-hidden','false');document.body.classList.add('locked')}));function closeNote(){noteModal.classList.remove('show');noteModal.setAttribute('aria-hidden','true');if(!$('#gallery').classList.contains('show')&&!$('#secretModal').classList.contains('show'))document.body.classList.remove('locked')}$('#closeNote').addEventListener('click',closeNote);noteModal.addEventListener('click',e=>{if(e.target===noteModal)closeNote()});

const secret=$('#secretModal');$('#secretButton').addEventListener('click',()=>{secret.classList.add('show');secret.setAttribute('aria-hidden','false');document.body.classList.add('locked')});function closeSecret(){secret.classList.remove('show');secret.setAttribute('aria-hidden','true');document.body.classList.remove('locked')}$('#closeSecret').addEventListener('click',closeSecret);secret.addEventListener('click',e=>{if(e.target===secret)closeSecret()});

const photos=[
{src:'images/playful.jpg',label:'PLAYFUL US',caption:'The kind of picture that proves we do not always need to take ourselves seriously.'},
{src:'images/reflection1.jpg',label:'A REFLECTION',caption:'Somewhere between the glass, the sky and the moment—there we were.'},
{src:'images/feet.jpg',label:'ORDINARY DAYS',caption:'Two people, one place, and a completely ordinary moment I still wanted to keep.'},
{src:'images/mirror.jpg',label:'US',caption:'One of those photos that says more to me because both of us are in it.'},
{src:'images/reflection2.jpg',label:'TOGETHER',caption:'Accidentally framed by everything around us.'},
{src:'images/closeup.jpg',label:'CLOSE',caption:'No elaborate setting. Just close enough to annoy each other properly.'},
{src:'images/elgene.jpg',label:'ELGENE',caption:'And then there is simply you—the reason this little world exists.'}
];
const gallery=$('#gallery'),gimg=$('#galleryImage'),glabel=$('#galleryLabel'),gcap=$('#galleryCaption'),gcounter=$('#galleryCounter'),thumbs=$('#thumbs');let current=0;photos.forEach((p,i)=>{const b=document.createElement('button');b.className='thumb';b.innerHTML=`<img src="${p.src}" alt="Memory ${i+1}">`;b.addEventListener('click',()=>showPhoto(i));thumbs.appendChild(b)});function showPhoto(i){current=(i+photos.length)%photos.length;const p=photos[current];gimg.src=p.src;gimg.alt=p.caption;glabel.textContent=p.label;gcap.textContent=p.caption;gcounter.textContent=`${String(current+1).padStart(2,'0')} / ${String(photos.length).padStart(2,'0')}`;$$('.thumb',thumbs).forEach((t,j)=>t.classList.toggle('active',j===current));$$('.thumb',thumbs)[current]?.scrollIntoView({behavior:'smooth',inline:'center',block:'nearest'})}function openGallery(i=0){showPhoto(i);gallery.classList.add('show');gallery.setAttribute('aria-hidden','false');document.body.classList.add('locked')}function closeGallery(){gallery.classList.remove('show');gallery.setAttribute('aria-hidden','true');document.body.classList.remove('locked')}$$('.memory').forEach(m=>{const i=Number(m.dataset.index||0);$('.plus',m).addEventListener('click',e=>{e.stopPropagation();openGallery(i)});$('img',m).addEventListener('click',()=>openGallery(i))});$('#openAlbum').addEventListener('click',()=>openGallery(0));$('#closeGallery').addEventListener('click',closeGallery);$('#prevPhoto').addEventListener('click',()=>showPhoto(current-1));$('#nextPhoto').addEventListener('click',()=>showPhoto(current+1));let touchX=null;gallery.addEventListener('touchstart',e=>touchX=e.changedTouches[0].clientX,{passive:true});gallery.addEventListener('touchend',e=>{if(touchX===null)return;const d=e.changedTouches[0].clientX-touchX;if(Math.abs(d)>50)showPhoto(current+(d<0?1:-1));touchX=null},{passive:true});

const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target)}}),{threshold:.1,rootMargin:'0px 0px -30px 0px'});$$('.reveal').forEach(el=>observer.observe(el));
function confetti(n=100){const colors=['#a66d67','#c8a66a','#f5ede5','#6f4938','#ffffff'];for(let i=0;i<n;i++){const p=document.createElement('i');p.className='confetti';p.style.left=`${Math.random()*100}vw`;p.style.background=colors[Math.floor(Math.random()*colors.length)];p.style.setProperty('--dur',`${2.5+Math.random()*2.6}s`);p.style.setProperty('--drift',`${-130+Math.random()*260}px`);document.body.appendChild(p);setTimeout(()=>p.remove(),6000)}}$('#celebrate').addEventListener('click',()=>confetti(180));
function progress(){const max=document.documentElement.scrollHeight-innerHeight;$('#progress').style.width=`${max>0?scrollY/max*100:0}%`}addEventListener('scroll',progress,{passive:true});progress();
document.addEventListener('keydown',e=>{if(e.key==='Escape'){if(noteModal.classList.contains('show'))closeNote();if(secret.classList.contains('show'))closeSecret();if(gallery.classList.contains('show'))closeGallery()}if(gallery.classList.contains('show')&&e.key==='ArrowLeft')showPhoto(current-1);if(gallery.classList.contains('show')&&e.key==='ArrowRight')showPhoto(current+1)});
