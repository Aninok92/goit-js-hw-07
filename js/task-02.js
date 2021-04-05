const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

//Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный li, после чего вставит все li за одну операцию в список ul.ingredients. Для создания DOM-узлов используй document.createElement().

console.log(ingredients);

const ingredientsContainer = document.querySelector('#ingredients');
console.log(ingredientsContainer);

const makeIngredientsItems = (items) => {
    return items.map(item => {
        const itemElem = document.createElement('li');
        itemElem.textContent = item;
        return itemElem;
    });
};

const ingredientsItems = makeIngredientsItems(ingredients);
ingredientsContainer.append(...ingredientsItems);