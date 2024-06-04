function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  }
  
  
  const input = document.querySelector('input[type="number"]');
  const dataCreateBtn = document.querySelector('button[data-create]');
  const dataDestroyBtn = document.querySelector('button[data-destroy]');
  const boxesContainer = document.querySelector('#boxes');
  
  dataCreateBtn.addEventListener('click', () =>{
    const amount = input.value;
  
    if(amount >=1 && amount <= 100){
  
      createBoxes(amount);
    };
  });
  
  boxesContainer.style.marginTop = '20px';
  boxesContainer.style.display = 'flex';
  boxesContainer.style.columnGap = '20px'; 
  
  
  function createBoxes(amount){
    boxesContainer.innerHTML = '';
  
    const fragments = document.createDocumentFragment();
  
    for (let i = 0; i < amount; i +=1) {
      const box = document.createElement('div');
      const size = 30 + i * 10;
  
      box.style.width =`${size}px`;
      box.style.height =`${size}px`;
      box.style.backgroundColor = getRandomHexColor();
      fragments.appendChild(box);
     
    };
  
    boxesContainer.appendChild(fragments);
  };
  
  dataDestroyBtn.addEventListener('click', () =>{
    boxesContainer.innerHTML = '';
  });