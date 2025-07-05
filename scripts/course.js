import { courses } from '../courses.js';

const container = document.getElementById("course-container");
const creditCount = document.getElementById("creditCount");

function displayCourses(list) {
  container.innerHTML = "";
  let total = 0;

  list.forEach(course => {
    const card = document.createElement("div");
    card.className = course.completed ? "completed" : "not-completed";
    card.innerHTML = `
      <h3>${course.code}</h3>
      <p>${course.name}</p>
      <p>Credits: ${course.credits}</p>
    `;
    container.appendChild(card);
    total += course.credits;
  });

  creditCount.textContent = total;
}

document.getElementById("all").addEventListener("click", () => displayCourses(courses));
document.getElementById("wdd").addEventListener("click", () =>
  displayCourses(courses.filter(c => c.code.startsWith("WDD")))
);
document.getElementById("cse").addEventListener("click", () =>
  displayCourses(courses.filter(c => c.code.startsWith("CSE")))
);

// Cargar todos al inicio
displayCourses(courses);
