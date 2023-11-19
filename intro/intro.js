const stars = 500

for (let i =0; i < stars; i++) {
    let star = document.createElement("div")
    star.className = 'stars'
    var xy = randomPosition();
    star.style.top = xy[0] + 'px'
    star.style.left = xy[1] + 'px'
    star.style.right = xy[2] + 'px'
    star.style.bottom =xy[3] + 'px'
    document.body.append(star)
}

function randomPosition() {
    var y = window.innerWidth
    var x = window.innerHeight
    var randomX = Math.floor(Math.random() * x)
    var randomY = Math.floor(Math.random() * y)
    return [randomX, randomY]
}
document.getElementById('startButton').addEventListener('click', function() {
    window.location.href = '../mainpage/mainpage.html'; // Replace 'main.html' with the actual filename of your main HTML file
});