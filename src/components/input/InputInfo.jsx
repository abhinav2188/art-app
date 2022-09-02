import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { Info } from "../../svgIcons";
import colors from "tailwindcss/colors";
import Popover from "react-native-popover-view";

const InputInfo = ({ errorMsg, description, style }) => (
!!errorMsg ? (
    <Popover
      from={
        <TouchableOpacity className="w-6 h-6">
          <Info fill={colors.red[800]} />
        </TouchableOpacity>
      }
    >
      <Text className="px-1 text-red-800 ">{errorMsg}</Text>
    </Popover>
  ) : (
    !!description && (
      <Popover
        from={
          <TouchableOpacity className="w-6 h-6">
            <Info fill={colors.sky[800]} />
          </TouchableOpacity>
        }
      >
        <Text className="px-1 text-sky-800">{description}</Text>
      </Popover>
    )
))

export default InputInfo;

{/* <Popover
from={
  <TouchableOpacity className="w-6 h-6" style={style}>
    <Info fill={errorMsg ? colors.red[800] : colors.sky[800]} />
  </TouchableOpacity>
}
>
{errorMsg ? (
  <Text className="px-1 flex text-red-800 bg-red-100">{errorMsg}</Text>
) : (
  <Text className="px-1 flex text-sky-800 bg-sky-100">{description}</Text>
)}
</Popover> */}

// !!errorMsg ? (
//     <Popover
//       from={
//         <TouchableOpacity className="w-6 h-6">
//           <Info fill={colors.red[800]} />
//         </TouchableOpacity>
//       }
//     >
//       <Text className="px-1 text-red-800 ">{errorMsg}</Text>
//     </Popover>
//   ) : (
//     !!description && (
//       <Popover
//         from={
//           <TouchableOpacity className="w-6 h-6">
//             <Info fill={colors.sky[800]} />
//           </TouchableOpacity>
//         }
//       >
//         <Text className="px-1 text-sky-800">{description}</Text>
//       </Popover>
//     )