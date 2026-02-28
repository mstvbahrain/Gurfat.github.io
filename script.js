// Listings filtering (client-side)
function filterListings() {
  const q = (document.getElementById("q")?.value || "").toLowerCase();
  const loc = document.getElementById("loc")?.value || "Any";
  const beds = document.getElementById("beds")?.value || "Any";

  document.querySelectorAll("[data-listing]").forEach(card => {
    const title = (card.dataset.title || "").toLowerCase();
    const location = card.dataset.location || "";
    const bedrooms = card.dataset.bedrooms || "";

    const matchQ = !q || title.includes(q) || location.toLowerCase().includes(q);
    const matchLoc = (loc === "Any") || (location === loc);
    const matchBeds = (beds === "Any") || (bedrooms === beds);

    card.style.display = (matchQ && matchLoc && matchBeds) ? "" : "none";
  });
}

document.addEventListener("input", (e) => {
  if (["q"].includes(e.target.id)) filterListings();
});
document.addEventListener("change", (e) => {
  if (["loc","beds"].includes(e.target.id)) filterListings();
});

// Default year
document.addEventListener("DOMContentLoaded", () => {
  const y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();
});
