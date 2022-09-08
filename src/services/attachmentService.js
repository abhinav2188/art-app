import instance from "../axiosInstance";

export async function addDealAttachment(dealId, formData) {
  const path = "/ext/" + dealId + "/docs";
  return instance
    .post(path, formData, {
      headers: {
        post: {
          "Content-Type": "multipart/form-data",
        },
      },
    })
    .then((response) => {
      console.log("response data:", response.data);
      alert(response.data.responseMsg);
      return response.data;
    })
    .catch((error) => {
      console.log("error:", error);
      console.log(error.response.data);
      alert(
        error.response.data.status + ", " + error.response.data.responseMsg
      );
      return null;
    });
}

export async function getAllDealAttachments(dealId) {
  console.log("getDealAttachments()");
  const path = "/ext/" + dealId + "/docs";
  return instance
    .get(path)
    .then((response) => {
      console.log("response data:", response.data);
      return response.data;
    })
    .catch((error) => {
      console.log("error:", error);
      console.log(error.response.data);
      alert(
        error.response.data.status + ", " + error.response.data.responseMsg
      );
      return null;
    });
}