'use strict';

const section = document.querySelector('section.shop'); // Берем магазин из HTML

document.querySelector('button.sob').addEventListener('click', function() { // Если кнопка "Собрать своего героя" нажата...
    scrollTo({ // Опустить вниз в магазин
        top: section.offsetTop,
        behavior: 'smooth'
    });
});
document.querySelector('button.start').addEventListener('click', function() { // Если кнопка "Начать" нажата...
    scrollTo({ // Поднять вверх в магазин
        top: section.offsetTop,
        behavior: 'smooth'
    });
});
const translation = { // Словарь с русского на английский
    "ru": {
        "sob": "Собери своего героя",
        "account": "Мой аккаунт",
        "p1": "Магазин по созданию своих супергероев",
        "shop3": "Магазин по сборке своего супергероя",
        "shop2": "Магазин",
        "molot2": "Молот Тора",
        "molot3": "Легендарный молот, излучающий электрическую силу",
        "buy-button": "Положить в корзину",
        "sit1": "Щит Капитана Америки",
        "sit2": "Щит, сделанный из вибраниумного сплава",
        "buy-button1": "Положить в корзину",
        "pistol2": "Пистолет Кри",
        "pistol3": "Пистолет, используемый HYDRA",
        "buy-button2": "Положить в корзину",
        "per2": "Перчатка Бесконечности",
        "per3": "Мощные перчатки, позволяющие управлять всеми элементами вселенной",
        "buy-button3": "Положить в корзину",
        "bet1": "Бетмобиль",
        "bet2": "Мощный автомобиль, используемый Бетменом",
        "buy-button4": "Положить в корзину",
        "gru1": "Грюмобиль",
        "gru2": "Любительский автомобиль, используемый Грю",
        "buy-button5": "Положить в корзину",
        "sok1": "Тысячилетний Сокол",
        "sok2": "Огромное НЛО, которое побывало не в одном бою во вселенное Звездных войн",
        "buy-button6": "Положить в корзину",
        "mot1": "Электроцикл",
        "mot2": "Закаленный временем мотоцикл, на котором Эластика спала поезд",
        "buy-button7": "Положить в корзину",
        "fuf1": "Логово Фуфелшмерца",
        "fuf2": "Огромное логово, посреди города",
        "buy-button8": "Положить в корзину",
        "log1": "Логово Бетмена",
        "log2": "Огромное логово, используемое Бетменом для хранения своего снаряжения",
        "buy-button9": "Положить в корзину",
        "dom1": "Дом с бункером",
        "dom2": "Роскошный дом, с не менее роскошным бункером",
        "buy-button10": "Положить в корзину",
        "mks1": "МКС с лазером",
        "mks2": "Космическая база с разрушительным лазером, способный выстрелить куда угодно",
        "buy-button11": "Положить в корзину",
        "kru1": "Крюк-кошка",
        "kru2": "Абордажный крюк, который позволяет прицепиться к любому обьекту на небольшом расстояни",
        "buy-button12": "Положить в корзину",
        "och1": "Очки ночного видения",
        "och2": "Крутые очки, которые позволяют видеть в темноте",
        "buy-button13": "Положить в корзину",
        "tep1": "Телепорт",
        "tep2": "Заклинание, которое позволяет телепортироваться за 3 секунды",
        "buy-button14": "Положить в корзину",
        "bro1": "Бронежилет",
        "bro2": "Сильный бронежилет, который обеспечит защиту на физическое воздействие",
        "buy-button15": "Положить в корзину"
    },

    "en": { // Английский язык
        "sob": "Build Your Hero",
        "account": "My Account",
        "p1": "Shop for Creating Your Own Superheroes",
        "shop3": "Shop for Building Your Own Superhero",
        "shop2": "Shop",
        "molot2": "Thor's Hammer",
        "molot3": "Legendary hammer emitting electrical power",
        "buy-button": "Add to Cart",
        "sit1": "Captain America's Shield",
        "sit2": "Shield made of vibranium alloy",
        "buy-button1": "Add to Cart",
        "pistol2": "Kree Pistol",
        "pistol3": "Pistol used by HYDRA",
        "buy-button2": "Add to Cart",
        "per2": "Infinity Gauntlet",
        "per3": "Powerful gloves that allow you to control all elements of the universe",
        "buy-button3": "Add to Cart",
        "bet1": "Batmobile",
        "bet2": "Powerful car used by Batman",
        "buy-button4": "Add to Cart",
        "gru1": "Gru-mobile",
        "gru2": "Amateur car used by Gru",
        "buy-button5": "Add to Cart",
        "sok1": "Thousand-Year Eagle",
        "sok2": "Huge UFO that has been in many battles in the Star Wars universe",
        "buy-button6": "Add to Cart",
        "mot1": "Electric Motorcycle",
        "mot2": "Weathered motorcycle that Elastika rode on",
        "buy-button7": "Add to Cart",
        "fuf1": "Fufelshmerz's Lair",
        "fuf2": "Huge lair in the middle of the city",
        "buy-button8": "Add to Cart",
        "log1": "Batman's Lair",
        "log2": "Huge lair used by Batman for storing his equipment",
        "buy-button9": "Add to Cart",
        "dom1": "House with Bunker",
        "dom2": "Luxurious house with a luxurious bunker",
        "buy-button10": "Add to Cart",
        "mks1": "ISS with Laser",
        "mks2": "Space base with a destructive laser that can shoot anywhere",
        "buy-button11": "Add to Cart",
        "kru1": "Hook-Cat",
        "kru2": "Boarding hook that allows you to attach to any object at a short distance",
        "buy-button12": "Add to Cart",
        "och1": "Night Vision Goggles",
        "och2": "Cool goggles that allow you to see in the dark",
        "buy-button13": "Add to Cart",
        "tep1": "Teleporter",
        "tep2": "Spell that allows you to teleport anywhere in 3 seconds",
        "buy-button14": "Add to Cart",
        "bro1": "Bulletproof Vest",
        "bro2": "Strong bulletproof vest that provides protection against physical impact",
        "buy-button15": "Add to Cart"
    }
};
const translationButton = document.querySelector('button.perevod'); // Берем кнопку "перевести"
let currentLanguage = "ru"; // Изначально язык стоит русский

