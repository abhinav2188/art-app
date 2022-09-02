import instance from "../axiosInstance";

export async function getDropdownValues(dropdownType, formType, dealId) {
    console.log("getDropdownValues()");
    return instance.get("/ext/dropdown", {
        params: {
            dropdownType, formType, dealId
        }
    })
        .then(
            response => {
                console.log("response data:", response.data);
                return response.data.data;
            }
        )
        .catch(error => {
            console.log("in dropdown service catch");
            console.error(error);
            console.log(error.response.data);
            alert(error.response.data.status + ", " + error.response.data.responseMsg);
            return null;
        })
}