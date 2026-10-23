/* ---------- Langue (boutons FR / EN, choix mémorisé d'une page à l'autre) ---------- */
(function(){
  const root=document.documentElement;
  function set(l){root.lang=l;document.querySelectorAll('.lang button').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.l===l)));try{localStorage.setItem('lang',l)}catch(e){}}
  set(root.lang==='en'?'en':'fr');
  document.querySelectorAll('.lang button').forEach(b=>b.addEventListener('click',()=>set(b.dataset.l)));
})();

/* ---------- Thème : auto (système) -> clair -> sombre, choix mémorisé ---------- */
(function(){
  const root=document.documentElement,b=document.querySelector('.theme');if(!b)return;
  const ICON={auto:'◐',light:'☀',dark:'☾'},NAME={fr:{auto:'auto (système)',light:'clair',dark:'sombre'},en:{auto:'auto (system)',light:'light',dark:'dark'}};
  const cur=()=>root.dataset.theme||'auto';
  function show(){const t=cur(),l=root.lang==='en'?'en':'fr',lab=(l==='en'?'Theme: ':'Thème : ')+NAME[l][t];
    b.textContent=ICON[t];b.title=lab;b.setAttribute('aria-label',lab);}
  b.addEventListener('click',()=>{const n={auto:'light',light:'dark',dark:'auto'}[cur()];
    if(n==='auto')delete root.dataset.theme;else root.dataset.theme=n;
    try{n==='auto'?localStorage.removeItem('theme'):localStorage.setItem('theme',n);}catch(e){}
    show();document.dispatchEvent(new Event('themechange'));});
  matchMedia('(prefers-color-scheme: light)').addEventListener('change',()=>document.dispatchEvent(new Event('themechange')));
  document.querySelectorAll('.lang button').forEach(x=>x.addEventListener('click',show));
  show();
})();

const reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
const themeNow=()=>document.documentElement.dataset.theme||(matchMedia('(prefers-color-scheme: light)').matches?'light':'dark');

/* vidéo dans la version du thème actif (media/x.* ou media/x_light.*) ; au changement, reprend au même instant */
function videoTheme(v){
  const base=v.dataset.base+(themeNow()==='light'?'_light':'');
  if(v.dataset.cur===base)return;
  const first=!v.dataset.cur,t=v.currentTime,play=first?!reduce:!v.paused;
  const q=v.dataset.v?'?v='+v.dataset.v:'';                 // version : évite une vidéo périmée en cache
  v.dataset.cur=base;v.poster=base+'_poster.jpg'+q;
  v.innerHTML=`<source src="${base}.webm${q}" type="video/webm"><source src="${base}.mp4${q}" type="video/mp4">`;
  v.load();
  v.addEventListener('loadedmetadata',()=>{if(!first)v.currentTime=t;if(play)v.play().catch(()=>v.dispatchEvent(new Event('pause')));},{once:true});
}

