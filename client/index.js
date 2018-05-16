const list = document.querySelector('#list');
const loader = document.querySelector('#loader');

const getPeeps = () => {
  const request = new XMLHttpRequest();
  const url = '//localhost:8000/test';
  let bytes = 0;

  request.open('GET', url);
  request.send();

  return new Promise(resolve => {
    request.onreadystatechange = () => {
      if (request.readyState === 4) {
        resolve();
      }
      if (request.readyState === 3 || request.readyState === 4) {
        const item = JSON.parse(request.response.substr(bytes));
        const li = document.createElement('li');
        li.innerText = `${item.id}: ${item.name}`;
        list.appendChild(li);

        bytes = request.responseText.length;
      }
    };
  });
};

getPeeps().then(() => loader.remove());
