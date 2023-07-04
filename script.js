const insert = document.getElementById('insert');

window.addEventListener('keydown', (event) => {
  insert.innerHTML = `
    <article class="key">
        <h4>${event.key === ' ' ? 'Spance' : event.key}</h4>
        <small>event.key</small>
    </article>
<article class="key">
  <h4>${event.keyCode}</h4>
  <small>event.keyCode</small>
</article>
<article class="key">
  <h4>${event.code}</h4>
  <small>event.code</small>
</article>
  `;
});
