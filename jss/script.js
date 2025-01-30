document.getElementById("calculateBmi").addEventListener("click", function () {
  let weight = parseFloat(document.getElementById("weight").value);
  let height = parseFloat(document.getElementById("height").value) / 100; // Konversi cm ke meter

  if (isNaN(weight) || isNaN(height) || height === 0) {
    alert("Masukkan berat dan tinggi badan dengan benar.");
    return;
  }

  let bmi = weight / (height * height);
  document.getElementById("bmi-value").innerText = bmi.toFixed(1);

  let status = "";
  if (bmi < 18.5) {
    status = "Berat Badan Kurang";
    document.getElementById("underweight").style.display = "block";
    document.getElementById("normal").style.display = "none";
    document.getElementById("overweight").style.display = "none";
  } else if (bmi >= 18.5 && bmi < 25) {
    status = "Berat Badan Normal";
    document.getElementById("underweight").style.display = "none";
    document.getElementById("normal").style.display = "block";
    document.getElementById("overweight").style.display = "none";
  } else {
    status = "Kelebihan Berat Badan";
    document.getElementById("underweight").style.display = "none";
    document.getElementById("normal").style.display = "none";
    document.getElementById("overweight").style.display = "block";
  }

  document.getElementById("bmi-status").innerText = status;
  // Event listener untuk tombol Reset
  document.querySelector(".btn-secondary").addEventListener("click", function () {
    document.getElementById("bmi-value").innerText = "0";
    document.getElementById("bmi-status").innerText = "";
    // Sembunyikan semua informasi tambahan
    document.getElementById("underweight").style.display = "none";
    document.getElementById("normal").style.display = "none";
    document.getElementById("overweight").style.display = "none";
  });
});
