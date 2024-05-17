var limit = 2;
function startUpdate() {
  let element = document.getElementById("limit");
  console.log("limit: " + element.value);
  limit = parseInt(element.value);
  if (!limit || limit <= 0) {
    alert("Nhập Số Dòng Bạn Muốn Lấy");
    return false;
  }
  return true;
}

function onUpdateMessage(array) {
  hideControl();
  $("#recent").empty();
  array.forEach((data) => {
    var child = $(`
        <a class="message">
          <strong>${formatToVND(data.amount)}</strong> -
          <strong>${formatMessage(data.message)}</strong>
        </a>`);
    $("#recent").append(child);
  });
}

function hideControl() {
  let control = document.getElementById("control");
  control.style.display = "none";
}
