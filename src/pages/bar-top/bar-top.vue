<template>
  <CalculateCard
    @calculate="calculate"
    :header="instruction.header"
    :title="instruction.title"
    :description="instruction.description"
    :params="params"
  >
    <div slot="formula">
      $$
      outPlus = a + b + c, outMulti= a \times b \times c
      $$
    </div>
  </CalculateCard>
</template>

<script>
  import CalculateCard from '../../components/CalculateCard.vue'
  import model from './bar-top'

  let instruction = {
    header: {
      title: '配筋计算过程',
      subTitle: "核心公式展示"
    },
    title: '顶板计算',
    description: '在下列输入框中输入所需参数，参数仅限数值类型。',
  };

  export default {
    name: 'bar-top',
    data () {
      return {
        instruction,
        model,
        params : {
          inputs: model.inputs,
          outputs: model.outputs
        }
      }
    },
    components:{
      CalculateCard
    },
    methods: {
      calculate () {
        this.model.getResult();
      }
    }
  }
</script>
