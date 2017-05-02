<template>
  <CalculateCard
    @calculate="calculate"
    :header="instruction.header"
    :title="instruction.title"
    :description="instruction.description"
    :params="params"
  >
    <template slot="formula">
      <slot>
      </slot>
    </template>
  </CalculateCard>
</template>

<script>
  import CalculateCard from '../components/CalculateCard.vue'
  export default {
    components: {
      CalculateCard
    }
  }
</script>
