function reset_dark_mode_btn_by_mode(mode) {
  if (mode === dark) {
    document.getElementById("bk-dark-mode-checkbox").checked = true;
  } else {
    if (mode === light) {
      document.getElementById("bk-dark-mode-checkbox").checked = false;
    } else {
      console.log(
        "reset_dark_mode_btn_by_mod is SOME TINGH GOT ERROR!! " + mode
      );
    }
  }

  console.log("local_scheme now is: " + local_scheme);
  console.log("auto_mode now is: " + auto_mode);
}
