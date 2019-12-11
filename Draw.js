window.addEventListener('load',() =>{
    const canvas = document.querySelector("#canvas");
    const ctx = canvas.getContext("2d");

    canvas.height = 450;
    canvas.width = 600;

    // Painting
    let painting = false;

    function startPoint(event) {
        painting = true;
        paint(event);
    }

    function endPoint() {
        painting = false;
        ctx.beginPath();
    }

    function paint(event) {
        if(!painting) return;
        ctx.lineWidth = 5;
        ctx.lineCap = "round";


        var x = event.clientX;
        var y = event.clientY;

        ctx.lineTo(x, y);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(x, y);
    }

    //EventListener for the mouse
    canvas.addEventListener("mousedown", startPoint);
    canvas.addEventListener("mouseup", endPoint);
    canvas.addEventListener("mousemove", paint);

    // Functions for buttons
    let clear_btn = document.querySelector("#clear");
    let random_btn = document.querySelector("#random");

    clear_btn.addEventListener("click",
        function(event){
            ctx.clearRect(0, 0, 600, 450)
        })

    random_btn.addEventListener("click",
        function(event){
            event.preventDefault();
            getRandom();
        })

// Getting the random emoji's from an API website
const emojiField = document.querySelector('.emoji-area__emoji');

function setEmoji(emoji) {
    emojiField.innerHTML = emoji;
}

// Gets a random emoji from the link
function getRandom() {
    fetch('https://ranmoji.herokuapp.com/emojis/api/v.1.0/') // The link provides a text instead of an image
        .then(response => {
            response.json().then(data => {
                // console.log('data', data)
                setEmoji(data.emoji)
            })
        });
}

getRandom();

});