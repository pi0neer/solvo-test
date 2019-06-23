Проект создан с помощью [Vue CLI 3](https://cli.vuejs.org).
# Задание
1.Имеем countries.json файл, содержит список стран


    name: "Russia",
    population: 146781095,
    capital: "Moscow",
    location:{
        latitude:55.75222,
        longitude:37.61556
    }
2.Необходимо загрузить список стран в объектную модель, используя любой доступный HTTP клиент, основанный на промисах.
    Обработать ошибку, связанную с недоступностью файла (или ошибка парсинга json), отобразить ее в сплывающем сообщении.

3.Написать преобразователь объектов из вида


    name: "Russia",
    population: 146781095,
    capital: "Moscow",
    location:{
        latitude:55.75222,
        longitude:37.61556
    }
в 

    caption: "Moscow is the capital of Russia", 
    latitude: 55.75222, 
    longitude: 37.61556

Для формирования caption использовать 'String interpolation'.
Для задания latitude, longitude использовать 'Spread operator'

Преобразователь должен представлять из себя стрелочную функцию (arrow functions =>), 
которую можно будет передать в Array.map метод.

4.На основе преобразованных данных построить html таблицу c колонками "Caption", "Latitude", "Longitude". Дизайн таблицы свободный, желательно с применением стилей.
# Демо
Приложение размещено на [Github Pages](https://pages.github.com/) с помощью [vue-gh-pages](https://github.com/KieferSivitz/vue-gh-pages)

[Ссылка на демо](https://pi0neer.github.io/solvo-test/)

## Использованные библиотеки/фреймворки.

 - [Vuetify](https://vuetifyjs.com) - Хороший material design фреймворк, большой набор UI-компонентов, удобная grid-система, много вспомогательных классов.
 - [Lodash](https://lodash.com/) - Хорошая utility бибилиотка.
 - [Axios](https://github.com/axios/axios) - Библиотека для http-запросов, основанная на промисах. 