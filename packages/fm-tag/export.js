import VALUE from 'weex-flymeui/lib/common/variable-type';
export default {
  name: 'FmTag',
  desc: '标签组件',
  slots: null,
  props: {
    size: {
      type: VALUE.SELECT,
      desc: '标签大小',
      default: 'small',
      props: {
        options: ['small', 'big', 'huge']
      }
    },
    value: {
      type: VALUE.STRING,
      desc: '标签内容',
      default: '标签'
    },
    color: {
      type: VALUE.COLOR,
      desc: '标签颜色',
      default: '#198DED'
    },
    fontColor: {
      type: VALUE.COLOR,
      desc: '字体颜色',
      default: '#FFFFFF'
    },
    tagType: {
      type: VALUE.SELECT,
      desc: '标签类型',
      default: 'solid',
      props: {
        options: ['solid', 'hollow']
      }
    }
  },
  events: {}
};
