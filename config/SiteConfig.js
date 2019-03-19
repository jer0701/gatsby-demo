const config = {
  siteTitle: "CODING Dev Master", // Site title.
  siteTitleShort: "CODING", // Short site title for homescreen (PWA). Preferably should be under 12 characters to prevent truncation.
  siteTitleAlt: "CODING Dev Master", // Alternative site title for SEO.
  siteLogo: "/logos/coding_logo_400_114.png", // Logo for SEO
  siteUrl: "https://coding.net", // Domain of your website without pathPrefix and for SEO.
  siteType: "website", // Type for SEO
  pathPrefix: "/", // Prefixes all links.
  siteKeywords: "项目管理、需求管理、缺陷管理、Bug Tracking、Bug管理、代码托管、代码评审、Code Review、敏捷开发、看板、迭代、流水线、Wiki、DevOps、Git、SVN、持续集成、CI、Jenkins、CD、测试管理、自动构建、Pages 服务、网页搭建、任务系统、研发管理", // Website keywords
  siteDescription: "Coding.net 是一个面向开发者的云端开发平台，提供 Git/SVN 代码托管、任务管理、在线 WebIDE、Cloud Studio、开发协作、文件管理、Wiki 管理、提供个人服务及企业版本的服务", // Website description
  siteFavicon: "/logos/favicon.ico", // website favicon
  googleAnalyticsID: "UA-65952334-7", // GA tracking ID.
  dateFromFormat: "YYYY-MM-DD", // Date format used in the frontmatter.
  dateFormat: "DD/MM/YYYY" // Date format for display.
};

// Validate

// Make sure pathPrefix is empty if not needed
if (config.pathPrefix === "/") {
  config.pathPrefix = "";
} else {
  // Make sure pathPrefix only contains the first forward slash
  config.pathPrefix = `/${config.pathPrefix.replace(/^\/|\/$/g, "")}`;
}

// Make sure siteUrl doesn't have an ending forward slash
if (config.siteUrl.substr(-1) === "/")
  config.siteUrl = config.siteUrl.slice(0, -1);

module.exports = config;
