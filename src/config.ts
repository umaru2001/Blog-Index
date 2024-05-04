/** Website 分类配置 */
const WEBSITE_SORTS: WebsiteSort[] = [
  {
    title: "我的网站&工具",
    sites: [
      {
        title: "海祇岛的珊瑚森林",
        description: "海星来来的博客",
        url: "https://blog.pengdonglai.com",
        icon: "https://blog.pengdonglai.com/medias/avatar.webp",
      },
      {
        title: "个人搭建图床",
        description: "设置了CF权限，暂时只能博主本人上传",
        url: "https://starfishdl.site/uploadpage",
        icon: "https://blog.pengdonglai.com/medias/avatar.webp",
      },
      {
        title: "CloudFlare",
        description: "真正的赛博菩萨1号",
        url: "https://dash.cloudflare.com/",
        icon: "https://dash.cloudflare.com/favicon.ico",
      },
      {
        title: "Vercel",
        description: "真正的赛博菩萨2号",
        url: "https://vercel.com/",
        icon: "https://vercel.com/favicon.ico",
      },
      {
        title: "图床数据库插入 SQL 生成",
        description: "可以生成访问图床的链接，并且将它转化为 SQL",
        url: "https://blog.pengdonglai.com/2024/05/04/generate-img-insert-sql/",
        icon: "https://blog.pengdonglai.com/medias/avatar.webp",
      },
      {
        title: "JSON 转 Interface",
        description: "JSON 转 Interface",
        url: "https://blog.pengdonglai.com/2024/05/04/convert-json2interface/",
        icon: "https://blog.pengdonglai.com/medias/avatar.webp",
      },
      {
        title: "海星来来的文档站",
        description: "海星来来的文档站",
        url: "https://docs.starfishdl.site/",
        icon: "https://blog.pengdonglai.com/medias/avatar.webp",
      },
    ],
  },
  {
    title: "动漫资源",
    sites: [
      {
        "title": "girigiri爱动漫",
        "url": "https://anime.girigirilove.com/",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly9hbmltZS5naXJpZ2lyaWxvdmUuY29t",
        "description": "大陆区域IP会显示403"
      },
      {
        "title": "茶杯狐",
        "url": "https://www.cupfox.app/",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly93d3cuY3VwZm94LmFwcA==",
        "description": "作者很懒，没有填写描述。"
      },
      {
        "title": "咕咕番",
        "url": "http://www.gugufan.com/",
        "icon": "//favicon.rss.ink/v1/aHR0cDovL3d3dy5ndWd1ZmFuLmNvbQ==",
        "description": "作者很懒，没有填写描述。"
      },
      {
        "title": "NyaFun",
        "url": "https://www.nyafun.net/",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly93d3cubnlhZnVuLm5ldA==",
        "description": "网站处于维护状态中。"
      },
      {
        "title": "次元城动漫",
        "url": "http://www.cycity.pro/",
        "icon": "//favicon.rss.ink/v1/aHR0cDovL3d3dy5jeWNpdHkucHJv",
        "description": "作者很懒，没有填写描述。"
      },
      {
        "title": "アニメ新番組",
        "url": "https://bangumi.online/",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly9iYW5ndW1pLm9ubGluZQ==",
        "description": "作者很懒，没有填写描述。"
      },
      {
        "title": "Avbebe",
        "url": "https://avbebe.com/",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly9hdmJlYmUuY29t",
        "description": "作者很懒，没有填写描述。"
      },
      {
        "title": "AnFuns动漫",
        "url": "https://www.anfuns.cc/",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly93d3cuYW5mdW5zLmNj",
        "description": "作者很懒，没有填写描述。"
      },
      {
        "title": "H次元",
        "url": "https://h-ciyuan.com/",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly9oLWNpeXVhbi5jb20=",
        "description": "作者很懒，没有填写描述。"
      },
      {
        "title": "ACG.RW",
        "url": "https://www.acgrw.net/",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly93d3cuYWNncncubmV0",
        "description": "作者很懒，没有填写描述。"
      },
      {
        "title": "樱花动漫",
        "url": "https://www.dm539.com/",
        "icon": "//favicon.rss.ink/v1/aHR0cDovL3d3dy5kbTk5Lm1l",
        "description": "只能说叫樱花动漫的网站太多了。"
      },
      {
        "title": "OmoFun",
        "url": "https://www.omofun.in/",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly93d3cub21vZnVuLmlu",
        "description": "作者很懒，没有填写描述。"
      },
      {
        "title": "ANi Open",
        "url": "https://aniopen.an-i.workers.dev/",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly9hbmlvcGVuLmFuLWkud29ya2Vycy5kZXY=",
        "description": "作者很懒，没有填写描述。"
      },
      {
        "title": "橘子动漫",
        "url": "https://www.mgnacg.com/",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly93d3cubWduYWNnLmNvbQ==",
        "description": "作者很懒，没有填写描述。"
      },
      {
        "title": "俺の3Dエロ動画",
        "url": "https://oreno3d.com/",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly9vcmVubzNkLmNvbQ==",
        "description": "作者很懒，没有填写描述。"
      },
      {
        "title": "E-ACG",
        "url": "https://eacg.net/",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly9lYWNnLm5ldA==",
        "description": "作者很懒，没有填写描述。"
      },
      {
        "title": "Hanime1",
        "url": "https://hanime1.me/",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly9oYW5pbWUxLm1l",
        "description": "作者很懒，没有填写描述。"
      },
      {
        "title": "Iwara",
        "url": "https://ecchi.iwara.tv/",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly9lY2NoaS5pd2FyYS50dg==",
        "description": "作者很懒，没有填写描述。"
      },
      {
        "title": "八重樱动漫",
        "url": "https://iafuns.com/",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly9pYWZ1bnMuY29t",
        "description": "作者很懒，没有填写描述。"
      },
      {
        "title": "EDD动漫",
        "url": "http://www.edddh.cc/",
        "icon": "//favicon.rss.ink/v1/aHR0cDovL3d3dy5lZGRkaC5jYw==",
        "description": "作者很懒，没有填写描述。"
      },
      {
        "title": "ZzzFun",
        "url": "http://www.zzzfun.com/",
        "icon": "//favicon.rss.ink/v1/aHR0cDovL3d3dy56enpmdW4uY29t",
        "description": "作者很懒，没有填写描述。"
      },
      {
        "title": "hanime",
        "url": "https://hanime.tv/",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly9oYW5pbWUudHY=",
        "description": "作者很懒，没有填写描述。"
      },
      {
        "title": "AGE动漫",
        "url": "http://www.age.tv/",
        "icon": "//favicon.rss.ink/v1/aHR0cDovL3d3dy5hZ2UudHY=",
        "description": "作者很懒，没有填写描述。"
      },
      {
        "title": "niconico",
        "url": "https://www.nicovideo.jp/",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly93d3cubmljb3ZpZGVvLmpw",
        "description": "作者很懒，没有填写描述。"
      },
      {
        "title": "Anime1",
        "url": "https://anime1.cc/",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly9hbmltZTEuY2M=",
        "description": "作者很懒，没有填写描述。"
      },
      {
        "title": "ANMAXJP",
        "url": "http://cn.anmaxjp.com/",
        "icon": "//favicon.rss.ink/v1/aHR0cDovL2NuLmFubWF4anAuY29t",
        "description": "里番合集度盘下载"
      },
      {
        "title": "异世界动漫",
        "url": "https://www.sbdm.net/",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly93d3cuc2JkbS5uZXQ=",
        "description": "还算可以"
      },
      {
        "title": "AcFuns",
        "url": "https://acgfuns.com/",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly9hY2dmdW5zLmNvbQ==",
        "description": "作者很懒，没有填写描述。"
      },
      {
        "title": "宫下动漫",
        "url": "https://arlnigdm.com/",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly9hcmxuaWdkbS5jb20=",
        "description": "作者很懒，没有填写描述。"
      },
      {
        "title": "Animoe",
        "url": "https://animoe.org/",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly9hbmltb2Uub3Jn",
        "description": "作者很懒，没有填写描述。"
      },
      {
        "title": "番剧",
        "url": "https://www.fanju.me/",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly93d3cuZmFuanUubWU=",
        "description": "作者很懒，没有填写描述。"
      },
    ]
  },
  {
    title: "次元美图",
    sites: [
      {
        "title": "萌图社",
        "url": "https://moetu.club/",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly9tb2V0dS5jbHVi",
        "description": "作者很懒，没有填写描述。"
      },
      {
        "title": "Ubizzard Translation",
        "url": "https://ubizzard-translation.blogspot.com/",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly91Yml6emFyZC10cmFuc2xhdGlvbi5ibG9nc3BvdC5jb20=",
        "description": "作者很懒，没有填写描述。"
      },
      {
        "title": "BoBoPic",
        "url": "https://bobopic.com/",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly9ib2JvcGljLmNvbQ==",
        "description": "作者很懒，没有填写描述。"
      },
      {
        "title": "厳選2次元画像館",
        "url": "https://gennji.com/",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly9nZW5uamkuY29t",
        "description": "作者很懒，没有填写描述。"
      },
      {
        "title": "無邪気漢化組官方博客",
        "url": "http://mujaki.blog.jp/",
        "icon": "//favicon.rss.ink/v1/aHR0cDovL211amFraS5ibG9nLmpw",
        "description": "作者很懒，没有填写描述。"
      },
      {
        "title": "淫漫画",
        "url": "https://www.yinmh.com/",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly93d3cueWlubWguY29t",
        "description": "作者很懒，没有填写描述。"
      },
      {
        "title": "/ | Lolibooru",
        "url": "https://lolibooru.moe/post",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly9sb2xpYm9vcnUubW9l",
        "description": "作者很懒，没有填写描述。"
      },
      {
        "title": "Pixivel",
        "url": "https://pixivel.moe/",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly9waXhpdmVsLm1vZQ==",
        "description": "作者很懒，没有填写描述。"
      },
      {
        "title": "Danbooru2.0",
        "url": "https://sonohara.donmai.us/",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly9zb25vaGFyYS5kb25tYWkudXM=",
        "description": "作者很懒，没有填写描述。"
      },
      {
        "title": "Hentai Cosplay",
        "url": "https://hentai-cosplays.com/",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly9oZW50YWktY29zcGxheXMuY29t",
        "description": "作者很懒，没有填写描述。"
      },
      {
        "title": "TBIB",
        "url": "https://tbib.org/index.php?page=post&s=list&pid=0",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly90YmliLm9yZw==",
        "description": "作者很懒，没有填写描述。"
      },
      {
        "title": "AsmHentai",
        "url": "https://asmhentai.com/",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly9hc21oZW50YWkuY29t",
        "description": "作者很懒，没有填写描述。"
      },
      {
        "title": "Pixiviz",
        "url": "https://pixiviz.pwp.app/",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly9waXhpdml6LnB3cC5hcHA=",
        "description": "作者很懒，没有填写描述。"
      },
      {
        "title": "紳士漫畫",
        "url": "https://www.wnacg.com/",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly93d3cud25hY2cuY29t",
        "description": "作者很懒，没有填写描述。"
      },
      {
        "title": "禁漫網址發布頁",
        "url": "https://jm365.work/xPD8Un",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly9qbTM2NS53b3Jr",
        "description": "作者很懒，没有填写描述。"
      },
      {
        "title": "极简壁纸",
        "url": "https://bz.zzzmh.cn/",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly9iei56enptaC5jbg==",
        "description": "作者很懒，没有填写描述。"
      },
      {
        "title": "Wallhaven",
        "url": "https://wallhaven.cc/",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly93YWxsaGF2ZW4uY2M=",
        "description": "作者很懒，没有填写描述。"
      },
      {
        "title": "Hitomi.la",
        "url": "https://hitomi.la/",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly9oaXRvbWkubGE=",
        "description": "作者很懒，没有填写描述。"
      },
      {
        "title": "禁漫天堂",
        "url": "https://18comic.vip/",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly8xOGNvbWljLnZpcA==",
        "description": "作者很懒，没有填写描述。"
      },
      {
        "title": "Kemono Beta",
        "url": "https://beta.kemono.party/",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly9iZXRhLmtlbW9uby5wYXJ0eQ==",
        "description": "作者很懒，没有填写描述。"
      },
      {
        "title": "Kemono",
        "url": "https://kemono.party/",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly9rZW1vbm8ucGFydHk=",
        "description": "作者很懒，没有填写描述。"
      },
      {
        "title": "同人漫画",
        "url": "http://twhentai.com/index.html",
        "icon": "//favicon.rss.ink/v1/aHR0cDovL3R3aGVudGFpLmNvbQ==",
        "description": "作者很懒，没有填写描述。"
      },
      {
        "title": "nhentai",
        "url": "https://nhentai.net/",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly9uaGVudGFpLm5ldA==",
        "description": "作者很懒，没有填写描述。"
      },
      {
        "title": "Pixiv圖片代理",
        "url": "https://pixiv.cat/",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly9waXhpdi5jYXQ=",
        "description": "作者很懒，没有填写描述。"
      },
      {
        "title": "pixivギャラリー",
        "url": "https://pixiv.moe/",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly9waXhpdi5tb2U=",
        "description": "作者很懒，没有填写描述。"
      },
      {
        "title": "Sankaku Channe",
        "url": "https://chan.sankakucomplex.com/",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly9jaGFuLnNhbmtha3Vjb21wbGV4LmNvbQ==",
        "description": "作者很懒，没有填写描述。"
      },
      {
        "title": "Voiux 图库",
        "url": "https://gal.voiux.com/",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly9nYWwudm9pdXguY29t",
        "description": "作者很懒，没有填写描述。"
      },
      {
        "title": "动漫图片和壁纸",
        "url": "https://anime-pictures.net/",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly9hbmltZS1waWN0dXJlcy5uZXQ=",
        "description": "作者很懒，没有填写描述。"
      },
      {
        "title": "Pixivic",
        "url": "https://pixivic.com/",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly9waXhpdmljLmNvbQ==",
        "description": "作者很懒，没有填写描述。"
      },
      {
        "title": "Exhentai",
        "url": "https://exhentai.org/",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly9leGhlbnRhaS5vcmc=",
        "description": "作者很懒，没有填写描述。"
      },
      {
        "title": "E-hentai",
        "url": "https://e-hentai.org/",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly9lLWhlbnRhaS5vcmc=",
        "description": "作者很懒，没有填写描述。"
      },
      {
        "title": "二次萌エロ画像ブログ",
        "url": "http://moeimg.net/",
        "icon": "//favicon.rss.ink/v1/aHR0cDovL21vZWltZy5uZXQ=",
        "description": "作者很懒，没有填写描述。"
      },
      {
        "title": "Gelbooru",
        "url": "https://gelbooru.com/",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly9nZWxib29ydS5jb20=",
        "description": "作者很懒，没有填写描述。"
      },
      {
        "title": "Danbooru",
        "url": "https://danbooru.donmai.us/",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly9kYW5ib29ydS5kb25tYWkudXM=",
        "description": "作者很懒，没有填写描述。"
      },
      {
        "title": "KURO",
        "url": "https://pixiv.kurocore.com/",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly9waXhpdi5rdXJvY29yZS5jb20=",
        "description": "作者很懒，没有填写描述。"
      },
      {
        "title": "Konachan中文站",
        "url": "https://konachan.wjcodes.com/",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly9rb25hY2hhbi53amNvZGVzLmNvbQ==",
        "description": "作者很懒，没有填写描述。"
      },
      {
        "title": "konachan",
        "url": "https://konachan.com/post",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly9rb25hY2hhbi5jb20=",
        "description": "作者很懒，没有填写描述。"
      },
      {
        "title": "/ | yande.re",
        "url": "https://yande.re/post",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly95YW5kZS5yZQ==",
        "description": "作者很懒，没有填写描述。"
      },
      {
        "title": "[pixiv]",
        "url": "https://www.pixiv.net/",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly93d3cucGl4aXYubmV0",
        "description": "作者很懒，没有填写描述。"
      },
      {
        "title": "嗶咔漫畫",
        "url": "https://manhuabika.com/pdownload/",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly9tYW5odWFiaWthLmNvbQ==",
        "description": "作者很懒，没有填写描述。"
      },
      {
        "title": "Hentai Image",
        "url": "https://hentai-img.com/",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly9oZW50YWktaW1nLmNvbQ==",
        "description": "如题"
      },
      {
        "title": "AB站",
        "url": "https://acgbeo.com/",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly9hY2diZW8uY29t",
        "description": "作者很懒，没有填写描述。"
      },
      {
        "title": "ACEACG",
        "url": "http://acedizhi.com",
        "icon": "//favicon.rss.ink/v1/aHR0cDovL2FjZWRpemhpLmNvbQ==",
        "description": "作者很懒，没有填写描述。"
      },
      {
        "title": "Nice Cat",
        "url": "https://web.nicecat.cc/",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly93ZWIubmljZWNhdC5jYw==",
        "description": "作者很懒，没有填写描述。"
      },
    ]
  },
  {
    title: "次元音乐",
    sites: [
      {
        "title": "Biu~",
        "url": "https://biu.moe/#/Index/home",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly9iaXUubW9l",
        "description": "作者很懒，没有填写描述。"
      },
      {
        "title": "HVDB - All Works",
        "url": "https://hvdb.me/",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly9odmRiLm1l",
        "description": "作者很懒，没有填写描述。"
      },
      {
        "title": "Hikarinoakariost",
        "url": "https://hikarinoakari.com/",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly9oaWthcmlub2FrYXJpLmNvbQ==",
        "description": "作者很懒，没有填写描述。"
      },
      {
        "title": "ASMR Online",
        "url": "https://asmr.one/",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly9hc21yLm9uZQ==",
        "description": "作者很懒，没有填写描述。"
      },
      {
        "title": "VIVA HENTAI",
        "url": "https://www.vivahentai4u.net/",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly93d3cudml2YWhlbnRhaTR1Lm5ldA==",
        "description": "作者很懒，没有填写描述。"
      },
      {
        "title": "Japanese ASMR",
        "url": "https://japaneseasmr.com/",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly9qYXBhbmVzZWFzbXIuY29t",
        "description": "作者很懒，没有填写描述。"
      },
      {
        "title": "JASMR.NET",
        "url": "https://www.jasmr.net/",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly93d3cuamFzbXIubmV0",
        "description": "作者很懒，没有填写描述。"
      },
      {
        "title": "Listen 1 音乐播放器",
        "url": "https://listen1.github.io/listen1/",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly9saXN0ZW4xLmdpdGh1Yi5pbw==",
        "description": "作者很懒，没有填写描述。"
      },
      {
        "title": "Audiomack",
        "url": "https://audiomack.com/",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly9hdWRpb21hY2suY29t",
        "description": "作者很懒，没有填写描述。"
      },
      {
        "title": "MYFREEMP3",
        "url": "https://tool.liumingye.cn/music/#/",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly90b29sLmxpdW1pbmd5ZS5jbg==",
        "description": "作者很懒，没有填写描述。"
      },
      {
        "title": "ACG漫音社",
        "url": "http://www.acgjc.com/",
        "icon": "//favicon.rss.ink/v1/aHR0cDovL3d3dy5hY2dqYy5jb20=",
        "description": "作者很懒，没有填写描述。"
      },
    ]
  },
  {
    title: "Galgame合集",
    sites: [
      {
        "title": "GalZY紫缘社",
        "url": "https://www.galzy.eu.org/",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly93d3cuZ2FsenkuZXUub3Jn",
        "description": "作者很懒，没有填写描述。"
      },
      {
        "title": "失落的galgame资源站",
        "url": "https://shinnku.com/",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly9zaGlubmt1LmNvbQ==",
        "description": "作者很懒，没有填写描述。"
      },
      {
        "title": "量子ACG",
        "url": "https://lzacg.one/",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly9semFjZy5vbmU=",
        "description": "作者很懒，没有填写描述。"
      },
      {
        "title": "ACG嘤嘤怪-",
        "url": "https://acgyyg.ru/",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly9hY2d5eWcucnU=",
        "description": "作者很懒，没有填写描述。"
      },
      {
        "title": "绅士天堂",
        "url": "https://www.gogalgame.com/",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly93d3cuZ29nYWxnYW1lLmNvbQ==",
        "description": "作者很懒，没有填写描述。"
      },
      {
        "title": "GAL图书馆",
        "url": "https://www.galgame.pw/",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly93d3cuZ2FsZ2FtZS5wdw==",
        "description": "作者很懒，没有填写描述。"
      },
      {
        "title": "萌次元",
        "url": "https://18moe.net/",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly8xOG1vZS5uZXQ=",
        "description": "作者很懒，没有填写描述。"
      },
      {
        "title": "终点论坛",
        "url": "https://bbs.zdfx.net/forum.php",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly9iYnMuemRmeC5uZXQ=",
        "description": "作者很懒，没有填写描述。"
      },
      {
        "title": "忧郁的loli",
        "url": "https://acggal.com/",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly9hY2dnYWwuY29t",
        "description": "作者很懒，没有填写描述。"
      },
      {
        "title": "初音的青葱网发布页",
        "url": "https://xygalgame.com/",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly94eWdhbGdhbWUuY29t",
        "description": "作者很懒，没有填写描述。"
      },
      {
        "title": "Gal領域",
        "url": "https://www.galcg.org/",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly93d3cuZ2FsY2cub3Jn",
        "description": "作者很懒，没有填写描述。"
      },
      {
        "title": "GalWorld",
        "url": "https://acgngames.net/",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly9hY2duZ2FtZXMubmV0",
        "description": "作者很懒，没有填写描述。"
      },
      {
        "title": "2DFan",
        "url": "https://www.2dfan.com/",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly93d3cuMmRmYW4uY29t",
        "description": "作者很懒，没有填写描述。"
      },
      {
        "title": "忧郁的弟弟",
        "url": "https://www.kkgal.com/",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly93d3cua2tnYWwuY29t",
        "description": "作者很懒，没有填写描述。"
      },
      {
        "title": "初音的青葱",
        "url": "https://www.yngal.com/",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly93d3cueW5nYWwuY29t",
        "description": "作者很懒，没有填写描述。"
      },
      {
        "title": "CnGal",
        "url": "https://www.cngal.org/",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly93d3cuY25nYWwub3Jn",
        "description": "国产/中文galgame资料站"
      },
      {
        "title": "SteamGalgame",
        "url": "https://steamgalgame.com/",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly9zdGVhbWdhbGdhbWUuY29t",
        "description": "Steam上的中文Galgame"
      },
      {
        "title": "莉莉絲の遊戲原盤倉庫",
        "url": "https://sakakirio.com/",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly9zYWtha2lyaW8uY29t",
        "description": "作者很懒，没有填写描述。"
      },
      {
        "title": "木偶",
        "url": "https://abnormalize.icu/",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly9hYm5vcm1hbGl6ZS5pY3U=",
        "description": "作者很懒，没有填写描述。"
      },
    ]
  },
  {
    title: "安卓安装包",
    sites: [
      {
        "title": "F-Droid",
        "url": "https://f-droid.org/",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly9mLWRyb2lkLm9yZw==",
        "description": "作者很懒，没有填写描述。"
      },
      {
        "title": "APKCombo",
        "url": "https://apkcombo.com/zh-cn/",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly9hcGtjb21iby5jb20=",
        "description": "作者很懒，没有填写描述。"
      },
      {
        "title": "Uptodown",
        "url": "https://www.uptodown.com/android",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly93d3cudXB0b2Rvd24uY29t",
        "description": "作者很懒，没有填写描述。"
      },
      {
        "title": "APKTurbo",
        "url": "https://www.apkturbo.com/",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly93d3cuYXBrdHVyYm8uY29t",
        "description": "作者很懒，没有填写描述。"
      },
      {
        "title": "APKPure",
        "url": "https://apkpure.com/",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly9hcGtwdXJlLmNvbQ==",
        "description": "作者很懒，没有填写描述。"
      },
      {
        "title": "APKTool",
        "url": "https://apk.tools/",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly9hcGsudG9vbHM=",
        "description": "作者很懒，没有填写描述。"
      },
    ],
  },
  {
    title: "图片工具",
    sites: [
      {
        "title": "Home | wsrv.nl",
        "url": "https://wsrv.nl/",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly93c3J2Lm5s",
        "description": "作者很懒，没有填写描述。"
      },
      {
        "title": "EhViewer-NekoInverter",
        "url": "https://github.com/EhViewer-NekoInverter/EhViewer",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly9naXRodWIuY29t",
        "description": "作者很懒，没有填写描述。"
      },
      {
        "title": "TachiyomiJ2K",
        "url": "https://github.com/Jays2Kings/tachiyomiJ2K",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly9naXRodWIuY29t",
        "description": "作者很懒，没有填写描述。"
      },
      {
        "title": "Cimoc",
        "url": "https://github.com/Haleydu/Cimoc",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly9naXRodWIuY29t",
        "description": "作者很懒，没有填写描述。"
      },
      {
        "title": "K Anime Wallpaper",
        "url": "https://github.com/EternalSoySauce/Konachan",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly9naXRodWIuY29t",
        "description": "作者很懒，没有填写描述。"
      },
      {
        "title": "Pixiv UWP",
        "url": "https://github.com/tobiichiamane/pixivfs-uwp",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly9naXRodWIuY29t",
        "description": "作者很懒，没有填写描述。"
      },
      {
        "title": "PxView",
        "url": "https://github.com/alphasp/pxview",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly9naXRodWIuY29t",
        "description": "作者很懒，没有填写描述。"
      },
      {
        "title": "PivisionM",
        "url": "https://github.com/mouyase/PivisionM",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly9naXRodWIuY29t",
        "description": "作者很懒，没有填写描述。"
      },
      {
        "title": "Pixeval",
        "url": "https://github.com/Rinacm/Pixeval",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly9naXRodWIuY29t",
        "description": "作者很懒，没有填写描述。"
      },
      {
        "title": "Flexbooru",
        "url": "https://github.com/flexbooru/flexbooru",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly9naXRodWIuY29t",
        "description": "作者很懒，没有填写描述。"
      },
      {
        "title": "FEhViewer",
        "url": "https://github.com/honjow/FEhViewer",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly9naXRodWIuY29t",
        "description": "作者很懒，没有填写描述。"
      },
      {
        "title": "Ehviewer-Overhauled",
        "url": "https://github.com/Ehviewer-Overhauled/Ehviewer",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly9naXRodWIuY29t",
        "description": "作者很懒，没有填写描述。"
      },
      {
        "title": "E-Viewer",
        "url": "https://github.com/OpportunityLiu/E-Viewer",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly9naXRodWIuY29t",
        "description": "作者很懒，没有填写描述。"
      },
      {
        "title": "Ehviewer",
        "url": "https://github.com/xiaojieonly/Ehviewer_CN_SXJ",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly9naXRodWIuY29t",
        "description": "作者很懒，没有填写描述。"
      },
      {
        "title": "Pixiv-Shaft",
        "url": "https://github.com/CeuiLiSA/Pixiv-Shaft",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly9naXRodWIuY29t",
        "description": "作者很懒，没有填写描述。"
      },
      {
        "title": "pixez-flutter",
        "url": "https://github.com/Notsfsssf/pixez-flutter",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly9naXRodWIuY29t",
        "description": "作者很懒，没有填写描述。"
      },
      {
        "title": "Pixiv-Slinky",
        "url": "https://github.com/CeuiLiSA/Pixiv-Slinky",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly9naXRodWIuY29t",
        "description": "作者很懒，没有填写描述。"
      },
    ],
  },
  {
    title: "GitHub 电脑软件",
    sites: [
      {
        "title": " 64Gram",
        "url": "https://github.com/TDesktop-x64/tdesktop",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly9naXRodWIuY29t",
        "description": "作者很懒，没有填写描述。"
      },
      {
        "title": "style2paints",
        "url": "https://github.com/lllyasviel/style2paints",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly9naXRodWIuY29t",
        "description": "线稿智能上色"
      },
      {
        "title": "阿里云盘小白羊版",
        "url": "https://github.com/liupan1890/aliyunpan",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly9naXRodWIuY29t",
        "description": "作者很懒，没有填写描述。"
      },
      {
        "title": "AI-Lossless-Zoomer",
        "url": "https://github.com/X-Lucifer/AI-Lossless-Zoomer",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly9naXRodWIuY29t",
        "description": "作者很懒，没有填写描述。"
      },
      {
        "title": "Steam++",
        "url": "https://github.com/BeyondDimension/SteamTools",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly9naXRodWIuY29t",
        "description": "作者很懒，没有填写描述。"
      },
      {
        "title": "Mem Reduct",
        "url": "https://github.com/henrypp/memreduct",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly9naXRodWIuY29t",
        "description": "作者很懒，没有填写描述。"
      },
      {
        "title": "qttabbar",
        "url": "https://github.com/indiff/qttabbar/tree/1.5.5.2-beta",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly9naXRodWIuY29t",
        "description": "作者很懒，没有填写描述。"
      },
      {
        "title": "YTM Desktop",
        "url": "https://github.com/ytmdesktop/ytmdesktop",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly9naXRodWIuY29t",
        "description": "作者很懒，没有填写描述。"
      },
      {
        "title": "TrafficMonitor",
        "url": "https://github.com/zhongyang219/TrafficMonitor",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly9naXRodWIuY29t",
        "description": "作者很懒，没有填写描述。"
      },
      {
        "title": "ScreenToGif",
        "url": "https://www.screentogif.com/?l=zh_cn",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly93d3cuc2NyZWVudG9naWYuY29t",
        "description": "作者很懒，没有填写描述。"
      },
      {
        "title": "OBS Studio",
        "url": "https://github.com/obsproject/obs-studio",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly9naXRodWIuY29t",
        "description": "作者很懒，没有填写描述。"
      },
      {
        "title": "Waifu2x-GUI",
        "url": "https://github.com/AaronFeng753/Waifu2x-Extension-GUI",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly9naXRodWIuY29t",
        "description": "作者很懒，没有填写描述。"
      },
      {
        "title": "TranslucentTB",
        "url": "https://github.com/TranslucentTB/TranslucentTB",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly9naXRodWIuY29t",
        "description": "作者很懒，没有填写描述。"
      },
      {
        "title": "GARbro",
        "url": "https://github.com/morkt/GARbro",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly9naXRodWIuY29t",
        "description": "作者很懒，没有填写描述。"
      },
    ],
  },
  {
    title: "网络代理",
    sites: [
      {
        "title": "ClashMetaForAndroid",
        "url": "https://github.com/MetaCubeX/ClashMetaForAndroid",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly9naXRodWIuY29t",
        "description": "作者很懒，没有填写描述。"
      },
      {
        "title": "v2rayNX",
        "url": "https://github.com/yoursoftder/v2rayNX",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly9naXRodWIuY29t",
        "description": "作者很懒，没有填写描述。"
      },
      {
        "title": "Stair-Speedtest-Portable",
        "url": "https://xun-x.github.io/Stair-Speedtest-Portable/",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly94dW4teC5naXRodWIuaW8=",
        "description": "作者很懒，没有填写描述。"
      },
      {
        "title": "SSRRAY",
        "url": "https://github.com/xxf098/shadowsocksr-v2ray-trojan-android",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly9naXRodWIuY29t",
        "description": "作者很懒，没有填写描述。"
      },
      {
        "title": "stairspeedtest",
        "url": "https://github.com/tindy2013/stairspeedtest-reborn",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly9naXRodWIuY29t",
        "description": "作者很懒，没有填写描述。"
      },
      {
        "title": "SagerNet",
        "url": "https://github.com/SagerNet/SagerNet",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly9naXRodWIuY29t",
        "description": "作者很懒，没有填写描述。"
      },
      {
        "title": "Clash For Android",
        "url": "https://github.com/Kr328/ClashForAndroid",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly9naXRodWIuY29t",
        "description": "作者很懒，没有填写描述。"
      },
      {
        "title": "NetchX",
        "url": "https://github.com/NetchX/Netch",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly9naXRodWIuY29t",
        "description": "作者很懒，没有填写描述。"
      },
      {
        "title": "Clash_Chinese_Patch",
        "url": "https://github.com/BoyceLig/Clash_Chinese_Patch/releases",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly9naXRodWIuY29t",
        "description": "作者很懒，没有填写描述。"
      },
      {
        "title": "GUI Clash",
        "url": "https://github.com/Fndroid/clash_for_windows_pkg",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly9naXRodWIuY29t",
        "description": "作者很懒，没有填写描述。"
      },
      {
        "title": "v2rayNG",
        "url": "https://github.com/2dust/v2rayNG",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly9naXRodWIuY29t",
        "description": "作者很懒，没有填写描述。"
      },
      {
        "title": "v2rayN",
        "url": "https://github.com/2dust/v2rayN",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly9naXRodWIuY29t",
        "description": "作者很懒，没有填写描述。"
      },
    ],
  },
  {
    title: "机场",
    sites: [
      {
        "title": "丛雨 VPN",
        "url": "https://congyu.moe/",
        "icon": "发布站点：https://cn.congyu.org/favicon.svg",
        "description": "moe 被墙。发布站点：https://cn.congyu.org/，防止失联。机场主好像是柚子厨。"
      },
      {
        "title": "tutucloud",
        "url": "https://qiang.tutucloud.shop/",
        "description": "速度很快，比较便宜并且支持不限时流量。"
      },
      {
        "title": "起飞机场",
        "url": "https://www.qifeijiasuapp.com/zh-hans",
        "icon": "https://www.qifeijiasuapp.com/sites/vpn1_qifei/files/inline-images/logo-cn-vpnweb.png",
        "description": "免费，效果还可以。"
      },
      {
        "title": "RabbitPro",
        "url": "https://rabbitpro.net/",
        "icon": "https://rabbitpro.net/favicon.ico",
        "description": "一直在用，感觉不太会跑路，有点贵。"
      },
      {
        "title": "品云机场导航",
        "url": "https://52.mk/",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly81Mi5taw==",
        "description": "作者很懒，没有填写描述。"
      },
      {
        "title": "Sub Converter",
        "url": "https://sub-web.netlify.app/",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly9zdWItd2ViLm5ldGxpZnkuYXBw",
        "description": "作者很懒，没有填写描述。"
      },
      {
        "title": "PAC",
        "url": "https://raw.githubusercontent.com/petronny/gfwlist2pac/master/gfwlist.pac",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29t",
        "description": "作者很懒，没有填写描述。"
      },
      {
        "title": "订阅转换",
        "url": "https://bianyuan.xyz/",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly9iaWFueXVhbi54eXo=",
        "description": "作者很懒，没有填写描述。"
      },
      {
        "title": "V2Ray",
        "url": "https://itlanyan.com/v2ray-clients-download/",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly9pdGxhbnlhbi5jb20=",
        "description": "作者很懒，没有填写描述。"
      },
      {
        "title": "SSR",
        "url": "https://ssr.tools/",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly9zc3IudG9vbHM=",
        "description": "作者很懒，没有填写描述。"
      },
    ],
  },
  {
    title: "磁力搜索",
    sites: [
      {
        "title": "动漫花园镜像站",
        "url": "https://dongmanhuayuan.myheartsite.com/",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly9kb25nbWFuaHVheXVhbi5teWhlYXJ0c2l0ZS5jb20=",
        "description": "作者很懒，没有填写描述。"
      },
      {
        "title": "ACG23",
        "url": "https://www.acg23.com/",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly93d3cuYWNnMjMuY29t",
        "description": "作者很懒，没有填写描述。"
      },
      {
        "title": "JavDB",
        "url": "https://javdb.com/",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly9qYXZkYi5jb20=",
        "description": "作者很懒，没有填写描述。"
      },
      {
        "title": "Tokyo Toshokan",
        "url": "https://www.tokyotosho.info/",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly93d3cudG9reW90b3Noby5pbmZv",
        "description": "作者很懒，没有填写描述。"
      },
      {
        "title": "蜜柑计划",
        "url": "https://mikanani.me/",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly9taWthbmFuaS5tZQ==",
        "description": "作者很懒，没有填写描述。"
      },
      {
        "title": "萌番组",
        "url": "https://bangumi.moe/",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly9iYW5ndW1pLm1vZQ==",
        "description": "作者很懒，没有填写描述。"
      },
      {
        "title": "Ø磁铁",
        "url": "https://17mag.net/",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly8xN21hZy5uZXQ=",
        "description": "作者很懒，没有填写描述。"
      },
      {
        "title": "BitCQ",
        "url": "https://bitcq.com/",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly9iaXRjcS5jb20=",
        "description": "作者很懒，没有填写描述。"
      },
      {
        "title": "MioBT",
        "url": "http://www.miobt.com/",
        "icon": "//favicon.rss.ink/v1/aHR0cDovL3d3dy5taW9idC5jb20=",
        "description": "作者很懒，没有填写描述。"
      },
      {
        "title": "爱恋动漫BT",
        "url": "http://kisssub.org/",
        "icon": "//favicon.rss.ink/v1/aHR0cDovL2tpc3NzdWIub3Jn",
        "description": "作者很懒，没有填写描述。"
      },
      {
        "title": "動漫花園",
        "url": "http://dmhy.org/",
        "icon": "//favicon.rss.ink/v1/aHR0cDovL2RtaHkub3Jn",
        "description": "作者很懒，没有填写描述。"
      },
      {
        "title": "漫猫动漫BT",
        "url": "http://www.comicat.org/",
        "icon": "//favicon.rss.ink/v1/aHR0cDovL3d3dy5jb21pY2F0Lm9yZw==",
        "description": "作者很懒，没有填写描述。"
      },
      {
        "title": "Nyaa Pantsu",
        "url": "https://nyaa.net/",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly9ueWFhLm5ldA==",
        "description": "作者很懒，没有填写描述。"
      },
      {
        "title": "Sukebei",
        "url": "https://sukebei.nyaa.si/",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly9zdWtlYmVpLm55YWEuc2k=",
        "description": "作者很懒，没有填写描述。"
      },
      {
        "title": "Nyaa",
        "url": "https://nyaa.si/",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly9ueWFhLnNp",
        "description": "作者很懒，没有填写描述。"
      },
      {
        "title": "搜图bot酱",
        "url": "https://soutubot.moe/",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly9zb3V0dWJvdC5tb2U=",
        "description": "作者很懒，没有填写描述。"
      },
      {
        "title": "Anime Search",
        "url": "https://trace.moe/",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly90cmFjZS5tb2U=",
        "description": "作者很懒，没有填写描述。"
      },
      {
        "title": "IQDB",
        "url": "http://www.iqdb.org/",
        "icon": "//favicon.rss.ink/v1/aHR0cDovL3d3dy5pcWRiLm9yZw==",
        "description": "作者很懒，没有填写描述。"
      },
      {
        "title": "Google Images",
        "url": "https://images.google.com/",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly9pbWFnZXMuZ29vZ2xlLmNvbQ==",
        "description": "作者很懒，没有填写描述。"
      },
      {
        "title": "ascii2d",
        "url": "https://ascii2d.net/",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly9hc2NpaTJkLm5ldA==",
        "description": "作者很懒，没有填写描述。"
      },
      {
        "title": "Yandex",
        "url": "https://yandex.com/images/",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly95YW5kZXguY29t",
        "description": "作者很懒，没有填写描述。"
      },
      {
        "title": "Sauce",
        "url": "http://saucenao.com/",
        "icon": "//favicon.rss.ink/v1/aHR0cDovL3NhdWNlbmFvLmNvbQ==",
        "description": "作者很懒，没有填写描述。"
      },
    ],
  },
  {
    title: "图片托管",
    sites: [
      {
        "title": "极兔图床",
        "url": "https://pic.jitudisk.com/",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly9waWMuaml0dWRpc2suY29t",
        "description": "作者很懒，没有填写描述。"
      },
      {
        "title": "在线PS",
        "url": "https://www.gaituya.com/ps/",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly93d3cuZ2FpdHV5YS5jb20=",
        "description": "作者很懒，没有填写描述。"
      },
      {
        "title": "waifu2x",
        "url": "http://waifu2x.udp.jp/index.zh-CN.html",
        "icon": "//favicon.rss.ink/v1/aHR0cDovL3dhaWZ1MngudWRwLmpw",
        "description": "作者很懒，没有填写描述。"
      },
      {
        "title": "Bigjpg",
        "url": "http://bigjpg.com/",
        "icon": "//favicon.rss.ink/v1/aHR0cDovL2JpZ2pwZy5jb20=",
        "description": "作者很懒，没有填写描述。"
      },
      {
        "title": "SM.MS",
        "url": "https://sm.ms/",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly9zbS5tcw==",
        "description": "作者很懒，没有填写描述。"
      },
    ],
  },
  {
    title: "文件托管",
    sites: [
      {
        "title": "Streamja",
        "url": "https://streamja.com/",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly9zdHJlYW1qYS5jb20=",
        "description": "作者很懒，没有填写描述。"
      },
      {
        "title": "cockfile",
        "url": "https://cockfile.com/",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly9jb2NrZmlsZS5jb20=",
        "description": "作者很懒，没有填写描述。"
      },
      {
        "title": "Fileditch",
        "url": "https://fileditch.com/",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly9maWxlZGl0Y2guY29t",
        "description": "作者很懒，没有填写描述。"
      },
      {
        "title": "奶牛快传",
        "url": "https://cowtransfer.com/",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly9jb3d0cmFuc2Zlci5jb20=",
        "description": "作者很懒，没有填写描述。"
      },
      {
        "title": "AnonFiles",
        "url": "https://anonfiles.com/",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly9hbm9uZmlsZXMuY29t",
        "description": "作者很懒，没有填写描述。"
      },
      {
        "title": "Catbox",
        "url": "https://catbox.moe/",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly9jYXRib3gubW9l",
        "description": "作者很懒，没有填写描述。"
      },
      {
        "title": "Litterbox",
        "url": "https://litterbox.catbox.moe/",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly9saXR0ZXJib3guY2F0Ym94Lm1vZQ==",
        "description": "作者很懒，没有填写描述。"
      },
    ],
  },
  {
    title: "硬件天梯",
    sites: [
      {
        "title": "移动芯片排行",
        "url": "https://www.socpk.com/",
        "icon": "https://www.socpk.com/favicon.ico",
        "description":  "来自极客湾的测评"
      },
      {
        "title": "显卡天梯图",
        "url": "https://tools.miku.ac/gpu_rank/",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly90b29scy5taWt1LmFj",
        "description":  "来自 MikuTools 的测评"
      },
      {
        "title": "CPU 天梯图",
        "url": "https://tools.miku.ac/cpu_rank/",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly90b29scy5taWt1LmFj",
        "description": "来自 MikuTools 的测评"
      },
      {
        "title": "手机CPU性能天梯图",
        "url": "https://www.mydrivers.com/zhuanti/tianti/01/",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly93d3cubXlkcml2ZXJzLmNvbQ==",
        "description": "作者很懒，没有填写描述。"
      },
      {
        "title": "桌面显卡性能天梯图",
        "url": "https://www.mydrivers.com/zhuanti/tianti/gpu/",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly93d3cubXlkcml2ZXJzLmNvbQ==",
        "description": "作者很懒，没有填写描述。"
      },
      {
        "title": "桌面CPU性能天梯图",
        "url": "https://www.mydrivers.com/zhuanti/tianti/cpu/",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly93d3cubXlkcml2ZXJzLmNvbQ==",
        "description": "作者很懒，没有填写描述。"
      },
    ],
  },
  {
    title: "工具集合",
    sites: [
      {
        "title": "Coder Toolbox",
        "url": "https://lolicon.dev/",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly9sb2xpY29uLmRldg==",
        "description": "作者很懒，没有填写描述。"
      },
      {
        "title": "一个木函工具箱",
        "url": "https://ol.woobx.cn/",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly9vbC53b29ieC5jbg==",
        "description": "作者很懒，没有填写描述。"
      },
      {
        "title": "夜雨聆风工具箱",
        "url": "http://www.yeyulingfeng.com/tool/",
        "icon": "//favicon.rss.ink/v1/aHR0cDovL3d3dy55ZXl1bGluZ2ZlbmcuY29t",
        "description": "作者很懒，没有填写描述。"
      },
      {
        "title": "MikuTools",
        "url": "https://tools.miku.ac/",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly90b29scy5taWt1LmFj",
        "description": "作者很懒，没有填写描述。"
      },
      {
        "title": "ToolTT",
        "url": "https://tooltt.com/",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly90b29sdHQuY29t",
        "description": "作者很懒，没有填写描述。"
      },
    ],
  },
  {
    title: "网址导航",
    sites: [
      {
        "title": "TGNAV",
        "url": "https://tgnav.github.io/",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly90Z25hdi5naXRodWIuaW8=",
        "description": "作者很懒，没有填写描述。"
      },
      {
        "title": "Chairo 导航",
        "url": "https://www.chairo.cc/",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly93d3cuY2hhaXJvLmNj",
        "description": "作者很懒，没有填写描述。"
      },
      {
        "title": "AcgnHub",
        "url": "http://www.acgfans.me/",
        "icon": "//favicon.rss.ink/v1/aHR0cDovL3d3dy5hY2dmYW5zLm1l",
        "description": "作者很懒，没有填写描述。"
      },
      {
        "title": "ACG喵导航",
        "url": "https://www.miaoaaa.com/",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly93d3cubWlhb2FhYS5jb20=",
        "description": "作者很懒，没有填写描述。"
      },
      {
        "title": "妲己导航",
        "url": "https://dajidh.icu/",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly9kYWppZGguaWN1",
        "description": "作者很懒，没有填写描述。"
      },
      {
        "title": "桜舞导航",
        "url": "https://all.cc/",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly9hbGwuY2M=",
        "description": "作者很懒，没有填写描述。"
      },
      {
        "title": "白鹭学园",
        "url": "https://srsg.moe/",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly9zcnNnLm1vZQ==",
        "description": "作者很懒，没有填写描述。"
      },
      {
        "title": "ACG盒子",
        "url": "https://www.acgbox.link/",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly93d3cuYWNnYm94Lmxpbms=",
        "description": "作者很懒，没有填写描述。"
      },
      {
        "title": "18网站大全",
        "url": "https://whichav.video/zh-hans/",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly93aGljaGF2LnZpZGVv",
        "description": "作者很懒，没有填写描述。"
      },
      {
        "title": "Porn Dude",
        "url": "https://theporndude.com/zh",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly90aGVwb3JuZHVkZS5jb20=",
        "description": "作者很懒，没有填写描述。"
      },
      {
        "title": "快搜",
        "url": "https://search.chongbuluo.com/",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly9zZWFyY2guY2hvbmdidWx1by5jb20=",
        "description": "作者很懒，没有填写描述。"
      },
      {
        "title": "趣导航",
        "url": "https://qssily.com/",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly9xc3NpbHkuY29t",
        "description": "作者很懒，没有填写描述。"
      },
    ],
  },
  {
    title: "网络工具",
    sites: [
      {
        "title": "中国科学技术大学测速网站",
        "url": "http://test6.ustc.edu.cn/",
        "icon": "//favicon.rss.ink/v1/aHR0cDovL3Rlc3Q2LnVzdGMuZWR1LmNu",
        "description": "作者很懒，没有填写描述。"
      },
      {
        "title": "LibreSpeed",
        "url": "https://www.librespeed.cn/",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly93d3cubGlicmVzcGVlZC5jbg==",
        "description": "作者很懒，没有填写描述。"
      },
      {
        "title": "Speedtest",
        "url": "https://www.speedtest.net/",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly93d3cuc3BlZWR0ZXN0Lm5ldA==",
        "description": "作者很懒，没有填写描述。"
      },
      {
        "title": "Fast.com",
        "url": "https://fast.com/",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly9mYXN0LmNvbQ==",
        "description": "作者很懒，没有填写描述。"
      },
      {
        "title": "在线ping",
        "url": "https://www.itdog.cn/ping/",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly93d3cuaXRkb2cuY24=",
        "description": "作者很懒，没有填写描述。"
      },
      {
        "title": "IP Geolocation API",
        "url": "https://ipdata.co/",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly9pcGRhdGEuY28=",
        "description": "作者很懒，没有填写描述。"
      },
      {
        "title": "ip-api.com",
        "url": "https://ip-api.com/",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly9pcC1hcGkuY29t",
        "description": "作者很懒，没有填写描述。"
      },
      {
        "title": "检查您自己的IP地址和DNS地址",
        "url": "https://whoer.net/zh",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly93aG9lci5uZXQ=",
        "description": "作者很懒，没有填写描述。"
      },
      {
        "title": "IPinfo.io",
        "url": "https://ipinfo.io/",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly9pcGluZm8uaW8=",
        "description": "作者很懒，没有填写描述。"
      },
      {
        "title": "IPHub.info",
        "url": "https://iphub.info/",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly9pcGh1Yi5pbmZv",
        "description": "作者很懒，没有填写描述。"
      },
      {
        "title": "IP Info",
        "url": "https://ip.voidsec.com/",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly9pcC52b2lkc2VjLmNvbQ==",
        "description": "作者很懒，没有填写描述。"
      },
      {
        "title": "IP.SB",
        "url": "https://ip.sb/",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly9pcC5zYg==",
        "description": "作者很懒，没有填写描述。"
      },
      {
        "title": "myip.ipip.net",
        "url": "http://myip.ipip.net/",
        "icon": "//favicon.rss.ink/v1/aHR0cDovL215aXAuaXBpcC5uZXQ=",
        "description": "作者很懒，没有填写描述。"
      },
      {
        "title": "IP地址",
        "url": "https://ip.skk.moe/",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly9pcC5za2subW9l",
        "description": "作者很懒，没有填写描述。"
      },
      {
        "title": "IPIP",
        "url": "https://www.ipip.net/ip.html",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly93d3cuaXBpcC5uZXQ=",
        "description": "作者很懒，没有填写描述。"
      },
    ],
  },
  {
    title: "Tracker合集",
    sites: [
      {
        "title": "TrackersListCollection",
        "url": "https://trackerslist.com/#/zh",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly90cmFja2Vyc2xpc3QuY29t",
        "description": "作者很懒，没有填写描述。"
      },
      {
        "title": "animeTrackerList",
        "url": "https://github.com/DeSireFire/animeTrackerList",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly9naXRodWIuY29t",
        "description": "作者很懒，没有填写描述。"
      },
      {
        "title": "newTrackon",
        "url": "https://newtrackon.com/list",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly9uZXd0cmFja29uLmNvbQ==",
        "description": "作者很懒，没有填写描述。"
      },
      {
        "title": "Tracker List",
        "url": "https://www.torrenttrackerlist.com/torrent-tracker-list/",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly93d3cudG9ycmVudHRyYWNrZXJsaXN0LmNvbQ==",
        "description": "作者很懒，没有填写描述。"
      },
      {
        "title": "Trackerslist",
        "url": "https://github.com/ngosang/trackerslist",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly9naXRodWIuY29t",
        "description": "作者很懒，没有填写描述。"
      },
    ],
  },
  {
    title: "机场合集",
    sites: [
      {
        "title": "低价机场",
        "url": "https://xn--6nq0hk9tdjr.com/",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly94bi0tNm5xMGhrOXRkanIuY29t",
        "description": "作者很懒，没有填写描述。"
      },
      {
        "title": "Hentai Home",
        "url": "https://dash.hhcloud.me/",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly9kYXNoLmhoY2xvdWQubWU=",
        "description": "作者很懒，没有填写描述。"
      },
      {
        "title": "XMRth",
        "url": "https://xmrth.fun/",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly94bXJ0aC5mdW4=",
        "description": "作者很懒，没有填写描述。"
      },
      {
        "title": "魔戒.net",
        "url": "https://mojie.online/",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly9tb2ppZS5vbmxpbmU=",
        "description": "作者很懒，没有填写描述。"
      },
      {
        "title": "大机场",
        "url": "https://xn--mesr8b36x.business/",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly94bi0tbWVzcjhiMzZ4LmJ1c2luZXNz",
        "description": "作者很懒，没有填写描述。"
      },
      {
        "title": "白嫖机场",
        "url": "https://paolu.pics/",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly9wYW9sdS5waWNz",
        "description": "作者很懒，没有填写描述。"
      },
      {
        "title": "一元机场",
        "url": "https://xn--4gq62f52gdss.com/",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly94bi0tNGdxNjJmNTJnZHNzLmNvbQ==",
        "description": "作者很懒，没有填写描述。"
      },
      {
        "title": "nanoPort",
        "url": "https://v3.nanoport.xyz/",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly92My5uYW5vcG9ydC54eXo=",
        "description": "作者很懒，没有填写描述。"
      },
      {
        "title": "iKuuu VPN",
        "url": "https://ikuuu.eu/",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly9pa3V1dS5ldQ==",
        "description": "作者很懒，没有填写描述。"
      },
    ],
  },
  {
    title: "动漫论坛",
    sites: [
      {
        "title": "ACGN动漫花园",
        "url": "https://www.hyacgn.com/",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly93d3cuaHlhY2duLmNvbQ==",
        "description": "作者很懒，没有填写描述。"
      },
      {
        "title": "ScarletMoon",
        "url": "https://kf.miaola.work/index.php",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly9rZi5taWFvbGEud29yaw==",
        "description": "作者很懒，没有填写描述。"
      },
      {
        "title": "2DJGAME!",
        "url": "https://bbs4.2djgame.net/home/forum.php",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly9iYnM0LjJkamdhbWUubmV0",
        "description": "作者很懒，没有填写描述。"
      },
      {
        "title": "MOBILISM",
        "url": "https://forum.mobilism.org/index.php",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly9mb3J1bS5tb2JpbGlzbS5vcmc=",
        "description": "作者很懒，没有填写描述。"
      },
      {
        "title": "好萌动漫",
        "url": "https://nicemoe60.com/",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly9uaWNlbW9lNjAuY29t",
        "description": "作者很懒，没有填写描述。"
      },
      {
        "title": "South Plus",
        "url": "https://south-plus.net/",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly9zb3V0aC1wbHVzLm5ldA==",
        "description": "作者很懒，没有填写描述。"
      },
      {
        "title": "灵梦御所",
        "url": "https://blog.reimu.net/",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly9ibG9nLnJlaW11Lm5ldA==",
        "description": "作者很懒，没有填写描述。"
      },
      {
        "title": "HACG社发布页",
        "url": "https://acg.gy/",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly9hY2cuZ3k=",
        "description": "作者很懒，没有填写描述。"
      },
      {
        "title": "Sankaku",
        "url": "https://www.sankakucomplex.com/",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly93d3cuc2Fua2FrdWNvbXBsZXguY29t",
        "description": "作者很懒，没有填写描述。"
      },
      {
        "title": "tsdm",
        "url": "https://www.tsdm39.com/forum.php",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly93d3cudHNkbTM5LmNvbQ==",
        "description": "作者很懒，没有填写描述。"
      },
      {
        "title": "Bangumi",
        "url": "https://bangumi.tv/",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly9iYW5ndW1pLnR2",
        "description": "作者很懒，没有填写描述。"
      },
      {
        "title": "ACG爱动漫",
        "url": "https://www.aidm12.com/",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly93d3cuYWlkbTEyLmNvbQ==",
        "description": "作者很懒，没有填写描述。"
      },
      {
        "title": "琉璃神社",
        "url": "https://www.hacg.me/",
        "icon": "//favicon.rss.ink/v1/aHR0cHM6Ly93d3cuaGFjZy5tZQ==",
        "description": "作者很懒，没有填写描述。"
      },
    ],
  },
];

