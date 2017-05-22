<template>
  <mu-snackbar v-if="warn" :message="_warnMessage" action="关闭" @actionClick="hideWarn" @close="hideWarn"/>
</template>

<script>
  import {warnbus} from '../pages/CalcViewBase'

  export default {
    name: 'warn-snackbar',
    data () {
      return {
        warn: false,
        _warnMessage: ''
      }
    },
    created () {
      warnbus.$on('warn', this.showWarn);
    },
    methods: {
      showWarn (message) {
        this.warn = true;
        this._warnMessage = message;
        if (this.snackTimer) clearTimeout(this.snackTimer);
        this.snackTimer = setTimeout(() => { this.warn = false }, 3000);
      },
      hideWarn () {
        this.warn = false;
        if (this.snackTimer) clearTimeout(this.snackTimer);
      }
    }
  }
</script>

