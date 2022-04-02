import { generateDropdownMenu, menuModel } from './dropdown-menu.js';
const projectsModel = [
  { title: 'Projects' },
  { title: 'Button 1', link: 'https://google.com' },
  { title: 'Button 2', link: 'https://google.com' },
  { title: 'Button 3', link: 'https://google.com' },
  { title: 'Button 4', link: 'https://google.com' },
];
const dropdown = generateDropdownMenu(menuModel);
const dropdown2 = generateDropdownMenu(projectsModel);
const dropdown3 = generateDropdownMenu(projectsModel);
const dropdown4 = generateDropdownMenu(projectsModel);
const dropdown5 = generateDropdownMenu(projectsModel);

document.body.appendChild(dropdown);
document.body.appendChild(dropdown2);
document.body.appendChild(dropdown3);
document.body.appendChild(dropdown4);
document.body.appendChild(dropdown5);
