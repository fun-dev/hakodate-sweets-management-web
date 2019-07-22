import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import 'vuetify/src/stylus/app.styl';
import ja from 'vuetify/src/locale/ja';

Vue.use(Vuetify, {
  iconfont: 'md',
  lang: {
    locales: { ja },
    current: 'ja',
  },
});
