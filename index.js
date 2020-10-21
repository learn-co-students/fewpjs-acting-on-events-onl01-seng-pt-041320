// Your code here

function moveDodgerLeft() {
    let l = dodger.style.left.replace("px", "")
    let left = parseInt(l, 10)
    if (left > 0) {
        dodger.style.left = `${left - 1}px`
    }
}

function moveDodgerRight() {
    let r = dodger.style.left.replace('px', '')
    let left = parseInt(r, 10)
    if (left > 0) {
        dodger.style.left = `${left + 1}px`
    }
}

document.addEventListener("keydown", function (e) {
    if (e.key == "ArrowLeft") {
        moveDodgerLeft()
    } else if (e.key == "ArrowRight") {
        moveDodgerRight()
    }
})