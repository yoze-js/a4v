import { NAutoComplete, NCascader, NColorPicker, NDynamicInput, NInput, NInputNumber, NSelect, NSlider, NSwitch, NTimePicker, NTreeSelect } from 'naive-ui'
import type { Component } from 'vue'

export const components = new Map<string, Component>([
  ['AutoComplete', NAutoComplete],
  ['Cascader', NCascader],
  ['ColorPicker', NColorPicker],
  ['DynamicInput', NDynamicInput],
  ['DynamicTags', NDynamicInput],
  ['Input', NInput],
  ['InputNumber', NInputNumber],
  ['Select', NSelect],
  ['Slider', NSlider],
  ['Switch', NSwitch],
  ['TimePicker', NTimePicker],
  ['TreeSelect', NTreeSelect],
])
