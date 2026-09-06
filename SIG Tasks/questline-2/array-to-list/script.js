// Array containing multiple pieces of content
const technologies = [
  'JavaScript',
  'Python',
  'Rust',
  'TypeScript',
  'Go',
  'C++'
];

// Target container element
const listContainer = document.getElementById('dynamic-list');

// Iterate using forEach and dynamically generate <li> tags
technologies.forEach((tech) => {
  const listItem = document.createElement('li');
  listItem.textContent = tech;
  listContainer.appendChild(listItem);
});