'use strict'

document.addEventListener("DOMContentLoaded", () => { // прогружаем скрипт первым делом
    let korzina = JSON.parse(localStorage.getItem("cart")) || []; // получаем информацию от магазина, что лежит в массив корзины...
    console.log(korzina) // еще одна проверка работы локал сторедж, которую я забыл удалить...

    if (korzina.some(item => item.name === "molot")) { // если в массиве есть товар молот...
        const Tovar1 = document.querySelector('.tovar1'); // ищем его...
        Tovar1.style.display = 'block'; // и показываем
    }
    if (korzina.some(item => item.name === "sit")) { // и так далее...
        const Tovar2 = document.querySelector('.tovar2');
        Tovar2.style.display = 'block';
    }
    if (korzina.some(item => item.name === "pistol")) { // и так далее...
        const Tovar3 = document.querySelector('.tovar3');
        Tovar3.style.display = 'block';
    }
    if (korzina.some(item => item.name === "per")) { // и так далее...
        const Tovar4 = document.querySelector('.tovar4');
        Tovar4.style.display = 'block';
    }
    if (korzina.some(item => item.name === "bet")) { // и так далее...
        const Tovar5 = document.querySelector('.tovar5');
        Tovar5.style.display = 'block';
    }
    if (korzina.some(item => item.name === "gru")) { // и так далее...
        const Tovar6 = document.querySelector('.tovar6');
        Tovar6.style.display = 'block';
    }
    if (korzina.some(item => item.name === "sok")) { // и так далее...
        const Tovar7 = document.querySelector('.tovar7');
        Tovar7.style.display = 'block';
    }
    if (korzina.some(item => item.name === "mot")) { // и так далее...
        const Tovar8 = document.querySelector('.tovar8');
        Tovar8.style.display = 'block';
    }
    if (korzina.some(item => item.name === "fuf")) { // и так далее...
        const Tovar9 = document.querySelector('.tovar9');
        Tovar9.style.display = 'block';
    }
    if (korzina.some(item => item.name === "log")) { // и так далее...
        const Tovar10 = document.querySelector('.tovar10');
        Tovar10.style.display = 'block';
    }
    if (korzina.some(item => item.name === "dom")) { // и так далее...
        const Tovar11 = document.querySelector('.tovar11');
        Tovar11.style.display = 'block';
    }
    if (korzina.some(item => item.name === "mks")) { // и так далее...
        const Tovar12 = document.querySelector('.tovar12');
        Tovar12.style.display = 'block';
    }
    if (korzina.some(item => item.name === "kru")) { // и так далее...
        const Tovar13 = document.querySelector('.tovar13');
        Tovar13.style.display = 'block';
    }
    if (korzina.some(item => item.name === "och")) { // и так далее...
        const Tovar14 = document.querySelector('.tovar14');
        Tovar14.style.display = 'block';
    }
    if (korzina.some(item => item.name === "tep")) { // и так далее...
        const Tovar15 = document.querySelector('.tovar15');
        Tovar15.style.display = 'block';
    }
    if (korzina.some(item => item.name === "bro")) { // и так далее...
        const Tovar16 = document.querySelector('.tovar16');
        Tovar16.style.display = 'block';
    }

    const deleteButton = document.querySelector('.delete'); // берем кнопку "удалить товары из корзины"

    deleteButton.addEventListener('click', function() { // если кнопку удалить товары нажата...
    localStorage.clear() // очищаем локал сторедж
    location.reload() // перезагружаем страницу
    });

    let itogCena = document.querySelector('.itog') // берем слово "итог"

    let sum = 0 // берем сумму, значение суммы которой 0
    korzina.forEach(item => { // берем из массива товаров корзины их цены
        sum += item.price //  складыаем
    });
    itogCena.textContent = "Итого: " + sum + "$"; // меняем слово итог на сукмму всех товаров



    const card = document.querySelector(".card-form"); // Ищем форму
    const numberForm = document.querySelector(".number"); // Ищем форму имени
    const dateForm = document.querySelector(".date"); // Ищем  форму почты
    const nameForm = document.querySelector(".name"); // Ищем форму пароля
    const CVC = document.querySelector(".CVC"); // Ищем форму повтора пароля

    card.addEventListener("submit", function(e) { // когда ввели все данные карточки и нгажали кнопку "оплатить"
        e.preventDefault();
        if (nameForm.value.length <= 1) { // если длинна имени меньше 1
            alert('Имя должно содержать более чем 1 букву!')
            return;
        }
        if (nameForm.value !== "SUPER HERO") { // если имя не супер хиро
            alert("Указано неверное имя держателя карты!")
            return;
        }
        if (numberForm.value.length < 16) { // если номер карточки меньше 16
            alert('Номер карты должнен содержать не менее 16 символов!')
            return;
        }
        if (numberForm.value !== "1234 5678 9101 2345") { // если номер карточки не 1234 5678 9101 2345
            alert('Номер карты неверный!')
            return;
        }
        if (! dateForm.value.includes("/")) { // если дата не содержит /
            alert('Срок годности карты должен содержать символ "/"!')
            return;
        }
        if (CVC.value.length < 3) { //  если cvc код не содержит 3 цифры
            alert('CVC код должен содержать не менее 3 цифр!')
            return;
        }
        if (CVC.value !== "273") { // если cvc код не 273
            alert('CVC код не совпадает!')
            return;
        }
        if (sum > "9999999999") { // если сумма = 99999999999 (прикол чисто)
            alert(`На вас взят кредит в размере ${sum}$!`)
        }
        if (sum <= 0) { // если сумма = 0 (ничего не покупают)
            alert('Вы ничего не добавили в корзину для покупки!')
        }
        alert('Спасибо за покупку! Товары будут доставлены через 2.5 миллиона световых лет!')
        card-form.clear() // очистить форму
    }    
  );

});
