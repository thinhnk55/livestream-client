var isShowingMessage = false;
function formatToVND(number) {
    var formattedNumber = number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    formattedNumber += " VND";
    return formattedNumber;
}
function formatMessage(message) {
    if(message.startsWith("MBVCB")){
       var indices = [];
      var index = -1;
      while ((index = message.indexOf('.', index + 1)) !== -1) {
          indices.push(index);
      }
      return message.substring(indices[2]+1, indices[3]);
    }
    return message;
}

function hideAll(){
    isShowingMessage = false;
    let donation = document.getElementById("donation");
    donation.style.display = 'none';
    let bt3 = document.getElementById("bt3");
    bt3.style.display = 'none';
}

function showStartButton(){
    isShowingMessage = false;
    let donation = document.getElementById("donation");
    donation.style.display = 'none';
    let bt3 = document.getElementById("bt3");
    bt3.style.display = 'block';
}

function showMessage(amount, message){
    isShowingMessage = true;
    tingting();
    setTimeout(function() {
        tingting();
    }, 200);
    let donation = document.getElementById("donation");
    donation.style.display = 'block';
    var amountElement = document.getElementById("amount");
    amountElement.textContent = formatToVND(amount);
    var messageElement = document.getElementById("message");
    messageElement.textContent = formatMessage(message);
    setTimeout(hideAll, 20000);
}
function tingting(){
    var audio = new Audio('audio/ting.mp3');
    audio.play();
}

$("#bt3").on("click", function(){
    hideAll();
});

