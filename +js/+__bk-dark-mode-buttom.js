// █████████████████████████████████████████████████████████████████████████-->
// -----------
// 常數變數區域
// -----------
// █████████████████████████████████████████████████████████████████████████-->
let local_u_light = localStorage.getItem("u_light") || "off";
let local_u_dark = localStorage.getItem("u_dark") || "off";
let system_scheme = localStorage.getItem("system") || "dark";
let lightBtn = document.getElementById("bk-DKM-light-btn");
let darkBtn = document.getElementById("bk-DKM-dark-btn");
let btnAnimed = document.getElementById("bk-DKM-mode");

let DKM_click_counter = 0;

// console.log(DKM_click_counter);
// console.log("local_u_light is: " + local_u_light);
// console.log("local_u_dark is: " + local_u_dark);
// console.log("system_schem is: " + system_scheme);

// 初始化
BK_site_init();

// █████████████████████████████████████████████████████████████████████████-->
// -------
// 監聽區域
// -------
// █████████████████████████████████████████████████████████████████████████-->
// 事件監聽 按鈕按下
document.addEventListener("DOMContentLoaded", function () {
  // 確保元素存在再綁定事件處理程序
  lightBtn = document.getElementById("bk-DKM-light-btn");
  darkBtn = document.getElementById("bk-DKM-dark-btn");
  btnAnimed = document.getElementById("bk-DKM-mode");

  // 白天模式按鈕 按下
  if (lightBtn) {
    lightBtn.onclick = function () {
      toggle_local_u_light_value();
      set_site_mode("btnL");
      play_btn_animed("btnL");
    };
  }
  // 黑暗模式按鈕 按下
  if (darkBtn) {
    darkBtn.onclick = function () {
      toggle_local_u_dark_value();
      set_site_mode("btnD");
      play_btn_animed("btnD");
    };
  }
});

// 事件監聽 用戶切換主題
window
  .matchMedia("(prefers-color-scheme: dark)")
  .addEventListener("change", (event) => {
    let scheme = event.matches ? "dark" : "light";
    reset_dark_mode_btn_by(scheme);
    bk_dark_mode_debug();
    if (scheme === "dark") {
      localStorage.setItem("system", "dark");
    } else if (scheme === "light") {
      localStorage.setItem("system", "light");
    } else {
      localStorage.setItem("system", "SOME THINGS WRONG!!");
    }
  });

// █████████████████████████████████████████████████████████████████████████-->
// -------
// 功能區域
// -------
// █████████████████████████████████████████████████████████████████████████-->
function BK_site_init() {
  if (local_u_light === "off" && local_u_dark === "off") {
    clear_body_class();
    clear_DKM_btn_class();
    btnAnimed?.classList.add("bk-DKM-auto");
  } else if (local_u_light === "on" && local_u_dark === "off") {
    btnAnimed?.classList.add("bk-DKM-light");
    document.body.classList.toggle("bk-light-mode-on");
  } else if (local_u_light === "off" && local_u_dark === "on") {
    btnAnimed?.classList.add("bk-DKM-dark");
    document.body.classList.toggle("bk-dark-mode-on");
  } else if (local_u_light === "on" && local_u_dark === "on") {
    clear_body_class();
    clear_DKM_btn_class();
    localStorage.setItem("u_light", "off");
    localStorage.setItem("u_dark", "off");
    local_u_light = localStorage.getItem("u_light");
    local_u_dark = localStorage.getItem("u_dark");
    btnAnimed?.classList.add("bk-DKM-auto");
  } else {
    console.error(" ⛔⛔⛔ Unexpected value for set_site_mode()");
  }
}

function toggle_local_u_light_value() {
  if (local_u_light === "on") {
    localStorage.setItem("u_light", "off");
    local_u_light = localStorage.getItem("u_light");
    // console.log("set local_u_light: off");
  } else if (local_u_light === "off") {
    localStorage.setItem("u_light", "on");
    local_u_light = localStorage.getItem("u_light");
    // console.log("set local_u_light: on");
  } else {
    console.error("Unexpected value for local_u_light: " + local_u_light);
  }
}

function toggle_local_u_dark_value() {
  if (local_u_dark === "on") {
    localStorage.setItem("u_dark", "off");
    local_u_dark = localStorage.getItem("u_dark");
    // console.log("set local_u_dark: off");
  } else if (local_u_dark === "off") {
    localStorage.setItem("u_dark", "on");
    local_u_dark = localStorage.getItem("u_dark");
    // console.log("set local_u_dark: on");
  } else {
    console.error("Unexpected value for local_u_dark: " + local_u_dark);
  }
}

