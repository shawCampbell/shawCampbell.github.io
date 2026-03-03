console.log("books:", books);

const grid = document.getElementById("books-grid");

books.forEach(book => {
  const card = document.createElement("div");
  card.className = "book-card";

  card.innerHTML = `
    <div class="book-cover">
      <img src="${book.cover}" alt="${book.title}">
    </div>
    <h3>${book.title}</h3>
    <p>${book.author}</p>
  `;

  grid.appendChild(card);
});