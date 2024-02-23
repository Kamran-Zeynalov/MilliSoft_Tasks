document.querySelector('.menu').addEventListener('click', function() {
    var rightMenu = document.querySelector('.right-menu');
    var mn = document.querySelector('.mn');
    var xb = document.querySelector('.xb');
    if (rightMenu.classList.contains('animate__fadeInRight')) {
        rightMenu.classList.remove('animate__fadeInRight');
        rightMenu.classList.add('animate__fadeOutRight');
        xb.style.display = 'none';
        mn.style.display = 'block';
        setTimeout(function() {
            rightMenu.style.display = 'none';
        }, 800);
    } else {
        mn.style.display = 'none';
        xb.style.display = 'block';
        rightMenu.style.display = 'block';
        rightMenu.classList.remove('animate__fadeOutRight');
        rightMenu.classList.add('animate__fadeInRight');
    }
});