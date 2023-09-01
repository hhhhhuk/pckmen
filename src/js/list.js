masslist = [
    {
        'id': 1,
        'title': "HTML",
        'lvl': 20,
    },
    {
        'id': 2,
        'title': "CSS",
        'lvl': 30,
    },
    {
        'id': 3,
        'title': "JavaScript",
        'lvl': 10,
    },
    
]


let list = document.querySelector(".Tech__list")
for (let i = 0; i < masslist.length; i++) {
    list.insertAdjacentHTML('beforeend', `<div class="Tech__item"><div class="BarT__text"><h1 class="item__title">${masslist[i].title}</h1><h1 class="item__title">${masslist[i].lvl<=10 ?"ll":masslist[i].lvl>=15?"lr":"mr"}</h1></div><div class="item__barB"><div class="BarB__line" style="width: ${masslist[i].lvl}%;"></div></div></div>`);
}
 