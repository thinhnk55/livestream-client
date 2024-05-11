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
      // Loop until there are no more occurrences of "."
      while ((index = message.indexOf('.', index + 1)) !== -1) {
          indices.push(index);
      }
      return message.substring(indices[2]+1, indices[3]);
    }
    return message;
}

function hideMessage(){
    isShowingMessage = false;
    let promotion = document.getElementById("promotion");
    promotion.style.display = 'block';
    let donation = document.getElementById("donation");
    donation.style.display = 'none';
    let bt3 = document.getElementById("bt3");
    bt3.style.display = 'none';
}

function hideAll(){
    isShowingMessage = false;
    let promotion = document.getElementById("promotion");
    promotion.style.display = 'none';
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
    let promotion = document.getElementById("promotion");
    promotion.style.display = 'none';
    let donation = document.getElementById("donation");
    donation.style.display = 'block';
    var amountElement = document.getElementById("amount");
    amountElement.textContent = formatToVND(amount);
    var messageElement = document.getElementById("message");
    messageElement.textContent = formatMessage(message);
    setTimeout(hideMessage, 20000);
}
function tingting(){
    var audio = new Audio('audio/ting.mp3');
    audio.play();
}
$("#bt1").on("click", function(){
  showMessage(10000, "Tang Cafe");
});
$("#bt2").on("click", function(){
  hideMessage();
});
$("#bt3").on("click", function(){
  hideMessage();
});

