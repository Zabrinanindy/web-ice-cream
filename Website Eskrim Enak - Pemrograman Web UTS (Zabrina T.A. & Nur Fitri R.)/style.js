// JavaScript untuk tombol dropdown
document.getElementById("dropdownButton").addEventListener("click", function() {
    var dropdownContent = document.getElementById("dropdownContent");
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
    }
  });
  
  //Javascript untuk tidak bisa klik kanan
  document.addEventListener('contextmenu', function (e) {
    e.preventDefault();
  });