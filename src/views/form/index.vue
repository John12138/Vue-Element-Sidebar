<template>
    <div class="app-container">
        我是form
        <!-- <input type="text" name="English" placeholder="英语成绩" v-model.lazy="results[0].marks">
        <input type="text" name="Math" placeholder="数学成绩" v-model.lazy="results[1].marks">
        <input type="text" name="History" placeholder="历史成绩" v-model.lazy="results[2].marks"> -->
        <ul>
            <li v-for="(item,key) in results" class="item_li">
                <input type="text" v-model.lazy="item.marks"  placeholder="成绩" >
            </li>
        </ul>
        {{this.totalMarks}}
    </div>
</template>

<script>
// import func from '../../../vue-temp/vue-editor-bridge';
export default {
    data(){
        return {
            results: [
                {
                    name: 'English',
                    marks: 80
                },
                {
                    name: 'Math',
                    marks: 90
                },
                {
                    name: 'History',
                    marks: 70
                }
            ]
        }
    },
    computed: {
        totalMarks:function(){
            let total = 0;
            for(let i = 0; i < this.results.length; i++){
                total += parseInt(this.results[i].marks);
            }
            return total;
        }
    }
}
</script>

<style scoped>
ul {
    list-style: none;
}

.item_li {
    margin: 20px 0 0 0;
}
</style>
