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