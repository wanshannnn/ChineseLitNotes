Build with Docusaurus, Vanile, Github Pages.

### 🔗 网站链接
[「ChineseLitNotes：给中文系学生的电子口袋书」](https://wanshannnn.github.io/ChineseLitNotes/)

### 👋 简介
这主要是一个纯粹的文档网站，为忙于考试的中文系本科学生提供 easily available & portable 的复习笔记，同时也提供扩展性资料和交流区。

目前内容：现代文学、当代文学、现代汉语、公文写作板块内容相对完善，其他板块正在施工中……

### 📃 项目结构

- `.github/workflows`: Github Pages自动部署配置文件
- `docs`
  - `现代文学`: 存放现代文学板块的Markdown格式的笔记
  - `当代文学`: 存放当代文学板块的Markdown格式的笔记
  - ……（其他板块的Markdown格式的笔记）
- `src`
  - `components`
    - `HomePageFeatures`: 定义首页组件
  - `css`: 全局CSS配置文件
  - `pages`: 定义首页布局
  - `theme`
    - `CommentArea`: 定义评论区
    - `Footer`: 定义底部布局
- `static`: 存放静态文件（如笔记中的图片、图标等）
- `.gitignore`
- `docusaurus.config.ts`: Docusaurus配置文件
- `sidebars.ts`: 定义侧边栏
- `README.md`
