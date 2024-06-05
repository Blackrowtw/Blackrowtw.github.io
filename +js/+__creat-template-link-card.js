// Card資料
import { link_card_info } from "./+__link-card-info.js";

// 定義生成 HTML 模板的函數
function creatTemplate_link_card(link_data) {
  return `
    <div class="bk-link-card-scrollor">
      <div class="bk-link-card">
        <div class="bk-link-card-icon">
          <img
            src="${link_data.img_link}"
            alt="icon-${link_data.title}.png is BROKEN!! :("
            width="auto"
            height="auto"
          />
        </div>
        <div class="bk-link-card-body">
          <a href="${link_data.url}" class="bk-link-card-title headerlink"
            >${link_data.title}</a
          >
          <div class="bk-link-card-subtitle">
            <div>${link_data.subtitle}</div>
          </div>
        </div>
      </div>
      <div class="bk-link-card-bg" id="bk-link-card-bg-${link_data.number}" style="background-color: ${link_data.color_rgb};">
        <div class="bk-link-card-bg-inner"></div>
      </div>
    </div>
  `;
}

// 在 HTML 中動態生成模板並填入資料
const link_card_template_Container = document.getElementById(
  "bk-link-card-template"
);
link_card_info.forEach((link_data) => {
  link_card_template_Container.innerHTML += creatTemplate_link_card(link_data);
});
