import instance from "../axiosInstance";

export async function loginUser(formData) {

    console.log("login(" + formData.email + ')');

    return instance.post("/auth/login", formData)
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

export async function registerUser(formData) {
    console.log("register(" + formData.email + ')');
    return instance.post("/auth/register", formData)
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
