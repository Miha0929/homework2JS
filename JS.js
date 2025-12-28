console.log('Hello Java, It is lwsson 2 home work');

const btn1 = document.getElementById('btn1');
const text1 = document.getElementById('stutus');
const text2 = document.getElementById('stutus2');

let isOn = false;

btn1.addEventListener('click', () => {
    console.log (isOn);
    if (isOn) {
        isOn = false;
        btn1.textContent = 'Switch';
        text1.textContent = 'Now OFF';
        text2.textContent = 'System is Off';
    } else {
        btn1.textContent = 'Check';
        text1.textContent = 'Now ON';
        text2.textContent = 'System is On';
        isOn = true;
    }
});