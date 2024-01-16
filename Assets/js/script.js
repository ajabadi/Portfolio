const flexboxes = document.querySelectorAll('.container, .box-2, .box-3');

flexboxes.forEach(flexbox => {
    flexbox.addEventListener('click', () => {
        // Close already opened box if any
        flexboxes.forEach(box => {
            if (box !== flexbox && box.classList.contains('active')) {
                box.classList.remove('active');
            }
        });
        // Toggle the current box
        flexbox.classList.toggle('active');
    });
});

    document.addEventListener('DOMContentLoaded', function () {
        var container = document.querySelector('.details');

        container.addEventListener('wheel', function(e) {
            var delta = e.deltaY || e.wheelDelta;

            if ((delta < 0 && container.scrollTop === 0) || 
                (delta > 0 && container.scrollHeight - container.clientHeight === container.scrollTop)) {
                e.preventDefault();
            }
        });
    });

 


