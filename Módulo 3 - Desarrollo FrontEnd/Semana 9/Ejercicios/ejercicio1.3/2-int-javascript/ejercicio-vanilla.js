document.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementById('boxContainer');
    const toggleColorsBtn = document.getElementById('toggleColorsBtn');
    const toggleRoundedBordersBtn = document.getElementById('toggleRoundedBordersBtn');
    const addNewBoxBtn = document.getElementById('addNewBoxBtn');

    toggleColorsBtn.addEventListener('click', function() {
        const boxes = container.querySelectorAll('.box');

        boxes.forEach(box => {
            if (box.classList.contains('box--color-primary')) {
                 box.classList.remove('box--color-primary');
                 box.classList.add('box--color-secondary');
            } else if (box.classList.contains('box--color-secondary')) {
                 box.classList.remove('box--color-secondary');
                 box.classList.add('box--color-primary');
            } else {
                 box.classList.add('box--color-primary');
            }
        });
    });

    toggleRoundedBordersBtn.addEventListener('click', function() {
        const boxes = container.querySelectorAll('.box');
        
        boxes.forEach(box => {
            box.classList.toggle('box--rounded');
        });
    });
    addNewBoxBtn.addEventListener('click', function() {
        const newBox = document.createElement('div');
        newBox.classList.add('box', 'box--color-primary');
        
        container.appendChild(newBox);
    });
});