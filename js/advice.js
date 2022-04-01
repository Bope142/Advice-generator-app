const loadingAdvice = () => {
    const loaderContainer = document.querySelector('.loader-data')
    if (loaderContainer.classList.contains('hidden')) {
        loaderContainer.classList.replace('hidden', 'visible')
    } else {
        loaderContainer.classList.replace('visible', 'hidden')
    }
}
const getRandomAdvice = () => {
    fetch('https://api.adviceslip.com/advice')
        .then(response => response.json())
        .then(data => {
            document.querySelector('.advice__id').innerHTML = `ADVICE  #${data.slip.id}`
            document.querySelector('.advice__text').innerHTML = `" ${data.slip.advice} "`
            document.querySelector('.btn-advice').classList.remove('load-data')
            loadingAdvice()
        })
        .catch(error => {
            alert('error when get advice ! Please try again')
            document.querySelector('.btn-advice').classList.remove('load-data')
            loadingAdvice()
        });
}
const getAdvice = () => {
    document.querySelector('.btn-advice').addEventListener('click', () => {
        if (!document.querySelector('.btn-advice').classList.contains('load-data')) {
            document.querySelector('.btn-advice').classList.add('load-data')
            loadingAdvice()
            getRandomAdvice()
        } else {
            console.log('gggg')
        }

    })
}


window.addEventListener('load', () => {
    loadingAdvice()
    getRandomAdvice()
    getAdvice()
})
