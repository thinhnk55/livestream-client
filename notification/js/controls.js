var isShowingMessage = false;

function hideAll(){
    isShowingMessage = false;
    let donation = document.getElementById("donation");
    donation.style.display = 'none';
    let bt3 = document.getElementById("bt3");
    bt3.style.display = 'none';
}

function showStartButton(){
    isShowingMessage = true;
    let bt3 = document.getElementById("bt3");
    bt3.style.display = 'block';
    let donation = document.getElementById("donation");
    donation.style.display = 'block';
}

function showMessage(amount, message, timeout){
    isShowingMessage = true;
    tingting();
    let donation = document.getElementById("donation");
    donation.style.display = 'block';
    var amountElement = document.getElementById("amount");
    amountElement.textContent = formatToVND(amount);
    var messageElement = document.getElementById("message");
    messageElement.textContent = formatMessage(message);
    setTimeout(hideAll, timeout);
}
function tingting(){
    var audio = new Audio('audio/tingting.mp3');
    audio.play();
}

$("#bt3").on("click", function(){
    hideAll();
    showMessage(10000, "Chuc cho giai dau AOE TOURNAMENT thanh cong tot dep", 2000);
});

