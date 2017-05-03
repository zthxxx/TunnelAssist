<template>
  <mu-card>
    <mu-card-header title="Author zthxxx" subTitle="Link blog.zthxxx.me">
      <mu-avatar src="../src/assets/images/author.jpg" slot="avatar"/>
    </mu-card-header>
    <mu-card-media title="城市下穿隧道辅助设计程序" subTitle="模型公式计算">
      <img src="../src/assets/images/tunnel.jpg" />
    </mu-card-media>
    <mu-card-title title="使用简介" subTitle="instruction"/>
    <mu-card-text>
      左侧为计算模型导航栏，每栏里面可点击进入到具体模型开始计算。
      <br/>
      每个算子需要输入参数，然后点击计算得出结果。
      <br/>
      输入参数处请输入数字，计算结果处只能输出不能修改。
    </mu-card-text>
    <mu-card-actions>
      <mu-raised-button label=" 开 始 使 用 " :to="{name: 'bar-top'}" secondary/>
    </mu-card-actions>
  </mu-card>
</template>

<script>
  export default {
    name: 'CalculateCard',
    data () {
      return {
      }
    }
  }
</script>

