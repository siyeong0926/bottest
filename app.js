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
        <div style={{fontSize:'30px'}}>${item.name}</div>
        <div style={{fontSize:'20px'}}>${item.price}</div>
        <button  style={{backgroundColor:'black'}}>ADD</button>
    `;

  // 버튼 클릭 시 링크로 이동하도록 설정
  menuItem.querySelector('button').addEventListener('click', () => {
    window.location.href = item.link;
  });

  menuContainer.appendChild(menuItem);
});
