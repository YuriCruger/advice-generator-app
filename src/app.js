function advice(data) {
    const adviceElement = document.getElementById('advice');
    const messageElement = document.getElementById('message');
  
    
      adviceElement.textContent = `ADVICE # ${data.slip.id}`;
      messageElement.textContent = `"${data.slip.advice}"`;
    
  }
  

const diceBtnElement = document.getElementById('dice_btn');
diceBtnElement.addEventListener('click', () => {
  fetch('https://api.adviceslip.com/advice')
    .then(response => {
      return response.json();
    })
    .then(data => {
      console.log(data);
      advice(data);
    });
});
