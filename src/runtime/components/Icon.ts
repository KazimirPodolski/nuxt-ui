import { type FunctionalComponent, h } from 'vue'
import type { IconProps } from './Icon.vue'
import UIconOriginal from './Icon.vue'

const Icon: FunctionalComponent<IconProps> = (props) => {
  if (typeof props.name === 'string') {
    return h(UIconOriginal, props)
  } else {
    return h(props.name, props)
  }
}

export default Icon
