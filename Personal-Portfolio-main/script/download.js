document.querySelector(".btn").addEventListener("click", function () {
  var cvUrl = './Nitish Kumar.pdf';
  var link = document.createElement("a");
  link.href = cvUrl;
  link.download = "Nitish-Kumar.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
});
