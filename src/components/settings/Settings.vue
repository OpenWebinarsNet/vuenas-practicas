<template>
  <div>
    {{ settings }}
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data () {
    return {
      settings: null,
    }
  },
  created () {
    this.fetchModulePermissions().then((response) => {
      this.settings = response
    })
  },
  methods: {
    ...mapActions([
      'fetchModulePermissions',
    ]),
  },
}
</script>
