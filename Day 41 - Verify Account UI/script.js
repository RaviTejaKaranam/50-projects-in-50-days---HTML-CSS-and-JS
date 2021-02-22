const codes = document.querySelectorAll(".code");
codes[0].focus();

codes.forEach((code, idx) => {
  code.addEventListener("keydown", (e) => {
    if (e.key >= 0 && e.key <= 9) {
      code.value = "";
      setTimeout(() => {
        console.log(idx + 1);
        codes[idx + 1].focus();
      }, 10);
    } else if ((e.key = "Backspace")) {
      setTimeout(() => {
          codes[idx - 1].focus();
          codes[idx - 1].value = "";
      }, 10);
    }
  });
});
