window.addEventListener('load', () => {
  const input = document.getElementById('amount');
  const form = document.querySelector('form');
  const nums = [];
  const calc = (n) => {
    let total = 0;
    let min = n > 10000 ? 8000 : 10000;
    let max = n > 20000 ? 19900 : n;
    console.log(total);
    while (total < n) {
      let random = Math.round(Math.floor(Math.random() * (max - min) + min) / 100) * 100;

      total += random;
      nums.push(random);
      console.log(random);
    }
    if (total > n) {
      nums.pop();
      const lastNumber = n - (nums.length && nums.reduce((ac, cu) => ac + cu));
      nums.push(lastNumber);
    }
    return total;
  };

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const total = document.getElementById('total');
    document.querySelector('span').classList.add('active');
    document.querySelector('.line').classList.add('active');
    total.innerHTML = '';
    nums.length = 0;
    calc(input.value);
    nums.forEach((num) => {
      const list = document.createElement('li');

      list.innerText = num;
      total.appendChild(list);
    });
    document.getElementById('final').innerText = nums.length && nums.reduce((ac, cu) => ac + cu);
    document.querySelectorAll('li').forEach((li) => {
      li.addEventListener('click', () => {
        if (li.classList.contains('clicked')) {
          li.classList.remove('clicked');
        } else {
          li.classList.add('clicked');
        }
      });
    });
  });
});
