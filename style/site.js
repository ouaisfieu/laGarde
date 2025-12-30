// Cinquième Pouvoir — utilitaires sobres
(function(){
  const btn = document.getElementById('copyLinkBtn');
  btn?.addEventListener('click', async () => {
    try{
      await navigator.clipboard.writeText(location.href);
      btn.textContent = "Lien copié";
      setTimeout(()=> btn.textContent = "Copier le lien", 1400);
    }catch(e){
      const tmp = document.createElement('textarea');
      tmp.value = location.href;
      document.body.appendChild(tmp);
      tmp.select();
      document.execCommand('copy');
      tmp.remove();
      btn.textContent = "Lien copié";
      setTimeout(()=> btn.textContent = "Copier le lien", 1400);
    }
  });
})();
