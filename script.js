const $ = (selector) => document.querySelector(selector);

document.title = `${portfolio.name} — ${portfolio.role}`;
$(".wordmark").innerHTML = `<span class="mark">✳</span> ${portfolio.name}<span class="wordmark-dot">.</span>`;
$(".hero-intro").innerHTML = `I’m <strong>${portfolio.name}</strong> — a ${portfolio.role} creating expressive visuals, considered motion and digital worlds.`;
$("#about-text").textContent = portfolio.about;
$("#email-link").href = `mailto:${portfolio.email}`;
$("#email-link").innerHTML = `${portfolio.email} <span>↗</span>`;
$("#linkedin-link").href = portfolio.linkedin;
$("#github-link").href = portfolio.github;
$("#year").textContent = new Date().getFullYear();

$("#project-grid").innerHTML = portfolio.projects.map((project, index) => `
  <article class="project-card">
    <a href="${project.link || '#'}" target="_blank" rel="noreferrer" aria-label="View ${project.title}">
      <div class="project-image">
        ${project.image
          ? `<img src="${project.image}" alt="${project.title}" loading="lazy">`
          : `<div class="project-placeholder ${index % 2 ? 'alt' : ''}">${project.visual || String(index + 1).padStart(2, '0')}</div>`}
      </div>
      <div class="project-meta"><span>${project.category}</span><span>${project.year}</span></div>
      <h3>${project.title} ↗</h3>
      <p>${project.description}</p>
    </a>
  </article>
`).join("");

$("#skills-list").innerHTML = portfolio.skills.map(skill => `<span class="skill-tag">${skill}</span>`).join("");
$("#experience-list").innerHTML = portfolio.experience.map(item => `
  <article class="experience-item">
    <div class="experience-date">${item.dates}</div>
    <div><h3>${item.role}</h3><div class="company">${item.company}</div><p>${item.description}</p></div>
  </article>
`).join("");

const menuButton = $(".menu-toggle");
const nav = $(".nav");
menuButton.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(open));
});
nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  nav.classList.remove("open");
  menuButton.setAttribute("aria-expanded", "false");
}));
