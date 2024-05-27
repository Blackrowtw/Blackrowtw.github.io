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
    title: "Youtube",
    subtitle: "Channel_01</br>Main",
    color_rgb: "#C4302B",
    url: "https://www.youtube.com/channel/UCvhNgXA61EyiiSnMZn-7qcA",
    img_link: "/+images/icon/icon-youtube_x512.png",
  },
  {
    number: "04",
    title: "Github",
    subtitle: "Blackrowtw",
    color_rgb: "#24292E",
    url: "https://github.com/Blackrowtw",
    img_link: "/+images/icon/icon-github_x512.png",
  },
  {
    number: "05",
    title: "巴哈姆特",
    subtitle: "個人小屋</br>[CN]",
    color_rgb: "#0B7897",
    url: "https://home.gamer.com.tw/homeindex.php?owner=backsliding",
    img_link: "/+images/icon/icon-bahamut_x512.png",
  },
  {
    number: "06",
    title: "Youtube",
    subtitle: "Channel_02</br>for Stream",
    color_rgb: "#C4302B",
    url: "https://www.youtube.com/channel/UCtDyeUUMhmFvoydc1b-DQwg",
    img_link: "/+images/icon/icon-youtube_x512.png",
  },
  {
    number: "07",
    title: "Twitch",
    subtitle: "blackrowtw",
    color_rgb: "#9146ff",
    url: "https://www.twitch.tv/blackrowtw",
    img_link: "/+images/icon/icon-twitch_x512.png",
  },
  // {
  //   number: "08",
  //   title: "Buy Me",
  //   subtitle: "a Coffee",
  //   color_rgb: "#FFDD00",
  //   url: "https://buymeacoffee.com/blackrow",
  //   img_link: "/+images/icon/icon-buymeacoffee_x512.png",
  // },
  // {
  //   number: "09",
  //   title: "Fanbox",
  //   subtitle: "blackrow",
  //   color_rgb: "#FBF38A",
  //   url: "https://blackrow.fanbox.cc",
  //   img_link: "/+images/icon/icon-pixivfanbox_x512.png",
  // },
  {
    number: "10",
    title: "Tenor",
    subtitle: "Gif 圖庫",
    color_rgb: "#ABD5E7",
    url: "https://tenor.com/zh-TW/users/blackrow_tw",
    img_link: "/+images/icon/icon-tenor_x512.png",
  },
  {
    number: "11",
    title: "Imgur",
    subtitle: "Self-works</br>[old]",
    color_rgb: "#89C623",
    url: "https://imgur.com/a/klo47",
    img_link: "/+images/icon/icon-imgur_x512.png",
  },
  {
    number: "12",
    title: "Imgur",
    subtitle: "Self-works</br>[2020+]",
    color_rgb: "#89C623",
    url: "https://imgur.com/a/U56JE73",
    img_link: "/+images/icon/icon-imgur_x512.png",
  },
  {
    number: "13",
    title: "Plurk",
    subtitle: "AFK</br>[CN]",
    color_rgb: "#FF9B76",
    url: "https://www.plurk.com/blackrow",
    img_link: "/+images/icon/icon-plurk_x512.png",
  },
  {
    number: "14",
    title: "Tumblr",
    subtitle: "AFK",
    color_rgb: "#36465D",
    url: "https://blackrowtw.tumblr.com",
    img_link: "/+images/icon/icon-tumblr_x512.png",
  },
  // {
  //   number: "15",
  //   title: "Steam",
  //   subtitle: "阿噗哩嘎嘎!!",
  //   color_rgb: "#102A59",
  //   url: "https://steamcommunity.com/id/blackrowtw",
  //   img_link: "/+images/icon/icon-steam_x512.png",
  // },
  // {
  //   number: "16",
  //   title: "Discord",
  //   subtitle: "Spice & Wolf</br>[CN]",
  //   color_rgb: "#7289DA",
  //   url: "https://discord.com/invite/qYcVzdY",
  //   img_link: "/+images/icon/icon-discord_x512.png",
  // },
];

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
