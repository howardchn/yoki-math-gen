<template>
<ul style="padding-inline-start: 0px;" class="container">
    <li class="row result-row" v-for="item in questions" :key="item.id">
        <div class="col-6 text-right">{{ item.expr }}</div> 

        <div class="col-6 text-left" style="padding-left: 0px;" v-if="editing">
            <input v-model="item.actual" class="check-input" />
            <template v-if="item.requireMod">
                <span>......</span>
                <input v-model="item.actualMod" class="check-input" />
            </template>
        </div>
        <div class="col-6 text-left" style="padding-left: 0px;" v-else>
            <span style="display:inline-block; width: 80px">
                {{ item.actual }} 
                <span v-if="item.requireMod">...... {{item.actualMod}}</span>
            </span>
            <span style="color: green;" v-if="item.correct">&#10004;</span>
            <span style="color: red;" v-else>&#10008;</span>
        </div>
    </li>
</ul>
</template>

<script>
export default {
    props: ['questions', 'editing']
}
</script>

