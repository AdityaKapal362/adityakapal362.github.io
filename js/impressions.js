async function loadImpressions() {
    try {
      const response = await fetch('/mine/impressions.json');
      const impressions = await response.json();
      const viewpager = document.getElementById('viewpager');
      const isDesktop = window.innerWidth > 768;
      const itemsPerRow = isDesktop ? Math.floor(window.innerWidth / 300) : 1;
      viewpager.style.gridTemplateColumns = `repeat(${itemsPerRow}, 1fr)`;
      impressions.forEach(({ 'github-link': username, text }) => {
        const card = document.createElement('div');
        card.classList.add('impression-card');
        card.innerHTML = `
          <div class="card-content">
            <img src="profile.jpg">
            <h3>${username !== '-' ? username : 'Anonymous'}</h3>
            <div class="divider"></div>
            <p>${text !== '-' ? text : 'No impression provided.'}</p>
          </div>
        `;
        viewpager.appendChild(card);
      });
    } catch (error) {
    }
  }
document.addEventListener('DOMContentLoaded', loadImpressions);
