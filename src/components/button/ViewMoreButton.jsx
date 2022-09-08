import React, { useEffect, useState } from "react";
import { View } from "react-native";
import SubmitButton2 from "./SubmitButton2";

const ViewMoreButton = ({pageNo,setPageNo,totalPageCount, style}) => {

    const [showButton,setShowButton] = useState(false);

    useEffect(()=>{
        if(pageNo + 1 < totalPageCount){
            setShowButton(true);
        } else{
            setShowButton(false);
        }
    },[pageNo,totalPageCount])

    return (
        <View style={style}>
        {showButton && (
          <SubmitButton2
            loading={loading}
            onClick={() => {
              setPageNo((prev) =>
                prev + 1 < totalPageCount ? prev + 1 : prev
              );
            }}
          >
            View More
          </SubmitButton2>
        )}
      </View>
    );
}


export default ViewMoreButton;