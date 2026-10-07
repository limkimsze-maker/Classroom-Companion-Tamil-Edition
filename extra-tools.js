'use strict';
DIRECT['custom-text']='custom-text.html?edition=ta';
DIRECT['whiteboard']='whiteboard.html?edition=ta';
const EXTRA_TOOLS=[
 {slug:'custom-text',icon:'📝',title:'தனிப்பயன் உரை / வழிமுறைகள்',mode:'half'},
 {slug:'whiteboard',icon:'✏️',title:'வெண்பலகை',mode:'full'}
];
let extraInsertAt=4;
for(const t of EXTRA_TOOLS){
 const b=document.createElement('button');
 b.type='button';b.className='tool '+t.mode;
 b.innerHTML=`<span class="icon">${t.icon}</span><span class="name">${t.title}</span><span class="modeDot"></span>`;
 b.setAttribute('aria-label',t.title);b.onclick=()=>openTool(t);
 grid.insertBefore(b,grid.children[extraInsertAt]||null);extraInsertAt++;
 buttons.set(t.slug,b);
}
