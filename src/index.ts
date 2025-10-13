import { FieldType, fieldDecoratorKit, FormItemComponent, FieldExecuteCode, AuthorizationType } from 'dingtalk-docs-cool-app';
const { t } = fieldDecoratorKit;

// 通过addDomainList添加请求接口的域名 - 添加 Dify API 域名
fieldDecoratorKit.setDomainList(['dify.newki.com', 'api.dify.ai', 'cloud.dify.ai',"ai.fillwant.com", "192.18.4.51"]);

fieldDecoratorKit.setDecorator({
  name: 'Dify 智能体',
  // 配置授权
  authorizations: {
    id: 'dify_auth',
    platform: 'Dify',
    type: AuthorizationType.HeaderBearerToken,
    required: true,
    instructionsUrl: "https://docs.dify.ai/zh-hans/guides/application-publishing/developing-with-apis",
    label: 'Dify API Key',
    tooltips: '请在 Dify 应用设置中获取 API Key',
    icon: {
      light: 'https://assets-docs.dify.ai/2025/05/d05cfc6ebe48f725d171dc71c64a5d16.svg',
      dark: 'https://assets-docs.dify.ai/2025/05/c51f1cda47c1d9a4a162d7736f6e4c53.svg'
    }
  },
  // 定义国际化语言资源
  i18nMap: {
    'zh-CN': {
      'question': '问题/提示（对话流模式时必填）',
      'questionPlaceholder': '请输入要向 AI 提问的内容（工作流模式时留空，使用【输入参数配置】）',
      'attachmentField': '附件字段（可选）',
      'attachmentFieldPlaceholder': '选择一个附件字段作为输入',
      'apiBaseUrl': 'Dify API 地址',
      'apiBaseUrlPlaceholder': '请输入 Dify API 基础地址，如：https://api.dify.ai/v1',
      'inputParams': '输入参数配置（可选）',
      'inputParamsPlaceholder': '请输入JSON格式，支持字段引用语法',
      'workflowOutput': '工作流结果变量（工作流模式必填）',
      'workflowOutputPlaceholder': '请输入Dify工作流输出的变量名，如：text',
      'conversationId': '会话 ID（可选）',
      'conversationIdPlaceholder': '用于保持会话连续性的 ID',
      'modelMode': '模式选择',
      'workFlow': '工作流',
      'chatFlow': '对话流',
      'errorChatQuestionRequired': '对话流模式下问题/提示为必填项',
      'errorWorkflowOutputRequired': '工作流模式下工作流结果变量为必填项',
      'errorInvalidApiUrl': '必须使用Dify官方地址，如：https://api.dify.ai/v1',
      'errorDifyApiRequest': 'Dify API 请求失败，请核对地址及Key并检查Dify日志',
      'errorOutputVariableNotFound': '未能在Dify输出中找到指定的变量',
      'errorExecuteFailed': '执行错误'
    },
    'en-US': {
      'question': 'Question/Prompt (Required for chat flow mode)',
      'questionPlaceholder': 'Enter your question for AI (Optional for work flow mode, use input parameters)',
      'attachmentField': 'Attachment Field (Optional)',
      'attachmentFieldPlaceholder': 'Select an attachment field as input',
      'apiBaseUrl': 'Dify API Base URL',
      'apiBaseUrlPlaceholder': 'Enter Dify API base URL, e.g.: https://api.dify.ai/v1',
      'inputParams': 'Input Parameters Configuration (Optional)',
      'inputParamsPlaceholder': 'JSON format, supports field reference syntax',
      'workflowOutput': 'Workflow Output Variable (Required for work flow mode)',
      'workflowOutputPlaceholder': 'Enter the variable name of the Dify workflow output, e.g.: text',
      'conversationId': 'Conversation ID (Optional)',
      'conversationIdPlaceholder': 'ID for conversation continuity',
      'modelMode': 'Mode Selection',
      'workFlow': 'Work flow',
      'chatFlow': 'Chat flow',
      'errorChatQuestionRequired': 'Question/Prompt is required in chat flow mode',
      'errorWorkflowOutputRequired': 'Workflow output variable is required in work flow mode',
      'errorInvalidApiUrl': 'Must use official Dify address, e.g.: https://api.dify.ai/v1',
      'errorDifyApiRequest': 'Dify API request failed, please check the address and Key and check the Dify log',
      'errorOutputVariableNotFound': 'Could not find the specified variable in Dify outputs',
      'errorExecuteFailed': 'Execute error'
    },
    'ja-JP': {
      'question': '質問/プロンプト（チャットモードで必須）',
      'questionPlaceholder': 'AIに質問する内容を入力（ワークフローモードではオプション、inputsパラメータを使用）',
      'attachmentField': '添付フィールド（オプション）',
      'attachmentFieldPlaceholder': '入力として添付フィールドを選択',
      'apiBaseUrl': 'Dify API ベースURL',
      'apiBaseUrlPlaceholder': 'Dify APIベースURLを入力してください、例：https://api.dify.ai/v1',
      'inputParams': '入力パラメータ設定（オプション）',
      'inputParamsPlaceholder': 'JSON形式、フィールド参照構文をサポート',
      'workflowOutput': 'ワークフロー結果変数（ワークフローモードで必須）',
      'workflowOutputPlaceholder': '取得したDifyのワークフロー結果変数を入力してください',
      'conversationId': '会話ID（オプション）',
      'conversationIdPlaceholder': '会話の継続性のためのID',
      'modelMode': 'モード選択',
      'workFlow': 'ワークフロー',
      'chatFlow': 'チャット',
      'errorChatQuestionRequired': 'チャットフローモードでは質問/プロンプトが必須です',
      'errorWorkflowOutputRequired': 'ワークフローモードでは結果変数が必須です',
      'errorInvalidApiUrl': 'Dify公式アドレスを使用する必要があります。例：https://api.dify.ai/v1',
      'errorDifyApiRequest': 'Dify APIリクエストが失敗しました。APIキーを確認し、Difyログをチェックしてください',
      'errorOutputVariableNotFound': ' Difyの結果変数から指定された変数が見つかりませんでした',
      'errorExecuteFailed': '実行エラー'
    },
  },
  errorMessages: {
    'chatQuestionRequired': t('errorChatQuestionRequired'),
    'workflowOutputRequired': t('errorWorkflowOutputRequired'),
    'invalidApiUrl': t('errorInvalidApiUrl'),
    'difApiRequestFailed': t('errorDifyApiRequest'),
    'outputVariableNotFound': t('errorOutputVariableNotFound'),
    'executeFailed': t('errorExecuteFailed'),
  },
  // 定义字段模板的入参
  formItems: [
    {
      key: 'modelMode',
      label: t('modelMode'),
      component: FormItemComponent.Radio,
      props: {
        defaultValue: 'chat-flow',
        options: [
          {
            value: 'chat-flow',
            label: t('chatFlow')
          },
          {
            value: 'work-flow',
            label: t('workFlow')
          }
        ]
      },
      validator: {
        required: true,
      }
    },
    {
      key: 'question',
      label: t('question'),
      component: FormItemComponent.Textarea,
      props: {
        placeholder: t('questionPlaceholder'),
        enableFieldReference: true,
      },
      validator: {
        required: false, // 改为非必填，在执行函数中动态验证
      }
    },
    {
      key: 'attachmentField',
      label: t('attachmentField'),
      component: FormItemComponent.FieldSelect,
      props: {
        mode: 'multiple',
        supportTypes: [FieldType.Attachment],
      },
      validator: {
        required: false,
      }
    },
    {
      key: 'apiBaseUrl',
      label: t('apiBaseUrl'),
      component: FormItemComponent.Textarea,
      props: {
        placeholder: t('apiBaseUrlPlaceholder'),
      },
      validator: {
        required: true,
      }
    },
    {
      key: 'inputParams',
      label: t('inputParams'),
      component: FormItemComponent.Textarea,
      props: {
        placeholder: t('inputParamsPlaceholder'),
        enableFieldReference: true,
      },
      validator: {
        required: false,
      }
    },
    {
      key: 'workflowOutput',
      label: t('workflowOutput'),
      component: FormItemComponent.Textarea,
      props: {
        placeholder: t('workflowOutputPlaceholder'),
      },
      validator: {
        required: false, // 在执行函数中动态验证
      }
    },
    {
      key: 'conversationId',
      label: t('conversationId'),
      component: FormItemComponent.Textarea,
      props: {
        placeholder: t('conversationIdPlaceholder'),
      },
      validator: {
        required: false,
      }
    },
  ],
  // 定义返回结果类型
  resultType: {
    type: FieldType.Text,
  },
  // 执行函数
  execute: async (
    context,
    formData: {
      question: string;
      attachmentField?: Array<{name: string; type: string; size: number; tmp_url: string}>;
      apiBaseUrl: string;
      modelMode: string;
      inputParams?: string;
      workflowOutput?: string;
      conversationId?: string;
    }
  ) => {
    try {
      // 验证 API URL 是否符合要求
      const allowedDomains = ['dify.newki.com', 'api.dify.ai', 'cloud.dify.ai', 'ai.fillwant.com'];
      const isLocalhost = formData.apiBaseUrl.includes('192.168.4.51');
      const hasHttp = formData.apiBaseUrl.startsWith('http://') || formData.apiBaseUrl.startsWith('https://');
      
      // 检查是否在允许的域名列表中或是本地调试地址或包含http协议
      const isValidDomain = allowedDomains.some(domain => formData.apiBaseUrl.includes(domain));
      
      if (!isValidDomain && !isLocalhost && !hasHttp) {
        return {
          code: FieldExecuteCode.Error,
          errorMessage: 'invalidApiUrl',
        };
      }
      
      // 根据模式验证必填字段
      if (formData.modelMode === 'chat-flow' && (!formData.question || !formData.question.trim())) {
        return {
          code: FieldExecuteCode.Error,
          errorMessage: 'chatQuestionRequired',
        };
      }
      
      if (formData.modelMode === 'work-flow' && (!formData.workflowOutput || !formData.workflowOutput.trim())) {
        return {
          code: FieldExecuteCode.Error,
          errorMessage: 'workflowOutputRequired',
        };
      }
      
      // 构建请求数据
      let prompt = formData.question || ''; // work-flow 模式下可以为空
      
      // 构建文件数组（不再将附件信息添加到 prompt 中）
      const files: any[] = [];
      
      // 如果有附件字段，将附件信息添加到 files 数组
      if (formData.attachmentField && formData.attachmentField.length > 0) {
        formData.attachmentField.forEach(att => {
          // 根据文件扩展名判断类型
          const getFileType = (fileName: string): string => {
            const ext = fileName.split('.').pop()?.toLowerCase() || '';
            
            // 图片类型
            if (['jpg', 'jpeg', 'png', 'gif', 'webp', 'svg'].includes(ext)) {
              return 'image';
            }
            // 文档类型
            if (['txt', 'md', 'markdown', 'mdx', 'pdf', 'html', 'xlsx', 'xls', 'vtt', 'properties', 'doc', 'docx', 'csv', 'eml', 'msg', 'pptx', 'ppt', 'xml', 'epub'].includes(ext)) {
              return 'document';
            }
            // 音频类型
            if (['mp3', 'm4a', 'wav', 'webm', 'mpga'].includes(ext)) {
              return 'audio';
            }
            // 视频类型
            if (['mp4', 'mov', 'mpeg', 'webm'].includes(ext)) {
              return 'video';
            }
            // 其他类型
            return 'custom';
          };
          
          files.push({
            type: getFileType(att.name),
            transfer_method: 'remote_url',
            url: att.tmp_url
          });
        });
      }

      const requestBody: any = {
        inputs: {},
        response_mode: 'blocking',
        user: 'dingtalk-user'
      };
      
      // 根据模式决定是否添加 query 字段
      if (formData.modelMode === 'chat-flow') {
        requestBody.query = prompt;
      }
      
      // 处理输入参数配置
      if (formData.inputParams && formData.inputParams.trim()) {
        try {
          const params = JSON.parse(formData.inputParams);
          if (typeof params === 'object' && params !== null) {
            // 处理每个参数
            for (const [key, value] of Object.entries(params)) {
              if (Array.isArray(value) && value.length > 0) {
                // 如果是附件类型的引用，转换为 files 格式
                const attachmentFiles = value.map((att: any) => {
                  if (att && typeof att === 'object' && att.tmp_url) {
                    const getFileType = (fileName: string): string => {
                      const ext = fileName.split('.').pop()?.toLowerCase() || '';
                      if (['jpg', 'jpeg', 'png', 'gif', 'webp', 'svg'].includes(ext)) {
                        return 'image';
                      }
                      if (['txt', 'md', 'markdown', 'mdx', 'pdf', 'html', 'xlsx', 'xls', 'vtt', 'properties', 'doc', 'docx', 'csv', 'eml', 'msg', 'pptx', 'ppt', 'xml', 'epub'].includes(ext)) {
                        return 'document';
                      }
                      if (['mp3', 'm4a', 'wav', 'webm', 'mpga'].includes(ext)) {
                        return 'audio';
                      }
                      if (['mp4', 'mov', 'mpeg', 'webm'].includes(ext)) {
                        return 'video';
                      }
                      return 'custom';
                    };
                    
                    return {
                      type: getFileType(att.name || ''),
                      transfer_method: 'remote_url',
                      url: att.tmp_url
                    };
                  }
                  return null;
                }).filter(Boolean);
                
                requestBody.inputs[key] = attachmentFiles;
              } else {
                // 普通参数，直接赋值
                requestBody.inputs[key] = value;
              }
            }
          }
        } catch (error) {
          console.warn('Parse inputParams JSON fail:', error);
        }
      }
      
      // 如果有文件，添加到请求体中
      if (files.length > 0) {
        requestBody.files = files;
      }

      // 如果有会话ID，添加到请求中
      if (formData.conversationId) {
        requestBody.conversation_id = formData.conversationId;
      }

      // 构建API URL - 根据模式使用不同的端点
      let apiPath = '';
      if (formData.modelMode === 'chat-flow') {
        apiPath = '/chat-messages';
      } else if (formData.modelMode === 'work-flow') {
        apiPath = '/workflows/run';
      }
      
      // Url组装，含调试地址重写
      const apiUrl = `${formData.apiBaseUrl.replace(/\/$/, '').replace('192.168.4.51','ai.fillwant.com')}${apiPath}`;
      console.log(apiUrl);
      console.log(requestBody);

      // 调用 Dify API，使用框架授权
      const response = await context.fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestBody)
      }, 'dify_auth'); // 使用授权配置

      if (!response.ok) {
        const errorText = await response.text();
        console.log(errorText);
        return {
          code: FieldExecuteCode.Error,
          errorMessage: 'difApiRequestFailed',
        };
      }

      const result = await response.json();
      
      // 根据不同模式提取答案
      let answer = '';
      if (formData.modelMode === 'chat-flow') {
        answer = result.answer || '';
      } else if (formData.modelMode === 'work-flow') {
        // work-flow 模式从 outputs 中获取结果
        const outputKey = formData.workflowOutput?.trim();
        if (outputKey && result.data && result.data.outputs && result.data.outputs[outputKey] !== undefined) {
          answer = result.data.outputs[outputKey];
        } else {
          return {
            code: FieldExecuteCode.Error,
            errorMessage: 'workFlowOutputNotFound',
          };
        }
      }

      return {
        code: FieldExecuteCode.Success,
        data: answer,
      };
      
    } catch (error) {
      console.log(error.message);
      return {
        code: FieldExecuteCode.Error,
        msg: `执行失败: ${error instanceof Error ? error.message : String(error)}`,
        data: '',
      };
    }
  },
});

export default fieldDecoratorKit;
