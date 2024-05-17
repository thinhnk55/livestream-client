$("#bt").on("click", function () {
  var result = startUpdate();
  if (result) {
    updateDonation();
  }
});
