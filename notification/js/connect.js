var list_donation_url = "https://api.godoo.asia/pw/donation/list";
var token = "pw-SLQOP4556acoqwke";
var last_id = 0;
var waitingDonation = [];
function updateDonation() {
  $.ajax({
    url: list_donation_url,
    method: "GET",
    headers: {
      "Access-Control-Allow-Origin": "*",
      token: token,
    },
    success: function (response) {
      var json = JSON.parse(response);
      if (json.e == 0) {
        var array = json.d;
        last_id = array[0].id;
        console.log("last id: " + last_id);
        startLoop();
      }
    },
    error: function (xhr, status, error) {
      alert("Kiểm tra kết nối Internet");
    },
  });
}
updateDonation();
function startLoop() {
  setInterval(function () {
    loopListDonation();
    onNewDonation();
  }, 1000); // 1000 milliseconds = 1 second
}

function loopListDonation() {
  $.ajax({
    url: list_donation_url,
    method: "GET",
    headers: {
      token: token,
    },
    success: function (response) {
      var json = JSON.parse(response);
      if (json.e == 0) {
        var array = json.d;
        array.forEach((element) => {
          if (element.id > last_id) {
            last_id = element.id;
            waitingDonation.push(element);
          }
        });
      }
    },
    error: function (xhr, status, error) {
      alert("Kiểm tra kết nối Internet");
    },
  });
}

function onNewDonation() {
  if (!isShowingMessage && waitingDonation.length > 0) {
    var lastElement = waitingDonation.pop();
    showMessage(lastElement.amount, lastElement.message, 20000);
  }
}
