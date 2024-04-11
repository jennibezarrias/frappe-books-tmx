<template>
    <div class="flex flex-col overflow-y-hidden">
        <PageHeader :title="t`Whatsapp View`">
      <div
        class="
          border
          rounded
          bg-gray-50
          focus-within:bg-gray-100
          flex
          items-center
        "
      >

      </div>
    </PageHeader>
    <WhatsAppView 
    
    />

    </div>
  </template>
  
  <script lang="ts">
  import {defineComponent} from 'vue';
  import PageHeader from 'src/components/PageHeader.vue';
  import WhatsAppView from 'src/components/WhatsAppView.vue';

  export default defineComponent({
    name: 'WhatsApp',

    components: {
        PageHeader,
        WhatsAppView
    },
    data() {
      return {
       
      };
    },
    methods: {
      
    },
    mounted() {

        /*ipcMain.emit('open-whatsapp', () => {

        })*/
        //ipc.openLink('https://web.whatsapp.com/')
    },
  });
  </script>
  