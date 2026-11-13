const $=(s,r=document)=>r.querySelector(s);const $$=(s,r=document)=>[...r.querySelectorAll(s)];
const year=$('#year');if(year)year.textContent=new Date().getFullYear();
const menu=$('.menu-toggle');if(menu)menu.addEventListener('click',()=>$('.site-header').classList.toggle('nav-open'));
const search=$('#toolSearch'),cards=$$('.tool-card'),tabs=$$('.category-tabs button');let category='all';
function filterTools(){if(!search)return;const q=search.value.toLowerCase().trim();let shown=0;cards.forEach(c=>{const ok=(category==='all'||c.dataset.category===category)&&(!q||(c.dataset.search+' '+c.innerText).toLowerCase().includes(q));c.hidden=!ok;if(ok)shown++});$('#noResults').hidden=shown>0}
if(search)search.addEventListener('input',filterTools);tabs.forEach(b=>b.addEventListener('click',()=>{tabs.forEach(x=>x.classList.remove('active'));b.classList.add('active');category=b.dataset.category;filterTools()}));$$('.quick-tags button').forEach(b=>b.addEventListener('click',()=>{if(search){search.value=b.dataset.filter;category='all';tabs.forEach(x=>x.classList.toggle('active',x.dataset.category==='all'));filterTools();search.focus()}}));
