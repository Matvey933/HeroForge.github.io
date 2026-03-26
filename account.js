'use strict'

document.addEventListener("DOMContentLoaded", () => { // прогружаем скрипт первым делом

  console.log(localStorage.getItem("username")); // это проверка если че (которую я забыл удалить)

  const form = document.querySelector(".register-form"); // Ищем форму
  const nameForm = document.querySelector(".name"); // Ищем форму имени
  const emailForm = document.querySelector(".email"); // Ищем  форму почты
  const passwordForm = document.querySelector(".password2"); // Ищем форму пароля
  const passwordAgain = document.querySelector(".again"); // Ищем форму повтора пароля
  const textUspeh = document.querySelector(".uspeh"); // Ищем форму повтора пароля

  form.addEventListener("submit", function(e) { // Когда нажали кнопку "отправить"...
    e.preventDefault(); // Не перезагружать страницу
    if (nameForm.value.length <= 1) { //  если имя меньше чем 1 буква
      alert('Имя должно содержать более чем 1 букву!')
      return;
    }
    if (emailForm.value.length < 5) { //  если почта меньше чем 5 слов
      alert('Почта должна содержать не менее 5 символов!')
      return;
    }
    if (! emailForm.value.includes("@")) { // если почта не содержит символ @
      alert('Почта должна содержать символ @!')
      return;
    }
    if (passwordForm.value.length < 4) { //  если пароль меньше чем 4 символа
      alert('Для вашей безопасности пароль должен быть 4 или более символов!')
      return;
    }
    if (passwordForm.value !== passwordAgain.value) { // если проверки не совпадают
      alert('Пароли не совпадают!')
      return;
    }
      alert('Спасибо за регистрацию!')
      form.style.display = 'none'; // удаляем ворму записи
      localStorage.setItem("username", nameForm.value) // сохраняем имя пользователя
    }
  );

  const savedUser = localStorage.getItem("username") //  сохрянаем

  if (savedUser) { // если есть сохраненное имя пользователя
    alert(`${savedUser}, Вы уже зарегистрировались на нашем сайте!`) //  пишем, что вы уже зарегались
    form.style.display = 'none'; // скрываем форму, чтобы пользователь не зарегался еще ращ
  }
  else {
    alert("Зарегистрируйтесь на нашем сайте!")
  }
})
