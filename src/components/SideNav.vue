<template>
  <mu-paper>
    <mu-drawer left :open="open" :zDepth="0" :docked="!mdMobile" @close="toggleOpen">
      <router-link to="/">
        <mu-appbar title="隧道辅助计算" :zDepth="0"/>
      </router-link>
      <mu-divider/>
      <div class="drawer-content">
        <mu-list :value="listNav" @change="choseChange">
          <mu-list-item title="配筋计算" toggleNested>
            <mu-list-item title="A 顶板" value="配筋-顶板" :to="{name:'bar-top'}" slot="nested"/>
            <mu-list-item title="B 底板" value="配筋-底板" :to="{name:'bar-bottom'}" slot="nested"/>
            <mu-list-item title="C 侧板" value="配筋-侧板" slot="nested"/>
          </mu-list-item>
          <mu-divider/>
          <mu-list-item title="荷载计算" toggleNested>
            <mu-list-item title="A 顶板" value="荷载-顶板" slot="nested"/>
            <mu-list-item title="B 底板" value="荷载-底板" slot="nested"/>
            <mu-list-item title="C 侧板" value="荷载-侧板" slot="nested"/>
          </mu-list-item>
        </mu-list>
      </div>
    </mu-drawer>
  </mu-paper>
</template>

<script>
  export default {
    name: 'SideNav',
    props: {
      open: {
        type: Boolean,
        default: true
      },
      mdMobile: {
        type: Boolean,
        default: true
      }
    },
    data () {
      return {
        listNav: ''
      }
    },
    methods: {
      toggleOpen () {
        this.$emit('toggleOpen');
      },
      choseChange (value) {
        if (value != this.listNav) {
          this.listNav = value;
          this.$emit('navChange', value);
        }
      }
    }
  }
</script>

