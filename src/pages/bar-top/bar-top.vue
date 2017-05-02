<template>
  <CalcViewBase>
    $$
    outPlus = a + gb + c, outMulti= a \times b \times c
    $$
  </CalcViewBase>
</template>

<script>
  import CalcViewBase from '../CalcViewBase'
  import model from './bar-top'

  let instruction = {
    header: {
      title: '配筋计算过程',
      subTitle: "核心公式展示"
    },
    title: '顶板计算',
    description: '在下列输入框中输入所需参数，参数仅限数值类型。',
  };
  export default CalcViewBase(instruction, model, 'bar-top')

</script>
