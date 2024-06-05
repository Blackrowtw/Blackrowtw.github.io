// Card資料
import { link_card_info_old } from "./+__link-card-info.js";

// 定義生成 HTML 模板的函數
function creatTemplate_link_card(link_data) {
  return `
      <div id="link-card-content">
          <button class="link-card-btn" id="link-card-btn-${link_data.number}"
                  onclick="location.href='${link_data.url}'" target="_blank">
              <div id="link-card-btn-content">
                  <img id="link-card-btn-img" src="${link_data.img_link}"/>
                  <div id="link-card-btn-text-content">
                    <p id="link-card-btn-title">${link_data.title}</p>
                    <p id="link-card-btn-subtitle">${link_data.subtitle}</p>
                  </div>
              </div>
          </button>
      </div>
      `;
}
// 在 HTML 中動態生成模板並填入資料
const link_card_template_Container =
  document.getElementById("link_card_template");
link_card_info_old.forEach((link_data) => {
  link_card_template_Container.innerHTML += creatTemplate_link_card(link_data);
});
