<template>
    <ChatGPTModal />
    <span @click="chatgpt_item = !chatgpt_item" class="nav-label" style="color: #a7b1c2;font-weight: 600;">ChatGPT</span>
</template>
  
<script>
import ChatGPTModal from './components/ChatGPTModal.vue'
import { chatgpt_item } from '@/use/data/index'

export default {
    name: 'App',
    components: {
        ChatGPTModal
    },
    setup() {
        return { chatgpt_item };
    },
}
</script>
  
<style>

#app {
    color: rgb(51, 51, 51);
    font-weight: 400;
}

</style>
  