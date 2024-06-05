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
                <p id="link-card-btn-title">${link_data.title}</p>
                <p id="link-card-btn-subtitle">${link_data.subtitle}</p>
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

// 假設這是你的資料
// const data = [
//   { name: "甲", age: 20 },
//   { name: "乙", age: 25 },
//   { name: "丙", age: 100 },
// ];

// // 定義生成 HTML 模板的函數
// function generateTemplate(person) {
//   return `
//             <div>
//                 <h2>${person.name}</h2>
//                 <p>年齡：${person.age}</p>
//             </div>
//         `;
// }

// // 在 HTML 中動態生成模板並填入資料
// const templateContainer = document.getElementById("template");
// data.forEach((i) => {
//   templateContainer.innerHTML += generateTemplate(i);
// });

// // 定義生成 HTML 模板的函數
// function createTemplateLinkCard(link_data) {
//   return (
//     '<div class="link-card-content link-card-' +
//     link_data.number +
//     '">' +
//     '<button id="link-card-btn-' +
//     link_data.number +
//     '" onclick="openLinkInNewTab(\'' +
//     link_data.url +
//     "')\">" +
//     '<img class="link-card-btn-img" style="padding: 10px" src="' +
//     link_data.img_link +
//     '"/>' +
//     '<div class="link-card-btn-text">' +
//     '<p class="link-card-btn-title">' +
//     link_data.title +
//     "</p>" +
//     '<p class="link-card-btn-subtitle">' +
//     link_data.subtitle +
//     "</p>" +
//     "</div>" +
//     "</button>" +
//     "</div>"
//   );
// }

// function openLinkInNewTab(url) {
//   window.open(url, "_blank");
// }

// // 在 HTML 中動態生成模板並填入資料
// var link_card_template_Container = document.getElementById("ink_card_template");
// link_card_info.forEach(function (link_data) {
//   link_card_template_Container.innerHTML += createTemplateLinkCard(link_data);
// });
