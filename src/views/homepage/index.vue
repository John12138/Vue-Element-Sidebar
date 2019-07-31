<template>
    <div class="app-container">
        <el-steps :active="active" finish-status="success"> 
            <el-steps title="步骤一"  description="这是步骤一"></el-steps>
            <el-steps title="步骤二"  description="这是步骤二"></el-steps>
            <el-steps title="步骤三"  description="这是步骤三"></el-steps>
            <el-steps title="步骤四"  description="这是步骤四"></el-steps>
        </el-steps>
        <el-button type="primary" style="margin-top: 20px" @click="next">下一步</el-button>
    </div>
</template>

<script>
export default {
    data(){
        return{
            active: 0
        };
    },
    methods: {
        next(){
            if(this.active++ >2)
                this.active = 0;
        }
    },
}
</script>

<style scoped>

</style>
