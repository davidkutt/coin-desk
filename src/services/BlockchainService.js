import axios from "axios";

export default class BlockchainService {

    url = "https://blockchain.info";
    chartsUrl = "https://api.blockchain.info/charts";

    async getTicker() {
        return await axios.get(`${this.url}/ticker`);
    }

    async getChartData(key) {
        const result = await axios.get(`${this.chartsUrl}/${key}?timespan=30days&format=json&cors=true`);
        return result.data.values;
    }

    async getQueryValue(key) {
        const result = await axios.get(`${this.url}/q/${key}`);
        return this.getValueFromSatoshi(result);
    }

    getValueFromSatoshi(result) {
        return result.data / 100000000;
    }

}
