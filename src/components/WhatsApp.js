export function setupWhatsApp() {
  const body = document.body;
  const waHTML = `
    <a href="https://wa.me/447781504529" class="whatsapp-float" target="_blank">
      <div class="wa-content">
        <span class="wa-text">Chat with an Expert</span>
        <i class="fab fa-whatsapp"></i>
      </div>
    </a>
  `;
  
  // We add it directly to the body so it stays on top
  const div = document.createElement('div');
  div.innerHTML = waHTML;
  body.appendChild(div);
}