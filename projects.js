const buttons = document.querySelectorAll(".filter-btn");
const cards = document.querySelectorAll(".project-card");

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    // update active button styling
    buttons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    const filter = btn.dataset.filter; // e.g. "python"

    cards.forEach((card) => {
      const tags = card.dataset.tags.split(" "); // ["python","ml"]

      const shouldShow =
        filter === "all" || tags.includes(filter);

      card.style.display = shouldShow ? "block" : "none";
    });
  });
});
