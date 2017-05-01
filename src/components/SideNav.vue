<template>
  <mu-paper>
    <mu-drawer left :open="open" :zDepth="0" :docked="!mdMobile" @close="toggleOpen">
      <router-link to="/">
        <mu-appbar :title="navTitle" :zDepth="0"/>
      </router-link>
      <mu-divider/>
      <div class="drawer-content">
        <mu-list :value="chosedNav" @change="choseChange">
          <mu-list-item
            v-for="navList of nav"
            :title="navList.title"
            :key="navList.title"
            toggleNested
          >
            <mu-list-item
              v-for="navItem of navList.list"
              :title="navItem.title"
              :value="navItem"
              :key="navItem.value"
              slot="nested"
            ></mu-list-item>
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
      },
      nav: {
        type: Array,
        default: []
      },
      navTitle: {
        type: String
      }
    },
    data () {
      return {
        chosedNav: {},
      }
    },
    methods: {
      toggleOpen () {
        this.$emit('toggleOpen');
      },
      choseChange (item) {
        if (item != this.chosedNav) {
          this.chosedNav = item;
          this.$emit('navChange', item.value);
          this.$router.push(item.to);
        }
      }
    }
  }
</script>