/** Website 配置（2023.3.29 已废弃） */
const WEBSITE_ITEMS: WebsiteItem[] = [];

const GLOBAL_CONFIG = {
  /**
   * 博客名称
   */
  BLOG_NAME: "海祇岛的珊瑚森林",
  /**
   * 个人博客链接
   */
  BLOG_URL: "https://blog.pengdonglai.com",
  /**
   * 指定中心 LOGO 图片地址
   */
  LOGO_URL: "https://blog.pengdonglai.com/medias/avatar.webp",
  /**
   * 个人 Github 链接
   */
  GITHUB_URL: "https://github.com/umaru2001",
  /**
   * 背景图片地址
   */
  BACKGROUND_IMG_URL: "https://blog.pengdonglai.com/medias/banner/4.webp",
  /**
   * ICP 备案号，留空不显示
   */
  // ICP: "京ICP证000001号",
  // ICP_URL: "https://beian.miit.gov.cn/",
  FOOTER_INFO: true,
  /**
   * 网站欢迎标语
   */
  SLOGANS: [
    "欢迎拜访",
    "歡迎拜訪",
    "Welcome, my friend!",
    "訪問へようこそ",
    "嗨，别来无恙",
    "不忘初心，一生浪漫",
    "最近还好吗？",
    "流星，落花，萤火",
    "马车越空，晃荡越响",
  ],
  /**
   * Website 分类配置
   */
  WEBSITE_SORTS,
  /**
   * Website 配置（2023.3.29 已废弃）
   */
  WEBSITE_ITEMS,
  /**
   * 网站 Title Keywords Description 的配置，用于 SEO
   */
  TKD: {
    title: "海星来来的转路口",
    keywords: "Blog, Index, Index Page",
    description: "This is ovo's personal blog index page.",
  },
};

export default GLOBAL_CONFIG;
