<template>
  <div>
    <h1 class="title" style="margin-top: 40px;">Yoki's 数学练习本</h1>
    <div class="row">
        <div class="col-md-6 col-sm-12">
            <div class="list-group" style="margin-top: 40px;">
                <router-link
                    :to="item.href"
                    class="list-group-item list-group-item-action"
                    v-for="item in items"
                    :key="item.id">{{item.name}}</router-link>
            </div>
        </div>
        <div class="col-md-6 col-sm-12">
            <app-chart style="height: 400px;"></app-chart>
        </div>
    </div>
  </div>
</template>

<script>
import AppChart from './app-chart.vue'
import examsMenu from '../examsMenu'

export default {
  name: "app-main",
  components: {
      'app-chart': AppChart
  },
  data: function() {
    return { items: examsMenu }
  }
}
</script>


