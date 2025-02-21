// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

// 网站配置
export const SITE_TITLE = "Isaac Maruyama";
export const SITE_DESCRIPTION = "Thoughts on music, books, politics, and life.";
export const COPYRIGHT = "© 2025 Isaac Maruyama";
export const ICP_NUMBER = "";

// 社交媒体链接, 留空或注释=不显示
export const SOCIAL_LINKS = {
  Github: "https://github.com/isaacmaruyama",
  Twitter: "https://twitter.com/MaruyamaIsaac",
  LinkedIn: "https://www.linkedin.com/in/isaac-maruyama-0273a91b7/",
  Instagram: "https://www.instagram.com/isaacmaruyama",
  Facebook: "https://www.facebook.com/ifmaruyama",
  YouTube: "https://www.youtube.com/@isaacmaruyama",
};

// SEO 相关
export const SEO_CONFIG = {
  ogImage: "/hero-img.png", // 默认的社交媒体分享图片
  keywords: "blog, economics, music, fiction", // 默认关键词
};

// 导航配置
export const NAV_ITEMS = [
  { text: "Home", link: "/" },
  { text: "Blog", link: "/blog" },
  { text: "Tags", link: "/tags" },
  { text: "About", link: "/about" },
];

// 博客配置
export const BLOG_CONFIG = {
  locale: "en-us", // 日期格式化语言
  profile: "https://isaacmaruyama.com", // 作者个人主页
  authorName: "Isaac Maruyama", // 作者名称
  email: "mailto:your-email@example.com",
  tags: {
    title: "Tags", // 标签页面标题
    description: "All the tags used in posts.", // 标签页面描述
  },
};