/* ---------- Simulations : vidéo + étiquettes HTML calées sur une piste (media/*_tracks.js) ---------- */
// T[clé] : [u,v] fixe, ou [[u,v,visibilité], …] image par image (u,v : fractions de la vidéo).
// DD.wide / DD.small[clé] : longueur du trait en fraction de la hauteur vidéo ; 0 = étiquette masquée.
function simVideo(id,T,DD,pos,onFrame){
  const v=document.getElementById(id);if(!v)return;
  videoTheme(v);document.addEventListener('themechange',()=>videoTheme(v));
  const box=v.parentElement,A={};box.querySelectorAll('.ann').forEach(e=>A[e.dataset.k]=e);
  const small=matchMedia('(max-width:640px)');
  function place(k){
    if(!T)return;
    const D=small.matches?DD.small:DD.wide;
    const w=box.clientWidth,h=box.clientHeight,s=Math.max(w/T.w,h/T.h);
    const ox=(w-T.w*s)*pos[0],oy=(h-T.h*s)*pos[1];              // object-position
    const dur=T.n/T.fps,t=k/T.fps,fade=Math.max(0,Math.min(1,t/T.fade,(dur-t)/T.fade));
    for(const key in A){
      const tr=T[key],el=A[key],p=tr&&(typeof tr[0]==='number'?tr:tr[k]);
      if(!p){el.style.opacity=0;continue;}
      const x=ox+p[0]*T.w*s,y=oy+p[1]*T.h*s,vis=(p.length>2?p[2]:1)*fade;
      const inside=x>24&&x<w-24&&y>0&&y<h;
      el.style.transform=`translate(${x.toFixed(1)}px,${y.toFixed(1)}px)`;
      el.style.setProperty('--d',((D[key]||0)*T.h*s).toFixed(0)+'px');
      el.style.opacity=inside&&D[key]?vis.toFixed(2):0;
      if(el.classList.contains('side'))el.classList.toggle('flip',x>w*.72);
    }
    onFrame&&onFrame(k,box,s);
  }
  const idx=time=>Math.max(0,Math.min(T.n-1,Math.floor(time*T.fps)));
  // bouton pause / lecture (grand format)
  const pp=box.querySelector('.pp');
  if(pp)pp.addEventListener('click',()=>{v.paused?v.play().catch(()=>{}):v.pause();});
  v.addEventListener('play',()=>{if(pp)pp.textContent='❚❚';});
  // vidéo à l'arrêt (lecture auto bloquée sur mobile, pause) : étiquettes calées sur l'image affichée
  // (à l'instant 0 l'image est vide : on se place sur l'image de l'affiche)
  const still=()=>{if(!T||!v.paused)return;
    if(v.currentTime<1/T.fps&&v.readyState>=1)v.currentTime=(T.poster+.5)/T.fps;else place(idx(v.currentTime));};
  v.addEventListener('seeked',()=>{if(T&&v.paused)place(idx(v.currentTime));});
  v.addEventListener('pause',()=>{if(pp)pp.textContent='▶';still();});
  v.addEventListener('loadedmetadata',still);v.addEventListener('loadeddata',still);
  still();
  if(reduce){                                           // image fixe = affiche, étiquettes calées dessus
    if(T){const go=()=>{v.currentTime=(T.poster+.5)/T.fps;};go();v.addEventListener('loadedmetadata',go);
      const draw=()=>place(T.poster);draw();addEventListener('resize',draw);}return;}
  document.addEventListener('visibilitychange',()=>{if(document.hidden)v.pause();else if(!pp||pp.textContent!=='▶')v.play().catch(()=>{});});
  if(!T)return;
  if('requestVideoFrameCallback' in HTMLVideoElement.prototype){
    const cb=(now,md)=>{place(idx(md.mediaTime));v.requestVideoFrameCallback(cb);};
    v.requestVideoFrameCallback(cb);
  }else{
    (function loop(){if(!document.hidden)place(idx(v.currentTime));requestAnimationFrame(loop);})();
  }
  addEventListener('resize',()=>v.paused?still():place(idx(v.currentTime)));
}

/* CME : simulation MPI-AMRVAC (plan équatorial), Terre placée sur l'axe de la CME */
simVideo('cme',window.CME_TRACKS,
  {wide:{sun:.07,earth:.07,shock:.04,cme:.05},small:{earth:.07,shock:.03,cme:.04}},[0,.45],
  (k,box)=>{const d=window.CME_TRACKS.day[k];
    box.querySelectorAll('.day').forEach(e=>e.textContent=d.toLocaleString(e.dataset.l,{minimumFractionDigits:1,maximumFractionDigits:1}));});

/* LWFA : simulation Smilei, fenêtre recalée sur un référentiel à c */
simVideo('lwfa',window.LWFA_TRACKS,
  {wide:{laser:.2,bunch:.1},small:{laser:.13,bunch:.09}},[.6,.5],
  (k,box)=>{const T=window.LWFA_TRACKS,m=box.querySelector('.mev');if(m)m.textContent=T.E[k];
    box.style.setProperty('--p',(k/(T.n-1)).toFixed(4));
    const tv=box.querySelector('.tv');if(tv)tv.textContent=T.travel_um+' µm';});

