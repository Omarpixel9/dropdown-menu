const menuModel = [
  { title: 'Services', link: 'https://google.com' },
  { title: 'Button 1', link: 'https://google.com' },
  { title: 'Button 2', link: 'https://google.com' },
  { title: 'Button 3', link: 'https://google.com' },
  { title: 'Button 4', link: 'https://google.com' },
];
const showMenu = (div) => {
  Array.from(div.children).forEach(
    (button) => (button.style.display = 'block')
  );
};
const hideMenu = (div) => {
  const [firstButton, ...everythingElse] = div.children;
  everythingElse.forEach((button) => (button.style.display = 'none'));
};
const generateDropdownMenu = (menuItems) => {
  const div = document.createElement('div');
  div.classList.add('dropdownMenu');
  menuItems.forEach((item, index) => {
    const button = document.createElement('a');
    button.textContent = item.title;
    if (index === 0) button.classList.add('dropdownTitle');
    else {
      button.classList.add('dropdownItem');
      button.style.display = 'none';
      button.href = item.link;
    }
    div.appendChild(button);
  });
  div.addEventListener('mouseover', () => {
    showMenu(div);
  });
  div.addEventListener('mouseout', () => {
    hideMenu(div);
  });
  return div;
};

export { generateDropdownMenu, menuModel };
