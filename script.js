// Function to open and display the chosen category
function openCategory(evt, categoryId) {
  const tabcontents = document.querySelectorAll(".tabcontent");
  tabcontents.forEach(tc => tc.classList.remove("active"));

  const tablinks = document.querySelectorAll(".tablink");
  tablinks.forEach(tl => tl.classList.remove("active"));

  document.getElementById(categoryId).classList.add("active");
  evt.currentTarget.classList.add("active");
}

// Function to filter resources based on search input
function searchResources() {
  const filter = document.getElementById("search").value.toLowerCase();
  const resourceItems = document.querySelectorAll(".resource-list li");

  resourceItems.forEach(item => {
    const text = item.textContent.toLowerCase();
    item.style.display = text.includes(filter) ? "" : "none";
  });
}