/* Lecture guidée : <button class="seek" data-sim="cme" data-day="0.5"> (jours simulés) ou data-frac="0.3" (fraction de la vidéo) */
document.querySelectorAll('.seek').forEach(b=>b.addEventListener('click',()=>{
  const v=document.getElementById(b.dataset.sim),T=window[b.dataset.sim.toUpperCase()+'_TRACKS'];if(!v||!T)return;
  let k;if(b.dataset.frac!=null)k=Math.round(parseFloat(b.dataset.frac)*(T.n-1));
  else{const d=parseFloat(b.dataset.day);k=T.day.findIndex(x=>x>=d);if(k<0)k=0;}
  v.currentTime=(k+.5)/T.fps;v.play().catch(()=>{});
  const st=v.closest('.stage')||v;if(st.getBoundingClientRect().top<0)st.scrollIntoView({behavior:reduce?'auto':'smooth',block:'start'});
}));

/* ---------- Figures : petits multiples (axe horizontal commun, curseur + infobulle, tableau) ---------- */
// cfg : x (clé), xfr/xen (titre de l'axe), xstep (graduations), panels [{k, fr, en, u, d, max}], bands [{a, b, fr, en, cls}]
function smallMultiples(box,D,cfg){
  const fr=()=>document.documentElement.lang!=='en',P=cfg.panels,xs=D[cfg.x];
  const W=680,ph=92,gap=18,top=26,L=54,R=12,H=top+P.length*ph+(P.length-1)*gap+34,x0=xs[0],x1=xs[xs.length-1];
  const X=t=>L+(W-L-R)*(t-x0)/(x1-x0);
  const ns='http://www.w3.org/2000/svg',el=(n,a,p)=>{const e=document.createElementNS(ns,n);for(const k in a)e.setAttribute(k,a[k]);p&&p.appendChild(e);return e;};
  const svg=el('svg',{viewBox:`0 0 ${W} ${H}`,class:'chart-svg'});box.appendChild(svg);
  const label=(p,x,y,f,e,a={})=>{const g=el('g',{},p),c=a.class||'';[['fr',f],['en',e]].forEach(([l,t])=>{el('text',Object.assign({},a,{x,y,class:(c+' '+l).trim()}),g).textContent=t;});};
  const yb=top+P.length*ph+(P.length-1)*gap;
  (cfg.bands||[]).forEach(b=>{el('rect',{x:X(b.a),y:top,width:X(b.b)-X(b.a),height:yb-top,class:b.cls},svg);
    label(svg,(X(b.a)+X(b.b))/2,top-9,b.fr,b.en,{class:'band-lab','text-anchor':'middle'});});
  const ys=[],val=(p,j)=>p.max!=null?Math.min(D[p.k][j],p.max):D[p.k][j];
  P.forEach((p,i)=>{
    const y0=top+i*(ph+gap),v=D[p.k].map((_,j)=>val(p,j)),lo=Math.min(...v),hi=Math.max(...v),pad=(hi-lo)*.12,a=lo-pad,b=hi+pad;
    const Y=x=>y0+ph-(x-a)/(b-a)*ph;ys.push(Y);
    el('line',{x1:L,x2:W-R,y1:y0+ph,y2:y0+ph,class:'axis'},svg);
    if(lo<0&&hi>0)el('line',{x1:L,x2:W-R,y1:Y(0),y2:Y(0),class:'axis zero'},svg);
    [lo,hi].forEach(t=>{el('text',{x:L-6,y:Y(t)+4,class:'tick','text-anchor':'end'},svg).textContent=t.toFixed(p.d);});
    const unit=p.u?' ('+p.u.trim()+')':'';
    label(svg,L+4,y0+11,p.fr+unit,p.en+unit,{class:'plab'});
    el('path',{d:v.map((x,j)=>(j?'L':'M')+X(xs[j]).toFixed(1)+' '+Y(x).toFixed(1)).join(''),class:'line'},svg);
  });
  for(let t=Math.ceil(x0/cfg.xstep)*cfg.xstep;t<=x1+1e-9;t+=cfg.xstep){el('line',{x1:X(t),x2:X(t),y1:yb,y2:yb+4,class:'axis'},svg);el('text',{x:X(t),y:yb+16,class:'tick','text-anchor':'middle'},svg).textContent=t;}
  label(svg,W-R,yb+30,cfg.xfr,cfg.xen,{class:'tick','text-anchor':'end'});
  const cur=el('line',{y1:top,y2:yb,class:'cursor',visibility:'hidden'},svg);
  const dots=P.map(()=>el('circle',{r:4,class:'dot',visibility:'hidden'},svg));
  const tip=document.createElement('div');tip.className='tip';tip.hidden=true;box.appendChild(tip);
  const hit=el('rect',{x:L,y:top,width:W-L-R,height:yb-top,fill:'transparent'},svg);
  hit.addEventListener('pointermove',ev=>{
    const r=svg.getBoundingClientRect(),t=x0+((ev.clientX-r.left)*W/r.width-L)/(W-L-R)*(x1-x0);
    let j=0;xs.forEach((x,i)=>{if(Math.abs(x-t)<Math.abs(xs[j]-t))j=i;});
    const x=X(xs[j]);cur.setAttribute('x1',x);cur.setAttribute('x2',x);cur.setAttribute('visibility','visible');
    dots.forEach((d,i)=>{d.setAttribute('cx',x);d.setAttribute('cy',ys[i](val(P[i],j)));d.setAttribute('visibility','visible');});
    const f=fr(),num=(x,d)=>x.toLocaleString(f?'fr':'en',{minimumFractionDigits:d,maximumFractionDigits:d});
    tip.innerHTML=`<b>${num(xs[j],1)} ${cfg.xu}</b>`+P.map(p=>`<span>${f?p.fr:p.en}</span><span>${num(D[p.k][j],p.d)}${p.u}</span>`).join('');
    tip.hidden=false;const bx=box.getBoundingClientRect();
    tip.style.left=Math.min(ev.clientX-bx.left+14,bx.width-tip.offsetWidth-4)+'px';tip.style.top='8px';
  });
  hit.addEventListener('pointerleave',()=>{tip.hidden=true;cur.setAttribute('visibility','hidden');dots.forEach(d=>d.setAttribute('visibility','hidden'));});
  const tb=box.parentElement.querySelector('.tbl');
  if(tb)tb.innerHTML='<table><thead><tr><th>'+cfg.xu+'</th>'+P.map(p=>`<th>${p.sym}</th>`).join('')+'</tr></thead><tbody>'+
    xs.map((t,i)=>`<tr><td>${t}</td>`+P.map(p=>`<td>${D[p.k][i]}</td>`).join('')+'</tr>').join('')+'</tbody></table>';
}
document.querySelectorAll('[data-chart="cme1au"]').forEach(b=>window.CME_1AU&&smallMultiples(b,window.CME_1AU,{
  x:'t',xu:'h',xstep:24,xfr:'heures depuis l’injection',xen:'hours since injection',
  bands:[{a:28,b:50,fr:'gaine',en:'sheath',cls:'band-sheath'},{a:50,b:130,fr:'éjecta',en:'ejecta',cls:'band-ejecta'}],
  panels:[{k:'n',sym:'n/n₀',fr:'densité / vent calme',en:'density / quiet wind',u:'',d:2},
          {k:'B',sym:'B (nT)',fr:'champ magnétique',en:'magnetic field',u:' nT',d:1},
          {k:'v',sym:'v (km/s)',fr:'vitesse radiale',en:'radial speed',u:' km/s',d:0}]}));
document.querySelectorAll('[data-chart="lwfa-axis"]').forEach(b=>window.LWFA_AXIS&&smallMultiples(b,window.LWFA_AXIS,{
  x:'xi',xu:'µm',xstep:5,xfr:'position derrière l’avant de la fenêtre (µm)',xen:'position behind the front of the window (µm)',
  panels:[{k:'a',sym:'a',fr:'laser : amplitude normalisée a',en:'laser: normalised amplitude a',u:'',d:1},
          {k:'n',sym:'n/n₀',fr:'densité électronique / n₀ (écrêtée à 6)',en:'electron density / n₀ (clipped at 6)',u:'',d:1,max:6},
          {k:'Ex',sym:'Eₓ (GV/m)',fr:'champ longitudinal Eₓ',en:'longitudinal field Eₓ',u:' GV/m',d:0}]}));
