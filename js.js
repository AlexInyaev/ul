
function drawMarker(index) {
    let progressCollection = document.querySelectorAll('.progressLi');

    for (let i = 0; i < progressCollection.length; i++) {
        if (i < index) {

            progressCollection[i].classList.add('progressLiFinished');

        } else {

            progressCollection[i].classList.add('makeColorLineForActiveElements', 'progressLiNotStarted');

        }
    }

}

drawMarker(+prompt('Введите число от 1 до 5', 2));



