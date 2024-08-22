const menuItems = [
  {
    name: 'MARATON 1',
    price: '^^',
    link: 'https://maraton.run',
  },
  {
    name: 'MARATON 2',
    price: '--',
    link: 'https://maraton.run',
  },
  {
    name: 'MARATON 3',
    price: 'o_o',
    link: 'https://maraton.run',
  },
  {
    name: 'MARATON 4',
    price: '123',
    link: 'https://maraton.run',
  },
];

const menuContainer = document.getElementById('menu-items');

menuItems.forEach((item) => {
  const menuItem = document.createElement('div');
  menuItem.className =
    'bg-white p-4 rounded-lg shadow-md flex flex-col items-center text-center';

  menuItem.innerHTML = `
        <div class="text-2xl">${item.name}</div>
        <div class="text-gray-700 font-bold text-lg mt-2">${item.price}</div>
        <button class="mt-4 bg-[#7fff00] text-white px-4 py-2 rounded-full hover:bg-orange-600 focus:outline-none">ADD</button>
    `;

  // 버튼 클릭 시 링크로 이동하도록 설정
  menuItem.querySelector('button').addEventListener('click', () => {
    window.location.href = item.link;
  });

  menuContainer.appendChild(menuItem);
});
