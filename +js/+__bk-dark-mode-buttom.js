// -----------
// 常數變數區域
// -----------
const toggle_button_auto = document.querySelector("#bk-auto-mode-button");
let auto_mode = localStorage.getItem("auto");

const toggle_button_dark = document.querySelector("#bk-dark-mode-button");
let local_scheme = localStorage.getItem("theme");

let system_scheme = localStorage.getItem("system");

let buttom_click_counter = 0;

console.log(buttom_click_counter);
console.log("local_scheme is: " + local_scheme);
console.log("auto_mode is: " + auto_mode);
console.log("system_schem is: " + system_scheme);

// 初始化
document.getElementById("bk-dark-mode-text").innerText = "";
bk_site_init();
bk_dark_btn_init();
bk_dark_mode_text_set();

// -------
// 監聽區域
// -------
// 事件監聽 自動模式按鈕 按下
toggle_button_auto.addEventListener("click", () => {
  auto_mode = localStorage.getItem("auto");
  if (auto_mode === "auto") {
    turn_off_auto_mode();
    click_buttom_count();
  } else {
    clear_body_class();
    turn_on_auto_mode();
    click_buttom_count();
  }
});

// 事件監聽 黑暗模式按鈕 按下
toggle_button_dark.addEventListener("click", (e) => {
  local_scheme = localStorage.getItem("theme");
  if (local_scheme === "dark") {
    turn_off_dark_mode();
    click_buttom_count();
  } else {
    turn_on_dark_mode();
    click_buttom_count();
  }
  document.getElementById("bk-dark-mode-button").style.opacity = "1";
});

// 事件監聽 用戶切換主題
window
  .matchMedia("(prefers-color-scheme: dark)")
  .addEventListener("change", (event) => {
    let scheme = event.matches ? "dark" : "light";
    reset_dark_mode_btn_by(scheme);
    localStorage.setItem("system", scheme);
  });

// -------
// 功能區域
// -------
// 網頁初始化
function bk_site_init() {
  if (auto_mode === "auto") {
    turn_on_auto_mode();
  } else {
    turn_off_auto_mode();
  }
  document.getElementById("bk-auto-mode-button").style.content = "";
  console.log("bk_site_init: Done!");
}

// 黑暗模式初始化
function bk_dark_btn_init() {
  if (local_scheme === "dark") {
    if (auto_mode === "manual") {
      turn_off_dark_mode();
    } else {
      reset_dark_mode_btn_by(local_scheme);
    }
  } else {
    if (auto_mode === "manual") {
      turn_on_dark_mode();
    } else {
      reset_dark_mode_btn_by(local_scheme);
    }
  }
  document.getElementById("bk-dark-mode-button").style.content = "";
  console.log("bk_dark_btn_init: Done!");
}

// 確認系統使用主題
function get_system_scheme() {
  //預設為 Dark
  var theme = "light";

  //本地儲存主題 覆蓋 作業系統主題設置
  if (localStorage.getItem("theme")) {
    if (localStorage.getItem("theme") == "dark") {
      var theme = "dark";
    }
  } else if (!window.matchMedia) {
    //matchMedia method not supported
    return "Error!!!!";
  } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    //OS theme setting detected as dark
    var theme = "dark";
  }

  //dark theme preferred, set document with a `data-theme` attribute
  if (theme == "dark") {
    document.documentElement.setAttribute("data-theme", "dark");
  }
  return theme;
}

// 清除 class
function clear_body_class() {
  document.body.classList.remove("bk-light-mode-on");
  document.body.classList.remove("bk-dark-mode-on");
  console.log("clear_body_class Done!");
}

// 關閉 黑暗模式按鈕 清除 class 並 auto_mode 設為 自動
function turn_on_auto_mode() {
  document.getElementById("bk-dark-mode-button").style.scale = "0";
  document.getElementById("bk-auto-mode-checkbox").checked = true;
  localStorage.setItem("auto", "auto");
  console.log("turn_on_auto_mode set: " + auto_mode);
}

// 開啟 黑暗模式按鈕 並 auto_mode 設為 手動
function turn_off_auto_mode() {
  document.getElementById("bk-dark-mode-button").style.scale = "1";
  document.getElementById("bk-auto-mode-checkbox").checked = false;
  localStorage.setItem("auto", "manual");
  console.log("turn_off_auto_mode set: " + auto_mode);
}

// 改變 class 加上黑暗模式 local_scheme 設為 Dark
function turn_on_dark_mode() {
  clear_body_class();
  document.getElementById("bk-dark-mode-checkbox").checked = true;
  document.body.classList.add("bk-light-mode-on");
  localStorage.setItem("theme", "dark");
  console.log("turn_on_dark_mode set: " + local_scheme);
}

//  改變 class 加上白天模式 local_scheme 設為 light
function turn_off_dark_mode() {
  clear_body_class();
  document.getElementById("bk-dark-mode-checkbox").checked = false;
  document.body.classList.add("bk-dark-mode-on");
  localStorage.setItem("theme", "light");
  // console.log("turn_off_dark_mode set: " + local_scheme);
}

// 根據傳參 重設按鈕狀態 並儲存為 local theme
function reset_dark_mode_btn_by(mode) {
  if (mode === "dark") {
    document.getElementById("bk-dark-mode-checkbox").checked = false;
    document.getElementById("bk-dark-mode-button").style.content = "";
    localStorage.setItem("theme", mode);
    if ((auto_mode = "manual")) {
      clear_body_class();
      document.body.classList.add("bk-dark-mode-on");
    }
  } else {
    if (mode === "light") {
      document.getElementById("bk-dark-mode-checkbox").checked = true;
      document.getElementById("bk-dark-mode-button").style.content = "";
      localStorage.setItem("theme", mode);
      if ((auto_mode = "manual")) {
        clear_body_class();
        document.body.classList.add("bk-light-mode-on");
      }
    } else {
      // console.log("reset_dark_mode_btn_by is SOME TINGH GOT ERROR!! " + mode);
    }
  }
}

// 根據狀態 設定文字
function bk_dark_mode_text_set() {
  if (local_scheme === "dark") {
    document.getElementById("bk-dark-mode-text").innerText = "DARK";
    if (auto_mode === "manual") {
      document.getElementById("bk-dark-mode-text").innerText = "AUTO";
    }
  } else {
    document.getElementById("bk-dark-mode-text").innerText = "LIGHT";
    if (auto_mode === "manual") {
      document.getElementById("bk-dark-mode-text").innerText = "AUTO";
    }
  }
}

// 按鈕計數器
function click_buttom_count() {
  buttom_click_counter++;
  bk_dark_mode_text_set();
  console.log("click_counter: " + buttom_click_counter);
}

console.log("local_scheme now is: " + local_scheme);
console.log("auto_mode now is: " + auto_mode);
console.log("system_schem now is: " + system_scheme);
