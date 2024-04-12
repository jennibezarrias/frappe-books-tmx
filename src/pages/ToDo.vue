<template>
    <div class="flex flex-col overflow-y-auto">
    <PageHeader :title="t`Tarefas`">
      <div
        class="
          border
          rounded
          bg-gray-50          
          flex
          items-center
        "
      >
      
       
      </div>
    </PageHeader>

    <div class="p-4">
      <FullCalendar :options="calendarOptions" />

    </div>
    
    </div>
</template>

<script>
import PageHeader from 'src/components/PageHeader.vue';
import FullCalendar from '@fullcalendar/vue3';
import dayGridPlugin from '@fullcalendar/daygrid'
import { fyo } from 'src/initFyo';

export default {
    name: 'ToDo',
    components: {
      PageHeader,
      FullCalendar
    },
    data() {
      return {
        calendarOptions: {
          plugins: [dayGridPlugin],
          initialView: 'dayGridMonth'
        },
        tasks: []
      }
    },
    methods: {
      async getTasks() {
        /*let doc = fyo.doc.getNewDoc('ToDo', {
          'name': 'My new task',
          'description': 'My cool description'
        }, false);
        await doc.sync();
        */
        this.tasks = await fyo.db.getAll('ToDo', {
          fields: ['*'],
        });
        

        console.log(this.tasks)

      }
    },
    mounted() {
      this.getTasks();
    }

}
</script>