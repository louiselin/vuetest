import data2 from '../../data/index'


const state = {
    test:[]
};


const actions = {
    getTest ({commit}) {
        data2.gettest(function(res){
            commit('GETTEST',{res})
        })
    }
};

const mutations = {
    GETTEST(state,{res}){
        state.test = res
    }
}

export default {
    state,
    actions,
    mutations
}
