const menuItems = [
  { name: '🍔 BOT ', price: '^^' },
  { name: '🍟 MARATON', price: '--' },
  { name: '🌭 HEY!!', price: 'o_o' },
  { name: '🌮 TEST', price: '123' },
];

const menuContainer = document.getElementById('menu-items');

menuItems.forEach((item) => {
  const menuItem = document.createElement('div');
  menuItem.className =
    'bg-white p-4 rounded-lg shadow-md flex flex-col items-center text-center';

  menuItem.innerHTML = `
        <div class="text-2xl">${item.name}</div>
        <div class="text-gray-700 font-bold text-lg mt-2">${item.price}</div>
        <button class="mt-4 bg-green-500 text-white px-4 py-2 rounded-full hover:bg-orange-600 focus:outline-none">ADD</button>

    `;
  menuContainer.appendChild(menuItem);
});
