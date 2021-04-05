//Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input),
//подставляет его текущее значение в span#name
//- output.Если инпут пустой,
//в спане должна отображаться строка 'незнакомец'

const refs = {
    nameInput: document.querySelector('#name-input'),
    nameOutput: document.querySelector('#name-output'),
};

refs.nameInput.addEventListener('input', onInputChange);

function onInputChange(event) {
    if (refs.nameInput.value.length < 1) {
        refs.nameOutput.textContent = "незнакомец";
    } else {
        refs.nameOutput.textContent = event.currentTarget.value;
    }
}