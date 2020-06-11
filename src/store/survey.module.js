import { LOCALE } from './mutationType'

const state = {
  locale: 'en'
}

const actions = {

}

const mutations = {
    [LOCALE](state, payload) {
        console.log(payload);
        state.locale = payload
    }
}

export default {
  state,
  actions,
  mutations
}
