<template>
  <div class="fm-wrapper">
    <textarea v-if="type === 'textarea'"
      :class="inputClz"
      :value="value"
      :rows="rows"
      :maxlength="maxlength"
      :placeholder="placeholder"
      @input="input"
      @change="change"
      @focus="beFocus"
      @blur="beBlur"
      ref="input" />
    <input v-else
      :type="type"
      :class="inputClz"
      :style="inputStyle"
      :value="value"
      :maxlength="maxlength"
      :placeholder="placeholder"
      :autofocus="autofocus"
      :disabled="disabled"
      :return-key-type="returnKeyType"
      :nightMode="nightMode"
      @input="input"
      @change="change"
      @focus="beFocus"
      @blur="beBlur"
      ref="input" />
    <fm-icon v-if="delShow" class="delete" name="guanbi" :icon-style="48" color="#fff" @click="delClick" />
    <fm-icon v-if="visibleShow" class="visible" :name="visibleValue" :icon-style="72" color="#666" @click="toggleVisible" />
    <text v-if="hasError" class="error-msg">{{inputErrorMessage}}</text>
  </div>
</template>

<style lang="css" src="../../lib/theme-paint/lib/input.css" scoped>
</style>

<script>
import FmIcon from '../fm-icon'
import Locale from 'weex-flymeui/lib/mixins/locale'
import { t } from 'weex-flymeui/lib/locale'

export default {
  name: 'FmInput',
  mixins: [Locale],
  components: { FmIcon },
  mounted() {
    if (this.type === 'password') {
      this.pwdModel = true
    }
    this.value = this.inputValue || ''
  },
  data() {
    return {
      value: '',
      rows: 1,
      isFocus: false,
      pwdModel: false,
      pwdVisible: false
    }
  },
  watch: {
    inputValue(val) {
      this.value = val
    }
  },
  props: {
    inputValue: {
      type: [String, Number],
      default: ''
    },
    placeholder: {
      type: String,
      default() {
        return t('el.input.placeholder')
      }
    },
    maxlength: [String, Number],
    inputPattern: RegExp,
    inputErrorMessage: {
      type: String,
      default: '输入有误'
    },
    type: String,
    autofocus: Boolean,
    disabled: Boolean,
    returnKeyType: {
      type: String,
      default: 'default'
    },
    nightMode: {
			type: Boolean,
			default: false
		}
  },
  computed: {
    visibleValue() {
      return this.type === 'password' ? 'chakan;' : 'yinbi'
    },
    inputClz() {
      let clz = ['fm-textarea']
      if (this.hasError) {
        clz.push('fm-textarea-error')
      }
      return clz
    },
    inputStyle() {
      let style = { paddingRight: 24 }
      if (this.delShow || this.visibleShow) {
        style.paddingRight = 108
      }
      return style
    },
    delShow() {
      return !this.pwdModel && this.isFocus && this.value
    },
    visibleShow() {
      return this.isFocus && this.pwdModel
    },
    hasError() {
      const { inputPattern, value } = this
      if (inputPattern) {
        if (!value.match(inputPattern)) {
          return true
        }
        return false
      }
      return false
    }
  },
  methods: {
    delClick(e) {
      this.value = ''
    },
    toggleVisible(e) {
      this.pwdVisible
        ? this.$refs.input.setType('password')
        : this.$refs.input.setType('visible')
      this.pwdVisible = !this.pwdVisible
      // if (this.type === 'password') {
      // 	this.type = 'text'
      // } else {
      // 	this.type = 'password'
      // }
    },
    input(evt) {
      this.value = evt.value
      this.$emit('input', evt)
    },
    change(evt) {
      this.$emit('change', evt)
    },
    beFocus(evt) {
      this.isFocus = true
      this.$emit('focus', evt)
    },
    beBlur(evt) {
      this.isFocus = false
      this.$emit('blur', evt)
    },
    focus() {
      this.$refs.input.focus()
    },
    blur() {
      this.$refs.input.blur()
    },
    setSelectionRange(start, end) {
      this.$refs.input.setSelectionRange(start, end)
    },
    getEditSelectionRange(callback) {
      this.$refs.input.getEditSelectionRange(callback)
    },
    setValue (value) {
      this.value = value
    }
  }
}
</script>
