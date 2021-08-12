import './index.css'
import { createApp, h } from 'vue'
import App from './App.vue'
import singleSpaVue from 'single-spa-vue'

const appOptions = {
  el: "#micro-app",
  render: () => h(App),
}

// 判断当前页面使用singleSpa应用,不是就渲染
if (!window.singleSpaNavigate) {
  delete appOptions.el;
  createApp(App).mount("#app");
}

// singleSpaVue包装一个vue微前端服务对象
const vueLifecycles = singleSpaVue({
  createApp,
  appOptions
});

export const bootstrap = vueLifecycles.bootstrap; // 启动时
export const mount = vueLifecycles.mount; // 挂载时
export const unmount = vueLifecycles.unmount; // 卸载时