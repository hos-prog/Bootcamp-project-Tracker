const API_URL = "http://localhost:5000/api/projects";

async function fetchProjects() {
  const res = await fetch(API_URL);
  const projects = await res.json();
  const list = document.getElementById("projectList");
  list.innerHTML = "";
  projects.forEach(p => {
    const li = document.createElement("li");
    li.textContent = `${p.name} - ${p.description} [${p.status}]`;
    list.appendChild(li);
  });
}

document.getElementById("projectForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const description = document.getElementById("description").value;
  const status = document.getElementById("status").value;

  await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, description, status })
  });

  e.target.reset();
  fetchProjects();
});

fetchProjects();