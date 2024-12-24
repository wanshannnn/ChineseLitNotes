### 🔗 网站链接
[「ChineseLitNotes：给中文系学生的电子口袋书」](https://wanshannnn.github.io/ChineseLitNotes/)

### 👋 简介
这主要是一个纯粹的文档网站，为忙于考试的中文系本科学生提供 easily available & portable 的复习笔记，同时也提供扩展性资料和交流区。

目前现代文学、当代文学、现代汉语、公文写作板块内容相对完善，其他板块正在施工中👷

疏漏之处敬请指出，各方面交流都欢迎联系 ➡️ wanshannnn@163.com

### 📃 项目结构

- `.github/workflows`: 自动部署配置文件
- `docs`
  - `现代文学`: 存放现代文学板块的笔记
  - `当代文学`: 存放当代文学板块的笔记
  - ……（其他板块的笔记）
- `src`
  - `components`
    - `HomePageFeatures`: 定义首页组件
  - `css`: 全局CSS配置文件
  - `pages`: 定义首页布局
  - `theme`
    - `DocItem`: 定义评论区
    - `Footer`: 定义底部布局
- `static`: 存放静态文件
- `.gitignore`
- `README.md`
- `docusaurus.config.ts`: Docusaurus配置文件
- `package-lock.json`
- `package.json`
- `sidebars.ts`: 定义侧边栏
- `tsconfig.json`

Build with Docusaurus, Valine, Github Pages.