translationButton.addEventListener('click', function() { // Если кнопка "перевести" нажата...
    const elementsToTranslate = document.querySelectorAll('[data-translate]'); // Берем словарь переводов (наверху)

    if (currentLanguage === "ru") { // Если язык стоит русский...
        currentLanguage = "en"; // То меняем на английский
    } else { // Если язык стоит английский...
        currentLanguage = "ru"; // То меняем на русский
    }

    elementsToTranslate.forEach(function(element) { // Ищем слова в словаре
        const key = element.getAttribute('data-translate'); // Берем их
        element.textContent = translation[currentLanguage][key]; // Вставляем
    });
});

const closeButton = document.querySelector('button.close'); // Берем кнопку "закрыть"
const reclama = document.querySelector('div.reclama') // Берем рекламу
setTimeout(appear_timer, 10000) // Ставим таймер

function appear_timer() { //Когда таймер пройдет...
    reclama.style.display = 'block' // Реклама появляется (изначально ее нету)
}

closeButton.addEventListener('click', function() { // Когда нажимаем на кнопку "закрыть"...
    reclama.style.display = 'none'; // Реклама пропадает
});

const accountButton = document.querySelector('button.account') // берем кнопку аканта
const account = document.querySelector('account.HTML') // берем окно с акаунтом
const binButton = document.querySelector('button.bin-button') // берем кнопку корзины
const bin = document.querySelector('basket.HTML') // берем окно корзины

accountButton.addEventListener('click', function() { // если нажали на кнопку "акаунт"...
    window.location.href = 'account.html'; // перейти в окно аканута
});

binButton.addEventListener('click', function() { // если нажали на кнопку "корзина...
    window.location.href = 'basket.html'; // перекинуть нас на окно с корзиной
});

