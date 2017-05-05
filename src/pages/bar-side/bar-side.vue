<template>
  <CalcViewBase>
    $$
    \text{ A 受压区钢筋面积 $A_s$ ： }  \\
    A_s = \frac {Ne - f_c b h^2_0 \zeta (1-0.5 \zeta)} {f_y (h_0 - a_s^{'})} \gt {\rho}_{min} b h, \text{ $\rho$ 取 0.02}
    $$
    <br/>
    $$
    \text{ B 受拉区钢筋面积 $A_s^{'}$ ： }  \\
    A_s^{'} = \frac {N \left( \eta e_i - \frac {h} {2} + a_s^{'}\right)} {f_y (h_0 - a_s^{'})} \gt {\rho}_{min} b h, \text{ $\rho$ 取 0.02}
    $$
  </CalcViewBase>
</template>

<script>
  import CalcViewBase from '../CalcViewBase'
  import model from './bar-side'

  let instruction = {
    header: {
      title: '配筋计算过程',
      subTitle: '核心公式展示'
    },
    title: '侧板计算',
    description: '在下列输入框中输入所需参数，并点击计算获得结果，参数仅限数值类型。',
  };

  export default CalcViewBase(instruction, model, 'bar-side')
</script>
