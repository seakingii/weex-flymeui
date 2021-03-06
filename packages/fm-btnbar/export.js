import VALUE from 'weex-flymeui/lib/common/variable-type';
export default {
  name: 'FmBtnbar',
  desc: '底部腰圆按钮组件',
  slots: null,
  props: {
    items: {
      type: VALUE.ARRAY,
      desc: '按钮列表',
      props: {
        inner: {
          title: {
            type: VALUE.STRING,
            desc: '标题'
          },
          theme: {
            type: VALUE.SELECT,
            desc: '颜色主题',
            default: 'blue',
            props: {
              options: ['blue', 'limegreen', 'seagreen', 'gray', 'crimson', 'firebrick', 'tomato', 'coral']
            }
          },
          disabled: {
            type: VALUE.BOOLEAN,
            desc: '是否禁用'
          }
        }
      },
      default: [{
        title: '取消订单',
        disabled: true
      }, {
        title: '提交订单',
        theme: 'blue'
      }]
    },
    backgroundColor: {
      type: VALUE.COLOR,
      desc: '背景颜色',
      default: '#FFFFFF'
    }
  },
  events: {
    fmBtnbarBtnClicked: {
      desc: '按钮被点击'
    }
  }
};