const buttonMolot = document.querySelector('button.buy-button') // берем все кнопки "положить в корзину"
const buttonSit = document.querySelector('button.buy-button1')
const buttonPistol = document.querySelector('button.buy-button2')
const buttonPer = document.querySelector('button.buy-button3')
const buttonBet = document.querySelector('button.buy-button4')
const buttonGru = document.querySelector('button.buy-button5')
const buttonSok = document.querySelector('button.buy-button6')
const buttonMot = document.querySelector('button.buy-button7')
const buttonFuf = document.querySelector('button.buy-button8')
const buttonLog = document.querySelector('button.buy-button9')
const buttonDom = document.querySelector('button.buy-button10')
const buttonMks = document.querySelector('button.buy-button11')
const buttonKru = document.querySelector('button.buy-button12')
const buttonOch = document.querySelector('button.buy-button13')
const buttonTep = document.querySelector('button.buy-button14')
const buttonBro = document.querySelector('button.buy-button15')


const Molot = document.querySelector('div.tovar1') // берем все товары
const Sit = document.querySelector('div.tovar2')
const Pistol = document.querySelector('div.tovar3')
const Per = document.querySelector('div.tovar4')
const Bet = document.querySelector('div.tovar5')
const Gru = document.querySelector('div.tovar6')
const Sok = document.querySelector('div.tovar7')
const Mot = document.querySelector('div.tovar8')
const Fuf = document.querySelector('div.tovar9')
const Log = document.querySelector('div.tovar10')
const Dom = document.querySelector('div.tovar11')
const Mks = document.querySelector('div.tovar12')
const Kru = document.querySelector('div.tovar13')
const Och = document.querySelector('div.tovar14')
const Tep = document.querySelector('div.tovar15')
const Bro = document.querySelector('div.tovar16')


const products = { // создаем массив товаров и их категории с ценами
  Molot: { name: "molot", category: "weapon", price: 2500000000 },
  Sit: { name: "sit", category: "weapon", price: 850000000 },
  Pistol: { name: "pistol", category: "weapon", price: 420000000 },
  Per: { name: "per", category: "weapon", price: 9999999999 },
  Bet: { name: "bet", category: "car", price: 1800000000 },
  Gru: { name: "gru", category: "car", price: 950000000 },
  Sok: { name: "sok", category: "car", price: 3200000000 },
  Mot: { name: "mot", category: "car", price: 600000000 },
  Fuf: { name: "fuf", category: "house", price: 300000000 },
  Log: { name: "log", category: "house", price: 2700000000 },
  Dom: { name: "dom", category: "house", price: 500000000 },
  Mks: { name: "mks", category: "house", price: 15000000000 },
  Kru: { name: "kru", category: "gadget", price: 25000000 },
  Och: { name: "och", category: "gadget", price: 15000000 },
  Tep: { name: "tep", category: "gadget", price: 5000000000 },
  Bro: { name: "bro", category: "gadget", price: 120000000 },
}

buttonMolot.addEventListener('click', () => { // когда нажимаем кнопку "купить"..
    
    const originalText = buttonMolot.textContent; // запоминаем старый текст
    buttonMolot.textContent = "Добавлено в корзину!"; // пишем новый текст

    setTimeout(() => { // создаем таймер на 1 секунду
        buttonMolot.textContent = originalText; // по истечению времени заменить новый текст на старый
    }, 1000); // через 1 секунду

    let korzina = JSON.parse(localStorage.getItem("cart")) || []; // создаем "память сайта" и переводим ее в стороку (потому что локал сторедж запоминает только строки)

    const already = korzina.some(item => item.name === products.Molot); // создаем переменную, в которой говорится, что мы ищем в корзине (локал сторедж) товар

    if (already) {  // если в корзине есть этот товар...
        console.log('В корзине уже есть молот!'); // пишем, что товар уже есть в корзине
        return;
    }

    if (korzina.length >= 4) { // если товаров в корзине более чем 4...
        alert("Нельзя добавлять больше 4 товаров!"); // пишем, что товаров слишком много
        return;
    }

    const weapons = korzina.filter(item => item.category === "weapon"); //создаем переменную, в которой говорится, что мы ищем в корзине (локал сторедж) категория товара

    if (products.Molot.category === "weapon" && weapons.length >= 1) { // если категории оружии более чем 1...
        alert('Нельзя добавить больше одного оружия!'); // пишем, что нельзя добавить в корзину более чем 1 оружие
        return;
    }

    korzina.push(products.Molot); // толкаем в массив с корзиной товар

    localStorage.setItem("cart", JSON.stringify(korzina)); // сохраняем массив
});

