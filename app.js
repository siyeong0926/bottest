const menuItems = [
  { name: '🍔 Burger', price: '$4.99' },
  { name: '🍟 Fries', price: '$1.49' },
  { name: '🌭 Hotdog', price: '$3.49' },
  { name: '🌮 Taco', price: '$3.99' },
  { name: '🍕 Pizza', price: '$7.99' },
  { name: '🍩 Donut', price: '$1.49' },
];

const menuContainer = document.getElementById('menu-items');

menuItems.forEach((item) => {
  const menuItem = document.createElement('div');
  menuItem.className =
    'bg-white p-4 rounded-lg shadow-md flex flex-col items-center';

  menuItem.innerHTML = `
        <div class="text-4xl">${item.name}</div>
        <div class="text-gray-700 font-bold text-lg mt-2">${item.price}</div>
        <button class="mt-4 bg-yellow-500 text-white px-4 py-2 rounded-full hover:bg-yellow-600 focus:outline-none">ADD</button>
    `;

  menuContainer.appendChild(menuItem);
});
