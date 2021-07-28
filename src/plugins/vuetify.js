import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
            light: {
                primary: '#D80F16',
                secondary: '#6188d8'
            },
        },
        options: {customProperties: true}
    },
});