function set_site_mode(form_btn) {
  let btn = form_btn;
  if (local_u_light === "off" && local_u_dark === "off") {
    clear_body_class();
    // console.log("Now run in Auto mode. 💡");
  } else if (local_u_light === "on" && local_u_dark === "off") {
    document.body.classList.remove("bk-dark-mode-on");
    document.body.classList.toggle("bk-light-mode-on");
    // console.log("Light mode ON!! 🌞");
  } else if (local_u_light === "off" && local_u_dark === "on") {
    document.body.classList.remove("bk-light-mode-on");
    document.body.classList.toggle("bk-dark-mode-on");
    // console.log("Dark mode ON!! 🌑");
  } else if (local_u_light === "on" && local_u_dark === "on") {
    if (btn === "btnL") {
      clear_body_class();
      document.body.classList.toggle("bk-light-mode-on");
      // console.log("Switch!! Light mode ON!! 🌑☞🌞");
    } else if (btn === "btnD") {
      clear_body_class();
      document.body.classList.toggle("bk-dark-mode-on");
      // console.log("Switch!! Dark mode ON!! 🌞☞🌑");
    } else {
      console.error(" ⛔⛔⛔ Unexpected value for set_site_mode()");
    }
  } else {
    console.error(" ⛔⛔⛔ Unexpected value for set_site_mode()");
  }
}

function play_btn_animed(form_btn) {
  let btn = form_btn;
  if (btn === "btnL" && local_u_light === "on" && local_u_dark === "off") {
    play_btn_animed_AtoL();
  } else if (
    btn === "btnD" &&
    local_u_light === "off" &&
    local_u_dark === "on"
  ) {
    play_btn_animed_AtoD();
  } else if (
    btn === "btnL" &&
    local_u_light === "on" &&
    local_u_dark === "on"
  ) {
    play_btn_animed_DtoL();
    toggle_local_u_light_value();
    toggle_local_u_dark_value();
    localStorage.setItem("u_light", "on");
    local_u_light = localStorage.getItem("u_light");
  } else if (
    btn === "btnD" &&
    local_u_light === "off" &&
    local_u_dark === "off"
  ) {
    play_btn_animed_DtoA();
  } else if (
    btn === "btnL" &&
    local_u_light === "off" &&
    local_u_dark === "off"
  ) {
    play_btn_animed_LtoA();
  } else if (
    btn === "btnD" &&
    local_u_light === "on" &&
    local_u_dark === "on"
  ) {
    play_btn_animed_LtoD();
    toggle_local_u_light_value();
    toggle_local_u_dark_value();
    localStorage.setItem("u_dark", "on");
    local_u_dark = localStorage.getItem("u_dark");
  } else if (
    btn === "btnL" &&
    local_u_light === "off" &&
    local_u_dark === "on"
  ) {
    // toggle_local_u_light_value();
    // toggle_local_u_dark_value();
    console.error(
      " ⛔⛔⛔ Unexpected value || It's impossible to turn off L btn from all on!!"
    );
  } else if (
    btn === "btnD" &&
    local_u_light === "on" &&
    local_u_dark === "off"
  ) {
    // toggle_local_u_light_value();
    // toggle_local_u_dark_value();
    console.error(
      " ⛔⛔⛔ Unexpected value || It's impossible to turn off D btn from all on!!"
    );
  } else {
    console.error(
      " ⛔⛔⛔ Unexpected value for play_btn_animed(form_btn): " + btn
    );
  }
}

function play_btn_animed_AtoL() {
  clear_DKM_btn_class();
  btnAnimed?.classList.add("bk-DKM-light");
}
function play_btn_animed_DtoL() {
  clear_DKM_btn_class();
  btnAnimed?.classList.add("bk-DKM-light");
}
function play_btn_animed_DtoA() {
  clear_DKM_btn_class();
  btnAnimed?.classList.add("bk-DKM-auto");
}
function play_btn_animed_LtoA() {
  clear_DKM_btn_class();
  btnAnimed?.classList.add("bk-DKM-auto");
}
function play_btn_animed_AtoD() {
  clear_DKM_btn_class();
  btnAnimed?.classList.add("bk-DKM-dark");
}
function play_btn_animed_LtoD() {
  clear_DKM_btn_class();
  btnAnimed?.classList.add("bk-DKM-dark");
}

// 清除 class
function clear_body_class() {
  document.body.classList.remove("bk-light-mode-on");
  document.body.classList.remove("bk-dark-mode-on");
  // console.log("clear_body_class Done!");
}

function clear_DKM_btn_class() {
  var element = document.getElementById("bk-DKM-mode");

  if (element) {
    element.classList.remove("bk-DKM-light");
    element.classList.remove("bk-DKM-dark");
    element.classList.remove("bk-DKM-auto");
    // console.log("clear_DKM_btn_class Done!");
  } else {
    console.error("⛔⛔⛔ Element with ID 'bk-DKM-mode' not found.");
  }
}

function debug_output() {
  console.log("----------------------------------------");
  console.log("local_u_light now is: " + local_u_light);
  console.log("local_u_dark  now is: " + local_u_dark);
  console.log("system_schem now is: " + system_scheme);
}
