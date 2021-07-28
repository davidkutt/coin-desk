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
    this.renderChart(this.chartData, this.options);
  }

};
</script>
