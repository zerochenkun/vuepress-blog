module.exports = {
    title: '陈有味的博客',
    // head: [ // 注入到当前页面的 HTML <head> 中的标签
    //   ['link', { rel: 'icon', href: '/avatar.png' }], // 增加一个自定义的 favicon(网页标签的图标)
    // ],
    themeConfig: {
    //   logo: '/avatar.png',  // 左上角logo
      nav:[ // 导航栏配置
        {text: '首页', link: '/' },
        {text: '技术文档', link: '/tech/interview/my-blog.md' },
        {text: '掘金主页', link: 'https://juejin.im/user/5cfb6de251882571c37f17aa/posts'}      
      ],
      sidebar: [
        // ['https://juejin.im/post/5e5e5e826fb9a07cd74f5de3', '.stop .prevent .sync 修饰符']
      ]
    }
  };
