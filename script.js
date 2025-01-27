function showBar(){
    const bar = document.querySelector('.bar')
    const toggle_positive = document.getElementById("toggle-positive")
    toggle_positive.style.display = "none"
    const toggle_negative = document.getElementById("toggle-negative")
    toggle_negative.style.display = "block"
    bar.style.display = "flex"
}

function closeBar(){
    const bar = document.querySelector('.bar')
    const toggle_positive = document.getElementById("toggle-positive")
    toggle_positive.style.display = "block"
    const toggle_negative = document.getElementById("toggle-negative")
    toggle_negative.style.display = "none"
    bar.style.display = "none"
}

    