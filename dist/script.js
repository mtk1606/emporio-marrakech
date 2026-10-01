const cards=Array.from(document.querySelectorAll('[data-image]'));
const dialog=document.querySelector('dialog');
let current=0;
function show(index){current=(index+cards.length)%cards.length;const card=cards[current];dialog.querySelector('img').src=card.querySelector('img').src;dialog.querySelector('img').alt=card.querySelector('img').alt;document.querySelector('#image-count').textContent=`${current+1} / ${cards.length}`;}
cards.forEach((card,index)=>card.addEventListener('click',()=>{show(index);dialog.showModal();document.body.style.overflow='hidden';}));
dialog.querySelector('.close').addEventListener('click',()=>dialog.close());
dialog.addEventListener('close',()=>document.body.style.overflow='');
dialog.addEventListener('click',event=>{if(event.target===dialog){const r=dialog.getBoundingClientRect();if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)dialog.close();}});
document.querySelector('#previous').addEventListener('click',()=>show(current-1));
document.querySelector('#next').addEventListener('click',()=>show(current+1));
dialog.addEventListener('keydown',event=>{if(event.key==='ArrowRight')show(current+1);if(event.key==='ArrowLeft')show(current-1);});
