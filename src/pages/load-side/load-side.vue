<template>
  <CalcViewBase>
    $$
    \text{承载能力极限状态 = 1.2 恒载 + 1.4 活载}
    \\
    \text{承受能力极限荷载 $Q_1$：} Q_1 = 1.2 q + 1.4 p
    \\
    \text{正常使用极限状态 = 恒载 + 活载}
    \\
    \text{正常使用极限荷载 $Q_2$：} Q_2 = q + p
    $$
  </CalcViewBase>
</template>

<script>
  import CalcViewBase from '../CalcViewBase'
  import model from './load-side'

  let instruction = {
    header: {
      title: '荷载计算过程',
      subTitle: '核心公式展示'
    },
    title: '侧板计算',
    description: '在下列输入框中输入所需参数，并点击计算获得结果，参数仅限数值类型。',
  };

  export default CalcViewBase(instruction, model, 'load-side')
</script>
