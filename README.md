# field-dify - Dify AI字段模板

这是一个用于钉钉多维表的 Dify AI 字段模板，允许您在多维表中直接调用 Dify AI 进行智能对话和文本处理。

## 功能特点

- 🤖 **AI 对话**：支持向 Dify AI 发送问题并获取智能回答
- 📎 **附件支持**：可以选择附件字段作为AI分析的输入内容
- 🔐 **灵活认证**：在表单中直接配置 Dify API Key
- 🌐 **国际化**：支持中文、英文、日文三种语言
- ⚙️ **灵活配置**：支持自定义 API 地址和对话模式

## 配置项说明

### 必填项
- **问题/提示**：要向 AI 提问的内容
- **Dify API Key**：您的 Dify API 密钥
- **Dify API 地址**：Dify API 的基础地址，如：`https://api.dify.ai/v1`
- **模式选择**：选择文本生成或对话模式

### 可选项
- **附件字段**：选择一个附件字段，AI 可以分析附件的信息
- **会话 ID**：用于保持会话连续性的标识符

## 使用步骤

1. **获取 Dify API Key**
   - 登录 Dify 平台
   - 创建或选择一个应用
   - 在应用设置中找到 API 密钥

2. **配置字段模板**
   - 在多维表中添加 "field-dify" 字段模板
   - 直接在表单中输入 Dify API Key
   - 设置 API 地址和其他参数

3. **使用字段**
   - 在问题/提示框中输入您的问题
   - 可选择附件字段让AI分析文件信息
   - 字段将自动调用 Dify AI 并返回回答

## 本地开发

### 环境要求
- Node.js 18+
- TypeScript 4.x

### 安装依赖
```bash
npm install
```

### 本地调试
由于 API Key 现在在表单中配置，本地调试时只需：

1. 启动开发服务器：
```bash
npm start
```

2. 在测试时直接填入您的 Dify API Key

3. 类型检查：
```bash
npm run typecheck
```

4. 构建：
```bash
npm run build
```

## 支持的 Dify API 模式

- **文本生成模式** (`completion-messages`)：适用于单次文本生成任务
- **对话模式** (`chat-messages`)：适用于多轮对话场景

## 注意事项

1. **API 地址配置**：确保 Dify API 地址正确，通常格式为 `https://api.dify.ai/v1` 或您的私有部署地址
2. **网络访问**：字段模板运行时需要访问 Dify API，请确保网络连接正常
3. **API 限制**：请注意 Dify API 的调用频率限制和配额限制
4. **数据安全**：API Key 将在表单中明文配置，请注意保护您的密钥安全
5. **附件处理**：附件字段会将文件的基本信息（名称、类型、大小、链接）提供给 AI 分析

## 项目结构

```
field-dify/
├── src/
│   └── index.ts          # 主要业务逻辑
├── package.json          # 项目配置
├── tsconfig.json         # TypeScript 配置
├── config.json           # 本地调试配置
└── README.md            # 项目说明
```

## 技术栈

- TypeScript
- dingtalk-docs-cool-app SDK
- Node.js 环境

## 版本历史

- v1.0.0: 初始版本，支持基本的 Dify AI 对话功能
