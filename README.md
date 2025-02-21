# 个人简历网站开发计划

## 项目概述
基于 Next.js 14 和 TailwindCSS 开发的现代简历网站，参考 Cursor.com 的设计风格。

## 技术栈
- **前端框架**: Next.js 14
- **样式解决方案**: TailwindCSS
- **动画库**: Framer Motion
- **开发语言**: TypeScript
- **部署平台**: Vercel

## 项目结构
```
resume-website/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── about/
│   ├── skills/
│   ├── experience/
│   ├── portfolio/
│   └── contact/
├── components/
│   ├── layout/
│   ├── shared/
│   └── home/
├── styles/
├── lib/
├── public/
└── config/
```

## 功能模块

### 1. 首页 (Home)
- 个人简介概览
- 醒目的头像展示
- 简洁的导航栏
- 社交媒体链接
- 深色/浅色主题切换

### 2. 关于我 (About)
- 详细的个人介绍
- 技能标签云
- 教育背景
- 个人兴趣爱好

### 3. 专业技能 (Skills)
- 技术栈展示
- 技能熟练度可视化
- 专业证书展示

### 4. 工作经历 (Experience)
- 时间线形式展示
- 项目经验
- 工作成就和贡献

### 5. 作品集 (Portfolio)
- 项目展示网格
- 项目详情页
- 在线demo链接
- GitHub仓库链接

### 6. 联系方式 (Contact)
- 联系表单
- 电子邮件链接
- 社交媒体链接

## 开发时间表

### 第一阶段：准备和设计 (3天)
- [x] 项目初始化
- [ ] 环境配置
- [ ] UI设计系统建立
- [ ] 组件原型设计

### 第二阶段：核心开发 (5天)
- [ ] 首页开发
- [ ] 关于我页面
- [ ] 技能展示页面
- [ ] 工作经历页面
- [ ] 作品集页面
- [ ] 联系页面

### 第三阶段：优化和部署 (2天)
- [ ] 性能优化
- [ ] SEO优化
- [ ] 响应式适配
- [ ] 部署上线

## 性能优化计划
1. **图片优化**
   - 使用 next/image
   - WebP 格式
   - 懒加载策略

2. **代码优化**
   - 组件代码分割
   - 路由预加载
   - 静态页面生成

3. **用户体验**
   - 页面转场动画
   - 加载状态优化
   - 响应式设计

## 部署计划
1. 域名配置
2. SSL证书设置
3. Vercel部署
4. CDN配置

## 开发规范
1. **代码规范**
   - ESLint配置
   - Prettier格式化
   - TypeScript严格模式

2. **Git提交规范**
   - feat: 新功能
   - fix: 修复
   - docs: 文档更新
   - style: 代码格式
   - refactor: 重构
   - test: 测试
   - chore: 构建过程或辅助工具的变动

## 启动项目

```bash
# 安装依赖
npm install

# 开发环境运行
npm run dev

# 构建项目
npm run build

# 生产环境运行
npm run start
```

## 注意事项
- 确保 Node.js 版本 >= 18.17.0
- 使用 pnpm 作为包管理器
- 遵循 TypeScript 严格模式
- 保持代码简洁和可维护性 