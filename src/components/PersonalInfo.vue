<template>
    <div>
        personalinfo
    </div>
</template>

<script>

export default {
  name: 'PersonalInfo',
  created () {
    console.log('22')
    this.$http.get('/home-page/personal-info').then(function (res) {
      console.log(res.data)
    })
  }
}
</script>
