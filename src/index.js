const io = require('socket.io-client')
const print = io('localhost:8080/print')

new Vue({
    el: '#app',
    data(){
        return {
            data: []
        }
    },
    created(){
        const that = this
        // 获取当前打印服务
        print.emit('get-service', data=>{
            that.data = JSON.parse(data)
        })
    },
    methods:{
        print(){
            print.emit('client-to-service',{ 
                data: {
                    type: 'print'
                }
            },data=>{
                console.log('client-to-service', data)
            })
        }
    }
})