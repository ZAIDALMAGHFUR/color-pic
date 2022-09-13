const imgInput = document.querySelector('#img-select')
const imgPreview = document.querySelector('.preview')

const eyeDropper = new EyeDropper()
const pickBtn = document.querySelector('.open-picker')
const result = document.querySelector('.res')
imgInput.addEventListener('change', function () {
    const file = this.files[0]
    if (!file) return
    const reader = new FileReader()
    reader.addEventListener('load', function () {
        imgPreview.src = this.result
    })
    reader.readAsDataURL(file)
})
pickBtn.addEventListener('click', function () {
    eyeDropper.open()
        .then(res => {
            result.innerHTML = `picked color: <b>${res.sRGBHex}</b>`
        })

        .catch(err => {
            console.log("user caancled the slection");
        })
})