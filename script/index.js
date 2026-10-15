//  <!-- CORE PAGE ROUTER ACTION -->
function switchPage(pageId) {
  // 1. Hide every single page section completely
  document.querySelectorAll(".page-section").forEach((page) => {
    page.style.setProperty("display", "none", "important");
    page.classList.remove("active");
  });

  // 2. Remove active highlights from all navigation items
  document.querySelectorAll(".nav-btn").forEach((btn) => {
    btn.classList.remove("active");
  });

  // 3. Show ONLY the requested page section
  const activePage = document.getElementById(pageId);
  if (activePage) {
    activePage.style.setProperty("display", "flex", "important"); // Uses flex for hero alignment
    // If it's not the home page, standard display block works best
    if (pageId !== "home")
      activePage.style.setProperty("display", "block", "important");
    activePage.classList.add("active");
  }

  // 4. Highlight the clicked button
  if (event && event.target) {
    event.target.classList.add("active");
  }
}

// Run once on load to ensure home displays perfectly
window.addEventListener("DOMContentLoaded", () => {
  document
    .getElementById("home")
    .style.setProperty("display", "flex", "important");
});
