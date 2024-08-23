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
    <div style="font-size: 25px;">${item.name}</div>
    <div style="font-size: 15px;">${item.price}</div>
    <button style="background-color: #B3E15D; border-radius: 20px; color: white; 
    margin-top: 10px; padding: 5px 10px">ADD</button>
`;

  // 버튼 클릭 시 링크로 이동하도록 설정
  menuItem.querySelector('button').addEventListener('click', () => {
    window.location.href = item.link;
  });

  menuContainer.appendChild(menuItem);
});
