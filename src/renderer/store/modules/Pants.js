const state = {
  foo: "fungus"
};

const getters = {
    getFoo( state ) {
        return state.foo;
    }
};

const mutations = {
    SET_FOO: function(state, value) {
        state.foo = value;
    }
};

export default {
  state,
  getters,
  mutations
};
