masscard = [
    {
        'img': 'src/img/cucumber.jpg',
        'id': 1,
        'title': "cucumber",
        'text': 'I love cucumber because cucumber has green color',
        'btn': 'Hi cuc'
    },
    {
        'img': 'src/img/YT.png',
        'id': 2,
        'title': "YT",
        'text': 'I love youtube because cucumber has red color',
        'btn': 'Hi YT'
    },
    {
        'img': 'src/img/vk.png',
        'id': 3,
        'title': "vk",
        'text': 'I love vk because cucumber has blue color',
        'btn': 'Hi vk'
    },
]


let card = document.querySelector(".card")
for (let i = 0; i < masscard.length; i++) {
    card.insertAdjacentHTML('afterend', `<div class="card"><img src=${masscard[i].img} alt="" class="card__img"><h2 class="card__title">${masscard[i].title}</h2> <hr class="card__line"><p class="card__text">${masscard[i].text}</p> <button class="card__btn">${masscard[i].btn}</button></div>`);
}