
const notificationState = {
    namespaced: true,
    state: {
        message: "",
        type: "success",
        show: false,
    },
    mutations:{
        showSuccessMessage(state,payload) {
            state.message = payload;
            state.type = "success";
            state.show = true
        },
        setShow(state,payload) {
            state.show = payload
        },
        showErrorMessage(state,payload) {
            state.message = payload;
            state.type = "error";
            state.show = true
        },
    },
};

export default notificationState;
