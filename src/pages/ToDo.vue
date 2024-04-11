<template>
    <div class="flex flex-col overflow-y-hidden">
    <PageHeader :title="t`Tarefas`">
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

    </div>
</template>

<script>
import PageHeader from 'src/components/PageHeader.vue';

export default {
    name: 'ToDo',
    components: {
        PageHeader,
    },
}
</script>