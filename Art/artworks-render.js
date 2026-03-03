

const grid = document.getElementById("artworks-grid");

artworks.forEach(artwork => {
  const card = document.createElement("div");
  card.className = "artwork-card";

  card.innerHTML = `
    <div class="artwork-cover">
      <img src="${artwork.cover}" alt="${artwork.title}">
    </div>
    <h3>${artwork.title}</h3>
    <p>${artwork.author}</p>
  `;

  grid.appendChild(card);
});