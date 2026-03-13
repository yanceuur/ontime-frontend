/* ═══════════════════════════════════════════
   ONTIME TRANSFERT — SHARED JS
   Navigation, Sidebar, Réserver dropdown
═══════════════════════════════════════════ */

/* ─── RÉSERVER DROPDOWN ─── */
function toggleReserver(e){
  e.preventDefault();
  var panel=document.getElementById('reserverPanel');
  if(!panel)return;
  var isOpen=panel.classList.toggle('open');
  var btn=e.currentTarget;
  if(btn)btn.setAttribute('aria-expanded',isOpen);
}

/* ─── MOBILE SIDEBAR ─── */
function closeSidebar(){
  var h=document.getElementById('hamburgerBtn');
  var s=document.getElementById('sidebar');
  var o=document.getElementById('sidebarOverlay');
  if(h)h.classList.remove('open');
  if(h)h.setAttribute('aria-expanded','false');
  if(s)s.classList.remove('open');
  if(o)o.classList.remove('open');
  document.body.style.overflow='';
}

/* ─── INIT ON DOM READY ─── */
document.addEventListener('DOMContentLoaded',function(){
  /* Hamburger toggle */
  var hamburger=document.getElementById('hamburgerBtn');
  var sidebar=document.getElementById('sidebar');
  var overlay=document.getElementById('sidebarOverlay');

  if(hamburger&&sidebar&&overlay){
    hamburger.addEventListener('click',function(){
      var opening=!hamburger.classList.contains('open');
      hamburger.classList.toggle('open');
      hamburger.setAttribute('aria-expanded',opening);
      sidebar.classList.toggle('open');
      overlay.classList.toggle('open');
      document.body.style.overflow=opening?'hidden':'';
    });
    overlay.addEventListener('click',closeSidebar);
    /* Close sidebar on link click */
    sidebar.querySelectorAll('.sidebar-link').forEach(function(l){
      l.addEventListener('click',closeSidebar);
    });
  }

  /* Close reserverPanel on outside click */
  document.addEventListener('click',function(e){
    var p=document.getElementById('reserverPanel');
    if(p&&!e.target.closest('.nav-reserver')){
      p.classList.remove('open');
      var btn=document.querySelector('.nav-reserver-btn');
      if(btn)btn.setAttribute('aria-expanded','false');
    }
  });

  /* Cell hover glow tracking */
  document.querySelectorAll('.cell').forEach(function(cell){
    cell.addEventListener('mousemove',function(e){
      var r=cell.getBoundingClientRect();
      cell.style.setProperty('--mouse-x',((e.clientX-r.left)/r.width*100)+'%');
      cell.style.setProperty('--mouse-y',((e.clientY-r.top)/r.height*100)+'%');
    });
  });
});
