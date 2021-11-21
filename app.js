const main = document.querySelector('.main');
let array = [];
let myJsonString;
let arr_len = 0;
function Show(input) {
  document.body.style.transform = 'translateY(0px)';
  document.querySelector('button').style.display = 'inline-block';
  let len = input.files.length;
  let file;
  for (let i = 0; i < len; i++) {
    arr_len++;
    let reader = new FileReader();
    let url = URL.createObjectURL(input.files[i]);
    array.push({ img: url });

    console.log(array);

    reader.onload = function (e) {
      file = input.files[i].name;

      main.innerHTML += `
      <div class="in-main">
      <div>
      <img id="image" src="${url}" alt="" />
      </div>
      <p>${file}</p>
      <i onclick="Sifirla(event)" class="fas fa-trash-alt"></i>
      </div>`;
    };

    reader.readAsDataURL(input.files[i]);
  }
  document.querySelector('span').innerHTML = `You have ${arr_len} files `;
}
function Sifirla(e) {
  e.target.parentNode.remove();
  arr_len--;
  console.log(e.target.parentNode.children[0].children[0].src);

  for (let i = 0; i < array.length; i++) {
    if (array[i].img == e.target.parentNode.children[0].children[0].src) {
      array.pop(array[i]);
    }
  }
  console.log(array);
}

function Jmi() {
  document.querySelector('span').innerHTML = ` You have ${arr_len} files `;
}


