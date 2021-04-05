// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество, то border инпута становится зеленым, если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid.
const refs = {
    input: document.querySelector('#validation-input'),
}

refs.input.addEventListener('blur', onInputValidation);

console.log(refs.input.placeholder);

function onInputValidation(event) {
    console.log(refs.input.value.length);
    console.log(event.currentTarget.dataset.length);
  
    if (refs.input.value.length == event.currentTarget.dataset.length) {
      refs.input.classList.add("valid");
      refs.input.classList.remove("invalid");
    } else {
      refs.input.classList.add("invalid");
      refs.input.classList.remove("valid");
    }

  console.log(refs.input);
}
