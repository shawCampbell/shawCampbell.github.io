// console.log("career data:", window.career);

// document.addEventListener("DOMContentLoaded", () => {
//   const timeline = document.querySelector(".timeline");
//   if (!timeline || !Array.isArray(window.career)) return;

//   career.forEach(item => {
//     const timelineItem = document.createElement("div");
//     timelineItem.className = "timeline-item";

//     const dotClass =
//       item.type === "experience"
//         ? "timeline-dot green"
//         : "timeline-dot";

//     timelineItem.innerHTML = `
//       <div class="timeline-date">${item.date}</div>

//       <div class="${dotClass}"></div>

//       <div class="timeline-card">
//         <div class="card-left">
//           <img src="${item.logo}" alt="${item.name} logo">
//         </div>

//         <div class="card-content">
//           <h3>${item.name}</h3>
//           <p>${item.location}</p>
//           ${item.description ? `<p class="description">${item.description}</p>` : ""}
//         </div>

//         <span class="tag ${item.type}">${item.type}</span>
//       </div>
//     `;

//     timeline.appendChild(timelineItem);
//   });
// });

document.addEventListener("DOMContentLoaded", () => {
  const timeline = document.querySelector(".timeline");
  const toggleBtn = document.getElementById("timeline-toggle");

  if (!timeline || !Array.isArray(window.career)) return;

  let isReversed = false;

  function renderTimeline() {
    timeline.innerHTML = "";

    const items = isReversed
      ? [...career].reverse()
      : career;

    items.forEach(item => {
      const dotClass =
        item.type === "experience"
          ? "timeline-dot green"
          : "timeline-dot";

      const el = document.createElement("div");
      el.className = "timeline-item";

      el.innerHTML = `
        <div class="timeline-date">${item.date}</div>

        <div class="${dotClass}"></div>

        <div class="timeline-card">
          <div class="card-left">
            <img src="${item.logo}" alt="${item.name} logo">
          </div>

          <div class="card-content">
            <h3>${item.name}</h3>
            <p>${item.location}</p>
            ${item.description ? `<p class="description">${item.description}</p>` : ""}
          </div>

          <span class="tag ${item.type}">${item.type}</span>
        </div>
      `;

      timeline.appendChild(el);
    });
  }

  // initial render
  renderTimeline();

  // toggle order
  toggleBtn.addEventListener("click", () => {
    isReversed = !isReversed;
    renderTimeline();
  });
});