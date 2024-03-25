/*
let themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');
let themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');
if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia(
        '(prefers-color-scheme: dark)').matches)) {
    //themeToggleLightIcon.classList.remove('hidden');
    document.documentElement.setAttribute('data-theme', 'dark');
} 



let themeToggleBtn = document.getElementById('theme-toggle');
themeToggleBtn.addEventListener('click', function () {
    themeToggleDarkIcon.classList.toggle('hidden');
    themeToggleLightIcon.classList.toggle('hidden');
    if (localStorage.getItem('color-theme')) {
        if (localStorage.getItem('color-theme') === 'light') {
            //document.documentElement.classList.add('dark');
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('color-theme', 'dark');
        } 
        else {
            //document.documentElement.classList.remove('dark');
            document.documentElement.setAttribute('data-theme', 'light');
            localStorage.setItem('color-theme', 'light');
        }
    } else {
        if (document.documentElement.classList.contains('dark')) {
            //document.documentElement.classList.remove('dark');
            document.documentElement.setAttribute('data-theme', 'light');
            localStorage.setItem('color-theme', 'light');
        } 
        else {
            //document.documentElement.classList.add('dark');
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('color-theme', 'dark');
        }
    }
});
*/

let themeToggleBtn = document.getElementById('theme-toggle-btn');
if (localStorage.getItem('color-theme')) {
    //console.log("PAGE LOAD: " + localStorage.getItem('color-theme'));
    if (localStorage.getItem('color-theme') === 'light') {
        document.documentElement.setAttribute('data-theme', 'light');
        themeToggleBtn.classList.add('swap-active');
        //localStorage.setItem('color-theme', 'dark');
    } 
    else {
        document.documentElement.setAttribute('data-theme', 'dark');
        themeToggleBtn.classList.remove('swap-active');
        //localStorage.setItem('color-theme', 'light');
    }
}
themeToggleBtn.addEventListener('click', function () {
    //console.log(localStorage.getItem('color-theme'));
    // Moon icon showing
    //if (themeToggleBtn.classList.contains('swap-active')) {
    if (document.documentElement.getAttribute('data-theme') === 'light') {
        localStorage.setItem('color-theme', 'dark');
        themeToggleBtn.classList.remove('swap-active');
    }
    else {
        localStorage.setItem('color-theme', 'light');
        themeToggleBtn.classList.add('swap-active');
    }
    //console.log(localStorage.getItem('color-theme'));
});

function scroll_to(anchorName) {
    document.getElementById(anchorName).scrollIntoView({
        behavior: 'smooth'
    });
}

