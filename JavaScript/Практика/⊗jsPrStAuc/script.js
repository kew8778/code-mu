'use stirct';

const countries = [
    'Австралия', 'Австрия', 'Азербайджан', 'Аргентина', 'Афганистан',
    'Белоруссия', 'Бельгия', 'Болгария', 'Бразилия', 'Великобритания',
    'Венгрия', 'Германия', 'Греция', 'Грузия', 'Египет', 'Израиль',
    'Индия', 'Индонезия', 'Ирак', 'Иран', 'Испания', 'Италия', 'Казахстан',
    'Канада', 'Кипр', 'Китай', 'Корея', 'Латвия', 'Ливан', 'Литва',
    'Малайзия', 'Мальдивы', 'Мексика', 'Молдавия', 'Нигерия', 'Нидерланды',
    'Новая Зеландия', 'ОАЭ', 'Пакистан', 'Польша', 'Россия', 'Румыния',
    'Саудовская Аравия', 'Сингапур', 'Сирия', 'США', 'Сомали', 'Таджикистан',
    'Таиланд', 'Турция', 'Узбекистан', 'Украина', 'Филиппины', 'Финляндия',
    'Франция', 'Хорватия', 'Чехия', 'Швейцария', 'Швеция', 'Эстония', 'ЮАР',
    'Ямайка', 'Япония',
];

    const inp = document.querySelector('.auto-completion__inp');
    const list = document.querySelector('.auto-completion__list');

    inp.addEventListener('input', outputAutoCompletion);

    function outputAutoCompletion() {
        list.innerHTML = '';

        const str = inp.value;

        if (str.length === 0) return;

        for (let country of countries) {
            if (country.startsWith(str)) {
                addToList(country);
            }
        }
    }

    function addToList(country) {
        const li = document.createElement('li');
        li.textContent = country;

        li.addEventListener('click', function() {
            inp.value = this.textContent;
            list.innerHTML = '';
        });

        list.appendChild(li);
    }
