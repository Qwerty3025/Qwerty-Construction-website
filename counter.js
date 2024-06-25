const counter = document.querySelector('counter');
const toggleIcon = document.querySelector('.toggle-icon');
const menuItems = document.querySelector('.menu-items');
const x_icon = document.querySelector('.fa-x');


toggleIcon.addEventListener('click', function() {
menuItems.style.display = 'flex';

    // toggleIcon.addEventListener('click', function() {
    //     menuItems.classList.toggle('menu-items');
    //     console.log
    // });
});

x_icon.addEventListener('click', function () {
    menuItems.style.display = 'none';
})

document.addEventListener("DOMContentLoaded", function() {
    var counters = document.querySelectorAll('.counter-number');
    counters.forEach(function(counter) {
        var duration = parseInt(counter.dataset.duration);
        var toValue = parseInt(counter.dataset.toValue);
        var fromValue = parseInt(counter.dataset.fromValue) || 0;
        var delimiter = counter.dataset.delimiter || '';

        var start = performance.now();
        var end = start + duration;

        var update = function() {
            var now = performance.now();
            var progress = (now - start) / duration;
            var current = Math.round(progress * (toValue - fromValue) + fromValue);
            counter.textContent = current.toLocaleString() + delimiter;

            if (now < end) {
                requestAnimationFrame(update);
            } else {
                counter.textContent = toValue.toLocaleString() + delimiter;
                console.log;
            }
        };

        update();
    });
});