buttonSit.addEventListener('click', () => { // и так далее...
    const originalText = buttonSit.textContent;
    buttonSit.textContent = "Добавлено в корзину!";

    setTimeout(() => {
        buttonSit.textContent = originalText;
    }, 1000);

    let korzina = JSON.parse(localStorage.getItem("cart")) || [];

    const already = korzina.some(item => item.name === products.Sit);

    if (already) {
        console.log('В корзине уже есть щит!');
        return;
    }

    const weapons = korzina.filter(item => item.category === "weapon");

    if (products.Sit.category === "weapon" && weapons.length >= 1) {
        alert('Нельзя добавить больше одного оружия!');
        return;
    }

    korzina.push(products.Sit);

    localStorage.setItem("cart", JSON.stringify(korzina));
});
buttonPistol.addEventListener('click', () => { // и так далее...
    const originalText = buttonPistol.textContent;
    buttonPistol.textContent = "Добавлено в корзину!";

    setTimeout(() => {
        buttonPistol.textContent = originalText;
    }, 1000);
    let korzina = JSON.parse(localStorage.getItem("cart")) || [];

    const already = korzina.some(item => item.name === products.Pistol);

    if (already) {
        console.log('В корзине уже есть пистолет!');
        return;
    }

    const weapons = korzina.filter(item => item.category === "weapon");

    if (products.Pistol.category === "weapon" && weapons.length >= 1) {
        alert('Нельзя добавить больше одного оружия!');
        return;
    }

    korzina.push(products.Pistol);

    localStorage.setItem("cart", JSON.stringify(korzina));
});
buttonPer.addEventListener('click', () => { // и так далее...
    const originalText = buttonPer.textContent;
    buttonPer.textContent = "Добавлено в корзину!";

    setTimeout(() => {
        buttonPer.textContent = originalText;
    }, 1000);
    let korzina = JSON.parse(localStorage.getItem("cart")) || [];

    const already = korzina.some(item => item.name === products.Per);

    if (already) {
        console.log('В корзине уже есть перчатка!');
        return;
    }

    const weapons = korzina.filter(item => item.category === "weapon");

    if (products.Per.category === "weapon" && weapons.length >= 1) {
        alert('Нельзя добавить больше одного оружия!');
        return;
    }

    korzina.push(products.Per);

    localStorage.setItem("cart", JSON.stringify(korzina));
});
buttonBet.addEventListener('click', () => { // и так далее...
    const originalText = buttonBet.textContent;
    buttonBet.textContent = "Добавлено в корзину!";

    setTimeout(() => {
        buttonBet.textContent = originalText;
    }, 1000);
    let korzina = JSON.parse(localStorage.getItem("cart")) || [];

    const already = korzina.some(item => item.name === products.Bet);

    if (already) {
        console.log('В корзине уже есть бетмобиль!');
        return;
    }

    const car = korzina.filter(item => item.category === "car");

    if (products.Bet.category === "car" && car.length >= 1) {
        alert('Нельзя добавить больше одного средства передвиженя!');
        return;
    }

    korzina.push(products.Bet);

    localStorage.setItem("cart", JSON.stringify(korzina));
});
buttonGru.addEventListener('click', () => { // и так далее...
    const originalText = buttonGru.textContent;
    buttonGru.textContent = "Добавлено в корзину!";

    setTimeout(() => {
        buttonGru.textContent = originalText;
    }, 1000);
    let korzina = JSON.parse(localStorage.getItem("cart")) || [];

    const already = korzina.some(item => item.name === products.Gru);

    if (already) {
        console.log('В корзине уже есть грюмобиль!');
        return;
    }

    const car = korzina.filter(item => item.category === "car");

    if (products.Gru.category === "car" && car.length >= 1) {
        alert('Нельзя добавить больше одного средства передвиженя!');
        return;
    }

    korzina.push(products.Gru);

    localStorage.setItem("cart", JSON.stringify(korzina));
});
buttonSok.addEventListener('click', () => { // и так далее...
    const originalText = buttonSok.textContent;
    buttonSok.textContent = "Добавлено в корзину!";

    setTimeout(() => {
        buttonSok.textContent = originalText;
    }, 1000);
    let korzina = JSON.parse(localStorage.getItem("cart")) || [];

    const already = korzina.some(item => item.name === products.Sok);

    if (already) {
        console.log('В корзине уже есть Тысячилетний сокол!');
        return;
    }

    const car = korzina.filter(item => item.category === "car");

    if (products.Sok.category === "car" && car.length >= 1) {
        alert('Нельзя добавить больше одного средства передвиженя!');
        return;
    }

    korzina.push(products.Sok);

    localStorage.setItem("cart", JSON.stringify(korzina));
});

