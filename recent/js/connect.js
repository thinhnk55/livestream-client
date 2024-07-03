var list_donation_url =
  "https://api.godoo.asia/pw/donation/list?page=0&limit=" + limit;
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
        onUpdateMessage(array);
        startLoop();
      }
    },
    error: function (xhr, status, error) {
      alert("Kiểm tra kết nối Internet");
    },
  });
}

function startLoop() {
  console.log("start Loop");
  setInterval(function () {
    loopListDonation();
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
        if (array[0].id != last_id) {
          onUpdateMessage(array);
        }
      }
    },
    error: function (xhr, status, error) {
      alert("Kiểm tra kết nối Internet");
    },
  });
}
