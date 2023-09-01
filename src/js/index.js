let massul = ['gitten', 'gooten', 'gritten', 'gauten', 'ginten', 'gapten', 'groomen', 'growmen']

let git = document.querySelector('.dop__link')

massul.forEach(element => {
    git.insertAdjacentHTML('beforeend', `<li class="link__li"><a href="https://www.youtube.com/@Cucumber_-tv" class="link__ssilka">${element}</a></li>`) 
});