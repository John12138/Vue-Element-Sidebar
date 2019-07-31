<template>
    <div class="app-container">
        this is echarts test
        <div id = "myChart"></div>
        {{test}} {{showFooter}} {{changableNum}}
        <button @click="getStore">click</button>
    </div>
</template>

<script>
export default {
    data(){
        return {
            option: {
                title: { text: '在Vue中使用echarts' },
                tooltip: {},
                xAxis: {
                    data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
                },
                yAxis: {},
                series: [{
                    name: '销量',
                    type: 'bar',
                    data: [5, 20, 36, 10, 10, 20]
                }]
            },
            test : '',
            showFooter : '',
            changableNum: ''
        }
    },
    mounted(){
        this.drawLine();
    },
    methods: {
        drawLine(){
        // 基于准备好的dom，初始化echarts实例 并绘制
        this.$echarts.init(document.getElementById('myChart')).setOption(this.option);
        },
        getStore(){
            this.test = this.$store.state.user.test;
            this.$store.commit("SHOW_FOOTER");    //在store中使用mutations定义修改store.state   然后在需要修改的地方使用 this.$store.commit("   ");
            this.showFooter = this.$store.state.user.showFooter;
            this.$store.dispatch("getNewNum",6);
            this.changableNum = this.$store.state.user.changableNum;
        }

    }
}
</script>

<style scoped>
#myChart{
    width: 600px;
    height: 400px;
    margin: 0 auto;
    padding: 20px 0 0 0;
}
</style>
