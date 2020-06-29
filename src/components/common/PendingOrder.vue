<template>
    <div>
        PendingOrder
    </div>
</template>

<script>
export default {
  name: 'PendingOrder',
  created () {
    this.$http.get('/home-page/pending-order')
      .then(function (res) {
        console.log(res.data)
      })
  }
}
</script>
