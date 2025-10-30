/// <reference types="vite/client" />
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  type Props = Record<string, unknown>
  type Data = Record<string, unknown>
  type Slots = Record<string, unknown>
  const component: DefineComponent<Props, Data, Slots>
  export default component
}
