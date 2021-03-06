import VALUE from 'weex-flymeui/lib/common/variable-type';
export default {
  name: 'FmSimpleList',
  desc: '简单列表组件',
  slots: null,
  props: {
    list: {
      type: VALUE.ARRAY,
      desc: '数据源',
      props: {
        inner: {
          title: {
            type: VALUE.STRING,
            desc: '标题'
          },
          color: {
            type: VALUE.COLOR,
            desc: '标题颜色'
          },
          leftIcon: {
            type: VALUE.STRING,
            desc: '左 Icon'
          },
          leftColor: {
            type: VALUE.COLOR,
            desc: '左 Icon 颜色'
          },
          rightIcon: {
            type: VALUE.STRING,
            desc: '右 Icon'
          },
          rightColor: {
            type: VALUE.COLOR,
            desc: '右 Icon 颜色'
          },
          backgroundColor: {
            type: VALUE.COLOR,
            desc: '背景颜色'
          }
        }
      },
      default: [{ title: '标签1', color: '#FC5B23', leftIcon: 'biaoqing', leftColor: '#DC2A2A' }, { title: '标签2' }]
    },
    title: {
      type: VALUE.STRING,
      desc: '标题',
      default: '标题'
    },
    titleColor: {
      type: VALUE.COLOR,
      desc: '标题颜色',
      default: 'rgba(0, 0, 0, 0.4)'
    },
    rightText: {
      type: VALUE.STRING,
      desc: '右边按钮文案',
      default: '更多'
    },
    rightColor: {
      type: VALUE.COLOR,
      desc: '右边按钮颜色',
      default: '#198DED'
    }
  },
  events: {
    fmTagSimpleListBtnClicked: {
      desc: '右边按钮被点击'
    },
    fmSimpleListSelected: {
      desc: '列表项被点击'
    },
    fmSimpleListLeftIconClicked: {
      desc: '列表项左边 Icon 被点击'
    },
    fmSimpleListRightIconClicked: {
      desc: '列表项右边 Icon 被点击'
    }
  }
};
