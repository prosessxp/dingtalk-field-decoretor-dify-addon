import { FieldType, fieldDecoratorKit, FormItemComponent, FieldExecuteCode } from '@ali/we-addon-sandbox-init';
const { t } = fieldDecoratorKit;

// 通过addDomainList添加请求接口的域名
fieldDecoratorKit.setDomainList(['api.exchangerate-api.com']);

fieldDecoratorKit.setDecorator({
  name: 'FaaS字段模板 - 汇率转换',
  // 定义捷径的i18n语言资源
  i18nMap: {
    'zh-CN': {
      'rmb': '人民币金额',
      'target': '目标币种',
      'USD': '美元',
      'EUR': '欧元',
    },
    'en-US': {
      'rmb': 'RMB Amount',
      'target': 'Target Currency',
      'USD': 'US Dollar',
      'EUR': 'Euro',
    },
    'ja-JP': {
      'rmb': '人民元の金額',
      'target': 'ターゲット通貨',
      'USD': '米ドル',
      'EUR': 'ユーロ',
    },
  },
  // 定义捷径的入参
  formItems: [
    {
      key: 'account',
      label: t('rmb'),
      component: FormItemComponent.FieldSelect,
      props: {
        mode: 'single',
        supportTypes: [FieldType.Number],
      },
      validator: {
        required: true,
      }
    },
    {
      key: 'target',
      label: t('target'),
      component: FormItemComponent.SingleSelect,
      props: {
        options: [
          {
            key: 'USD',
            title: t('USD'),
          },
          {
            key: 'EUR',
            title: t('EUR'),
          },
        ]
      },
      validator: {
        required: true,
      }
    }
  ],
  // 定义捷径的返回结果类型
  resultType: {
    type: FieldType.Number,
  },
  serviceUrl: '',
  // formItemParams 为运行时传入的字段参数，对应字段配置里的 formItems （如引用的依赖字段）
  execute: async (context, formData: { account: number; target: string }) => {
    const { account, target } = formData;
    try {
      const res: any = await context.fetch('https://api.exchangerate-api.com/v4/latest/CNY', { // 已经在addDomainList中添加为白名单的请求
        method: 'GET',
      }).then(res => res.json());
      const usdRate = res?.rates?.[target] as number;
      console.log('res', res);

      return {
        code: FieldExecuteCode.Success,
        data: usdRate * account
      }
    } catch (e) {
      console.log('====error', String(e));
      return {
        code: FieldExecuteCode.Error,
      }
    }
  },
});
export default fieldDecoratorKit;
