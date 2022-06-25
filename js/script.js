const dropList = document.querySelectorAll("form select");



WhiteMode();
for (let i = 0; i < dropList.length; i++) {
    for(let currency_code in country_list){
        // selecting USD by default as FROM currency and NPR as TO currency
        let selected = i == 0 ? currency_code == "USD" ? "selected" : "" : currency_code == "NPR" ? "selected" : "";
        // creating option tag with passing currency code as a text and value
        let optionTag = `<option value="${currency_code}" ${selected}>${currency_code}</option>`;
        // inserting options tag inside select tag
        dropList[i].insertAdjacentHTML("beforeend", optionTag);
    }
    dropList[i].addEventListener("change", e =>{
        loadFlag(e.target); // calling loadFlag with passing target element as an argument
    });
}

document.getElementsByTagName('select')[1].value = 'BRL';

function change(){
    let moeda_1 = document.getElementsByTagName('select')[0].value;
    let moeda_2 = document.getElementsByTagName('select')[1].value;

    document.getElementsByTagName('select')[1].value = moeda_1
    document.getElementsByTagName('select')[0].value = moeda_2

}


async function getURL(url) {
  return (await fetch(url)).json();
}

function getInfoSelect(select) {
  return select.options[select.selectedIndex].text;
}

async function calculate() {
  let moeda1 = document.getElementsByTagName('select')[0].value;
  let moeda2 = document.getElementsByTagName('select')[1].value;
  let valor = document.getElementById('valor').value;

  let { rates } = await getURL(`https://api.exchangerate-api.com/v4/latest/${moeda1}`);
  let rate = rates[moeda2];

document.getElementsByClassName('info')[0].innerText = `1 ${moeda1} = ${rate} ${moeda2}`;
document.getElementsByClassName('convertido')[0].innerText = (valor * rate).toFixed(2);
  //console.log(`1 ${moeda1} = ${rate} ${moeda2}`)
  //console.log((valor * rate).toFixed(2));


}

setInterval(() => {
    calculate()
}, 10);

//CSS
function DarkMode(){
  function addImportant(el, prop, value) {
    el.setAttribute('style', `${el.style.cssText}
        ${prop} : ${value} !important;`);
  }

  document.body.style.backgroundColor = '#3a3a3a';
document.body.style.color = '#cacaca';

document.getElementById('bloco').style.backgroundColor = '#6d6d6d';

addImportant(document.getElementById('sel1'), "background", "#3a3a3a")
addImportant(document.getElementById('sel2'), "background", "#3a3a3a")

addImportant(document.getElementById('sel1'), "color", "#cacaca")
addImportant(document.getElementById('sel2'), "color", "#cacaca")

addImportant(document.getElementById('selectBox1'), "background", "#3a3a3a")
addImportant(document.getElementById('selectBox2'), "background", "#3a3a3a")


addImportant(document.getElementById('main'), "background", "#cacaca");
addImportant(document.getElementById('main'), "color", "#3a3a3a");

document.getElementById('main').innerText = '☼'
}

function WhiteMode(){
  function addImportant(el, prop, value) {
    el.setAttribute('style', `${el.style.cssText}
        ${prop} : ${value} !important;`);
  }

  document.body.style.backgroundColor = '#dfdfdf';
document.body.style.color = '#3a3a3a';

document.getElementById('bloco').style.backgroundColor = '#fff';

addImportant(document.getElementById('sel1'), "background", "#fff")
addImportant(document.getElementById('sel2'), "background", "#fff")

addImportant(document.getElementById('sel1'), "color", "black")
addImportant(document.getElementById('sel2'), "color", "black")

addImportant(document.getElementById('selectBox1'), "background", "#fff")
addImportant(document.getElementById('selectBox2'), "background", "#fff")

addImportant(document.getElementById('main'), "background", "#3a3a3a");
addImportant(document.getElementById('main'), "color", "#cacaca");

document.getElementById('main').innerText = '☾'
}



function mode(){

  if (document.getElementById('main').innerText == '☼'){WhiteMode()}
  else {DarkMode()};

  console.log('ok')
}