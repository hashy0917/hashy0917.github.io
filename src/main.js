ScrollReveal().reveal('.box', {
    duration: 800,
    viewFactor: 0.5,
    reset: true
});

new Vue({
    el: '#name',
    data: {
        myname: 'はっすぃ'
    }
})

var vm = new Vue({
    el: '#msg',
    data: {
        message1: '都内在住のエンジニア見習い。お仕事募集中。',
        message2: 'インフラの構築やそれに関する記事を書いたり、セキュリティに関する事などをやっています。',
        message3: 'お仕事当ありましたらTwitterかメールでご連絡ください。'
    },

})

//vm.$watch()

new Vue({
    el: '#app',
    data: {
        message: ''
    }
})