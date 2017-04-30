<template>
  <mu-paper>
    <mu-drawer left :open="open" :zDepth="0" :docked="!mdMobile" @close="toggleOpen">
      <mu-appbar title="隧道辅助计算" :zDepth="0"></mu-appbar>
      <mu-divider/>
      <div class="drawer-content">
        <mu-list>
          <mu-list-item title="配筋计算" toggleNested>
            <mu-list-item title="A 顶板" slot="nested">
            </mu-list-item>
            <mu-list-item title="B 底板" slot="nested">
            </mu-list-item>
            <mu-list-item title="C 侧板" slot="nested">
            </mu-list-item>
          </mu-list-item>
          <mu-divider/>
          <mu-list-item title="荷载计算" toggleNested>
            <mu-list-item title="A 顶板" slot="nested">
            </mu-list-item>
            <mu-list-item title="B 底板" slot="nested">
            </mu-list-item>
            <mu-list-item title="C 侧板" slot="nested">
            </mu-list-item>
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
      }
    },
    methods: {
      toggleOpen () {
        this.$emit('toggleOpen');
      }
    }
  }
</script>

