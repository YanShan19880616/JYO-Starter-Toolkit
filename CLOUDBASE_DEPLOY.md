# 腾讯云部署指南

## 步骤1：安装 Node.js 和 npm

首先检查 Node.js 是否已安装：

```bash
node --version
```

如果未安装，根据您的 Linux 系统执行以下命令：

### CentOS / RHEL / Fedora:
```bash
# 安装 Node.js 18.x
curl -fsSL https://rpm.nodesource.com/setup_18.x | sudo bash -
sudo yum install -y nodejs

# 安装 npm（通常包含在 Node.js 中）
```

### Ubuntu / Debian:
```bash
# 安装 Node.js 18.x
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# 安装 npm（通常包含在 Node.js 中）
```

验证安装：
```bash
node --version
npm --version
```

## 步骤2：安装腾讯云 CLI

```bash
npm install -g @cloudbase/cli
```

## 步骤3：登录腾讯云

```bash
cloudbase login
```

按照提示输入您的腾讯云账号密码或完成扫码授权。

## 步骤4：上传项目代码

将本地项目文件上传到服务器（例如使用 scp 或 rsync）：

```bash
# 示例：使用 scp 上传
scp -r /本地路径/JYO-Starter-Toolkit user@your-server:/path/to/project
```

或者在服务器上使用 git 克隆：

```bash
cd /path/to/projects
git clone https://github.com/YanShan19880616/JYO-Starter-Toolkit.git
cd JYO-Starter-Toolkit
```

## 步骤5：初始化和部署

进入项目目录后执行：

```bash
cd JYO-Starter-Toolkit

# 安装项目依赖
npm install

# 构建项目
npm run build

# 登录腾讯云
cloudbase login

# 初始化项目
cloudbase init

# 选择配置：
# - 环境 ID：您的环境 ID
# - 地域：ap-guangzhou（广州）
# - 函数根目录：cloudbase

# 部署静态网站
cloudbase hosting deploy dist
```

## 配置说明

- **项目名称**：JYO-Starter-Toolkit
- **部署路径**：建议使用根路径 `/` 或自定义路径如 `/wuxia-guide`
- **静态网站**：使用 CloudBase Hosting 托管 Vite 构建产物

## 注意事项

1. 首次部署需要开通静态网站服务
2. 如需自定义域名，请在 CloudBase 控制台配置
3. 图片路径已配置为相对路径，无需修改
4. 环境变量和敏感配置请在 CloudBase 控制台管理

## 快速重新部署

如果后续代码更新，只需重新执行：

```bash
npm run build
cloudbase hosting deploy dist
```

## 获取环境 ID

1. 登录腾讯云控制台：https://console.cloud.tencent.com/
2. 进入 CloudBase 产品页面
3. 找到或创建环境
4. 在环境详情中可以看到环境 ID（格式类似：env-xxxxxx）
