masslist = [
    {
        'id': 1,
        'title': "HTML",
        'text': 'canvas',
        'line_width': '22%',
    },
    {
        'id': 2,
        'title': "CSS",
        'text': 'newbee',
        'line_width': '42%',
    },
    {
        'id': 3,
        'title': "JavaScript",
        'text': 'lox',
        'line_width': '12%',
    },
    
]


let list = document.querySelector(".Tech__list")
for (let i = 0; i < masslist.length; i++) {
    list.insertAdjacentHTML('beforeend', `<div class="Tech__item"><div class="BarT__text"><h1 class="item__title">${masslist[i].title}</h1><h1 class="item__title">${masslist[i].text}</h1></div><div class="item__barB"><div class="BarB__line" style="width: ${masslist[i].line_width};"></div></div></div>`);
}