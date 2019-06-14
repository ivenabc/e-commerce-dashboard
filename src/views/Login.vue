<template>
    <div>
        <button v-on:click="login">login</button> 
    </div>
</template>

<script>
export default {
    methods: {
        login() {
            this.$store.dispatch('account/login', {username:"ok0", password:"pass0"})
            // .then(result => {
            //     // console.log('result', result)
            // })
            // .catch(err => {
            //     // console.log('error', err )
            // })
        },
    }
}
</script>