buttonMot.addEventListener('click', () => { // и так далее...
    const originalText = buttonMot.textContent;
    buttonMot.textContent = "Добавлено в корзину!";

    setTimeout(() => {
        buttonMot.textContent = originalText;
    }, 1000);
    let korzina = JSON.parse(localStorage.getItem("cart")) || [];

    const already = korzina.some(item => item.name === products.Mot);

    if (already) {
        console.log('В корзине уже есть Электроцикл!');
        return;
    }

    const car = korzina.filter(item => item.category === "car");

    if (products.Mot.category === "car" && car.length >= 1) {
        alert('Нельзя добавить больше одного средства передвиженя!');
        return;
    }

    korzina.push(products.Mot);

    localStorage.setItem("cart", JSON.stringify(korzina));
});

buttonFuf.addEventListener('click', () => { // и так далее...
    const originalText = buttonFuf.textContent;
    buttonFuf.textContent = "Добавлено в корзину!";

    setTimeout(() => {
        buttonFuf.textContent = originalText;
    }, 1000);
    let korzina = JSON.parse(localStorage.getItem("cart")) || [];

    const already = korzina.some(item => item.name === products.Fuf);

    if (already) {
        console.log('В корзине уже есть Логово Фуфелшмердца.inc!');
        return;
    }

    const house = korzina.filter(item => item.category === "house");

    if (products.Fuf.category === "house" && house.length >= 1) {
        alert('Нельзя добавить больше одного логова!');
        return;
    }

    korzina.push(products.Fuf);

    localStorage.setItem("cart", JSON.stringify(korzina));
});

buttonLog.addEventListener('click', () => { // и так далее...
    const originalText = buttonLog.textContent;
    buttonLog.textContent = "Добавлено в корзину!";

    setTimeout(() => {
        buttonLog.textContent = originalText;
    }, 1000);
    let korzina = JSON.parse(localStorage.getItem("cart")) || [];

    const already = korzina.some(item => item.name === products.Log);

    if (already) {
        console.log('В корзине уже есть Логово Бетмена!');
        return;
    }

    const house = korzina.filter(item => item.category === "house");

    if (products.Log.category === "house" && house.length >= 1) {
        alert('Нельзя добавить больше одного логова!');
        return;
    }

    korzina.push(products.Log);

    localStorage.setItem("cart", JSON.stringify(korzina));
});

buttonDom.addEventListener('click', () => { // и так далее...
    const originalText = buttonDom.textContent;
    buttonDom.textContent = "Добавлено в корзину!";

    setTimeout(() => {
        buttonDom.textContent = originalText;
    }, 1000);
    let korzina = JSON.parse(localStorage.getItem("cart")) || [];

    const already = korzina.some(item => item.name === products.Dom);

    if (already) {
        console.log('В корзине уже есть Дом с бункером!');
        return;
    }

    const house = korzina.filter(item => item.category === "house");

    if (products.Dom.category === "house" && house.length >= 1) {
        alert('Нельзя добавить больше одного логова!');
        return;
    }

    korzina.push(products.Dom);

    localStorage.setItem("cart", JSON.stringify(korzina));
});

