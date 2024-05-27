// Card資料
const link_card_info = [
  {
    number: "01",
    title: "Twitter",
    subtitle: "Blackrow_tw",
    color_rgb: "#1D9BF0",
    url: "https://twitter.com/Blackrow_tw",
    img_link: "/+images/icon/icon-twitter_x512.png",
  },
  {
    number: "02",
    title: "Pixiv",
    subtitle: "user2407057",
    color_rgb: "#0096FA",
    url: "https://www.pixiv.net/users/2407057",
    img_link: "/+images/icon/icon-pixiv_x512.png",
  },
  {
    number: "03",
    title: "Twitch",
    subtitle: "blackrowtw",
    color_rgb: "#9146ff",
    url: "https://www.twitch.tv/blackrowtw",
    img_link: "/+images/icon/icon-twitch_x512.png",
  },
  {
    number: "04",
    title: "Main",
    subtitle: "Youtube-Channel_01",
    color_rgb: "#C4302B",
    url: "https://www.youtube.com/channel/UCvhNgXA61EyiiSnMZn-7qcA",
    img_link: "/+images/icon/icon-youtube_x512.png",
  },
  {
    number: "05",
    title: "Stream",
    subtitle: "Youtube-Channel_02",
    color_rgb: "#C4302B",
    url: "https://www.youtube.com/channel/UCtDyeUUMhmFvoydc1b-DQwg",
    img_link: "/+images/icon/icon-youtube_x512.png",
  },
  {
    number: "06",
    title: "Github",
    subtitle: "Blackrowtw",
    color_rgb: "#24292E",
    url: "https://github.com/Blackrowtw",
    img_link: "/+images/icon/icon-github_x512.png",
  },
  {
    number: "07",
    title: "Fanbox",
    subtitle: "blackrow",
    color_rgb: "#FBF38A",
    url: "https://blackrow.fanbox.cc",
    img_link: "/+images/icon/icon-pixivfanbox-2_x512.png",
  },
  {
    number: "08",
    title: "巴哈姆特",
    subtitle: "個人小屋 [CN]",
    color_rgb: "#0B7897",
    url: "https://home.gamer.com.tw/homeindex.php?owner=backsliding",
    img_link: "/+images/icon/icon-bahamut_x512.png",
  },
  {
    number: "09",
    title: "Plurk",
    subtitle: "放置中-AFK [CN]",
    color_rgb: "#FF9B76",
    url: "https://www.plurk.com/blackrow",
    img_link: "/+images/icon/icon-plurk_x512.png",
  },
  {
    number: "10",
    title: "Imgur",
    subtitle: "Self-works [old]",
    color_rgb: "#89C623",
    url: "https://imgur.com/a/klo47",
    img_link: "/+images/icon/icon-imgur_x512.png",
  },
  {
    number: "11",
    title: "Imgur",
    subtitle: "Self-works [2020+]",
    color_rgb: "#89C623",
    url: "https://imgur.com/a/U56JE73",
    img_link: "/+images/icon/icon-imgur_x512.png",
  },
  {
    number: "12",
    title: "Tenor",
    subtitle: "Gif 圖庫",
    color_rgb: "#abd5e7",
    url: "https://tenor.com/zh-TW/users/blackrow_tw",
    img_link: "/+images/icon/icon-tenor_x512.png",
  },
];

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
link_card_info.forEach((link_data) => {
  link_card_template_Container.innerHTML += creatTemplate_link_card(link_data);
});
