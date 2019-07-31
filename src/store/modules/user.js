const user = {
    state: {
        showFooter: '',
        changableNum: 0,
        test: "store.test",
    },
    mutations: {
        SHOW_FOOTER: state => {
            state.showFooter = true;
        },
        HIDDEN_FOOTER: state => {
            state.showFooter = false;
        },
        NUM_ADD: (state, sum) => {
            state.changableNum += sum;
        }
    },
    actions: {
        getNewNum: (context, sum) => {
            context.commit("NUM_ADD", sum);
        }
    },
}

export default user