buttonMks.addEventListener('click', () => { // и так далее...
    const originalText = buttonMks.textContent;
    buttonMks.textContent = "Добавлено в корзину!";

    setTimeout(() => {
        buttonMks.textContent = originalText;
    }, 1000);
    let korzina = JSON.parse(localStorage.getItem("cart")) || [];

    const already = korzina.some(item => item.name === products.Mks);

    if (already) {
        console.log('В корзине уже есть МКС с лазером!');
        return;
    }

    const house = korzina.filter(item => item.category === "house");

    if (products.Mks.category === "house" && house.length >= 1) {
        alert('Нельзя добавить больше одного логова!');
        return;
    }

    korzina.push(products.Mks);

    localStorage.setItem("cart", JSON.stringify(korzina));
});

buttonKru.addEventListener('click', () => { // и так далее...
    const originalText = buttonKru.textContent;
    buttonKru.textContent = "Добавлено в корзину!";

    setTimeout(() => {
        buttonKru.textContent = originalText;
    }, 1000);
    let korzina = JSON.parse(localStorage.getItem("cart")) || [];

    const already = korzina.some(item => item.name === products.Kru);

    if (already) {
        console.log('В корзине уже есть Крюк-кошка!');
        return;
    }

    const gadget = korzina.filter(item => item.category === "gadget");

    if (products.Mks.category === "gadget" && gadget.length >= 1) {
        alert('Нельзя добавить больше одного гаджета!');
        return;
    }

    korzina.push(products.Kru);

    localStorage.setItem("cart", JSON.stringify(korzina));
});
buttonOch.addEventListener('click', () => { // и так далее...
    const originalText = buttonOch.textContent;
    buttonOch.textContent = "Добавлено в корзину!";

    setTimeout(() => {
        buttonOch.textContent = originalText;
    }, 1000);
    let korzina = JSON.parse(localStorage.getItem("cart")) || [];

    const already = korzina.some(item => item.name === products.Och);

    if (already) {
        console.log('В корзине уже есть Очки ночного видения!');
        return;
    }

    const gadget = korzina.filter(item => item.category === "gadget");

    if (products.Och.category === "gadget" && gadget.length >= 1) {
        alert('Нельзя добавить больше одного гаджета!');
        return;
    }

    korzina.push(products.Och);

    localStorage.setItem("cart", JSON.stringify(korzina));
});
buttonTep.addEventListener('click', () => { // и так далее...
    const originalText = buttonTep.textContent;
    buttonTep.textContent = "Добавлено в корзину!";

    setTimeout(() => {
        buttonTep.textContent = originalText;
    }, 1000);
    let korzina = JSON.parse(localStorage.getItem("cart")) || [];

    const already = korzina.some(item => item.name === products.Tep);

    if (already) {
        console.log('В корзине уже есть Телепорт!');
        return;
    }

    const gadget = korzina.filter(item => item.category === "gadget");

    if (products.Tep.category === "gadget" && gadget.length >= 1) {
        alert('Нельзя добавить больше одного гаджета!');
        return;
    }

    korzina.push(products.Tep);

    localStorage.setItem("cart", JSON.stringify(korzina));
});
buttonBro.addEventListener('click', () => { // и так далее...
    const originalText = buttonBro.textContent;
    buttonBro.textContent = "Добавлено в корзину!";

    setTimeout(() => {
        buttonBro.textContent = originalText;
    }, 1000);
    let korzina = JSON.parse(localStorage.getItem("cart")) || [];

    const already = korzina.some(item => item.name === products.Bro);

    if (already) {
        console.log('В корзине уже есть Бронежилет!');
        return;
    }

    const gadget = korzina.filter(item => item.category === "gadget");

    if (products.Bro.category === "gadget" && gadget.length >= 1) {
        alert('Нельзя добавить больше одного гаджета!');
        return;
    }

    korzina.push(products.Bro);

    localStorage.setItem("cart", JSON.stringify(korzina));
});
