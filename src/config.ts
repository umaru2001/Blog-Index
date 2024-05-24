/** Website 分类配置 */
const WEBSITE_SORTS: WebsiteSort[] = [
  {
    title: "我的足迹",
    sites: [
      {
        title: "海祇岛的珊瑚森林",
        description: "海星来来的博客",
        url: "https://blog.pengdonglai.com",
        icon: "https://blog.pengdonglai.com/medias/avatar.webp",
      },
      {
        title: "海星来来的文档站",
        description: "海星来来的文档站",
        url: "https://docs.starfishdl.site/",
        icon: "https://blog.pengdonglai.com/medias/avatar.webp",
      },
      {
        title: "海星来来的知乎",
        description: "海星来来的知乎",
        url: "https://www.zhihu.com/people/hao-ba-50-81-68/",
        icon: "https://blog.pengdonglai.com/medias/avatar.webp",
      }
    ],
  },
  {
    title: "工具",
    sites: [
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
    ]
  }
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
