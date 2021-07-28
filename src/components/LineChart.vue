<script>
import {Line} from "vue-chartjs/src/BaseCharts";

export default {
  extends: Line,
  props: {
    chartData: {
      type: Object,
      default: null
    },
    options: {
      type: Object,
      default: null
    }
  },
  mounted() {
    setTimeout(this.renderChart(this.chartData, this.options), 1000)
  }

};
</script>
