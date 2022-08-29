import axios from "axios";

const API_URL = "http://art-dts.herokuapp.com/api"


async function loginUser(formData) {

    console.log("login(" + formData.email + ')');
    const path = API_URL + "/auth/login";

    return axios.post(path, formData)
        .then(response => {
            console.log(response.data);
            if (response.data != null) {
                return response.data;
            }
            return false;
        })
        .catch(errorResp => {
            console.log(errorResp.response.data);
            alert(errorResp.response.data.responseMsg);
            return false;
        })
}

async function registerUser(formData) {
    console.log("register(" + formData.email + ')');
    const path = API_URL + "/auth/register";
    return axios.post(path, formData)
        .then(response => {
            console.log(response.data);
            if (response.data.data != null) {
                alert(response.data.responseMsg);
            }
            return true;
        })
        .catch(errorResp => {
            console.log(errorResp.response.data);
            alert(errorResp.response.data.responseMsg);
            return false;
        })
}

export { loginUser, registerUser };