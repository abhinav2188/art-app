import Svg,{Path} from "react-native-svg";

export const LeftArrow = ({fill}) => <Svg viewBox="0 0 32 32" fill={fill} xmlns="http://www.w3.org/2000/svg">
    <Path fill-rule="evenodd" clip-rule="evenodd" d="M20.2761 24.2762C19.7554 24.7969 18.9112 24.7969 18.3905 24.2762L11.0572 16.9429C10.5365 16.4222 10.5365 15.578 11.0572 15.0573L18.3905 7.72394C18.9112 7.20324 19.7554 7.20324 20.2761 7.72394C20.7968 8.24464 20.7968 9.08886 20.2761 9.60956L13.8856 16.0001L20.2761 22.3906C20.7968 22.9113 20.7968 23.7555 20.2761 24.2762Z" />
</Svg>

export const RightArrow = ({fill}) => <Svg viewBox="0 0 32 32" fill={fill} xmlns="http://www.w3.org/2000/svg">
    <Path fill-rule="evenodd" clip-rule="evenodd" d="M11.7239 7.72378C12.2446 7.20308 13.0888 7.20308 13.6095 7.72378L20.9428 15.0571C21.4635 15.5778 21.4635 16.422 20.9428 16.9427L13.6095 24.2761C13.0888 24.7968 12.2446 24.7968 11.7239 24.2761C11.2032 23.7554 11.2032 22.9111 11.7239 22.3904L18.1144 15.9999L11.7239 9.60939C11.2032 9.0887 11.2032 8.24448 11.7239 7.72378Z" />
</Svg>

export const Close = ({fill}) => <Svg viewBox="0 0 32 32" fill={fill} xmlns="http://www.w3.org/2000/svg">
    <Path d="M21.6569 23.5424C22.1776 24.0631 23.0218 24.0631 23.5425 23.5424C24.0632 23.0217 24.0632 22.1774 23.5425 21.6567L17.8857 15.9999L23.5425 10.3431C24.0632 9.82237 24.0632 8.97815 23.5425 8.45745C23.0218 7.93675 22.1776 7.93675 21.6569 8.45745L16.0001 14.1143L10.3432 8.45742C9.8225 7.93672 8.97828 7.93672 8.45758 8.45742C7.93688 8.97812 7.93688 9.82234 8.45758 10.343L14.1144 15.9999L8.45758 21.6568C7.93688 22.1775 7.93688 23.0217 8.45758 23.5424C8.97828 24.0631 9.8225 24.0631 10.3432 23.5424L16.0001 17.8855L21.6569 23.5424Z" />
</Svg>

export const Delete = ({fill}) => <Svg viewBox="0 0 32 32" fill={fill} xmlns="http://www.w3.org/2000/svg">
    <Path d="M13.3333 24.0001C12.597 24.0001 12 23.4031 12 22.6667L12 13.3334C12 12.597 12.597 12.0001 13.3333 12.0001C14.0697 12.0001 14.6667 12.597 14.6667 13.3334L14.6667 22.6667C14.6667 23.4031 14.0697 24.0001 13.3333 24.0001Z" />
    <Path d="M17.3333 22.6667C17.3333 23.4031 17.9303 24.0001 18.6667 24.0001C19.403 24.0001 20 23.4031 20 22.6667V13.3334C20 12.597 19.403 12.0001 18.6667 12.0001C17.9303 12.0001 17.3333 12.597 17.3333 13.3334V22.6667Z" />
    <Path fill-rule="evenodd" clip-rule="evenodd" d="M10.8706 4.78439L9.86667 6.66675H5.33333C4.59695 6.66675 4 7.2637 4 8.00008C4 8.73646 4.59695 9.33342 5.33333 9.33342H5.40884L6.50226 28.0777C6.54339 28.7827 7.12711 29.3334 7.83333 29.3334H24.1667C24.8729 29.3334 25.4566 28.7827 25.4977 28.0777L26.5912 9.33342H26.6667C27.403 9.33342 28 8.73646 28 8.00008C28 7.2637 27.403 6.66675 26.6667 6.66675H22.1333L21.1294 4.7844C20.4342 3.48094 19.0772 2.66675 17.6 2.66675H14.4C12.9228 2.66675 11.5658 3.48094 10.8706 4.78439ZM14.4 5.33341C13.9076 5.33341 13.4553 5.60481 13.2235 6.0393L12.8889 6.66675H19.1111L18.7765 6.0393C18.5447 5.60481 18.0924 5.33341 17.6 5.33341H14.4ZM23.92 9.33342H8.08004L9.09116 26.6667H22.9088L23.92 9.33342Z" />
</Svg>

export const Reload = ({fill}) => <Svg viewBox="0 0 32 32" fill={fill} xmlns="http://www.w3.org/2000/svg">
    <Path d="M21.9298 4.20207C21.8184 3.47417 22.3181 2.79374 23.046 2.68229C23.7739 2.57084 24.4543 3.07057 24.5658 3.79847L25.3824 9.13159C25.487 9.8153 25.0515 10.4655 24.3794 10.629L18.8964 11.9623C18.1808 12.1364 17.4597 11.6974 17.2857 10.9818C17.1117 10.2663 17.5507 9.5452 18.2663 9.3712L20.8545 8.7418C17.2624 6.12767 12.3138 6.40168 9.21025 9.50519C5.76379 12.9517 5.80673 18.6736 9.41939 22.2862C13.0321 25.8989 18.754 25.9418 22.2004 22.4954C22.7211 21.9747 23.5654 21.9747 24.0861 22.4954C24.6068 23.0161 24.6068 23.8603 24.0861 24.381C19.5479 28.9192 12.1368 28.7749 7.53378 24.1718C2.93077 19.5688 2.78643 12.1578 7.32463 7.61957C11.3682 3.57602 17.6925 3.24986 22.279 6.48277L21.9298 4.20207Z" />
</Svg>

export const Edit = ({fill}) => <Svg viewBox="0 0 32 32" fill={fill} xmlns="http://www.w3.org/2000/svg">
    <Path fill-rule="evenodd" clip-rule="evenodd" d="M21.7516 12.6471L19.866 10.7615L8.33521 22.2923L7.42877 25.0843L10.2208 24.1779L21.7516 12.6471ZM11.6535 26.5165L3.27734 29.2358L5.99665 20.8596L19.866 6.99028L25.5228 12.6471L11.6535 26.5165Z" />
    <Path fill-rule="evenodd" clip-rule="evenodd" d="M27.4085 3.21904C26.3671 2.17764 24.6786 2.17764 23.6373 3.21904L21.7516 5.10465L27.4085 10.7615L29.2941 8.87589C30.3355 7.83449 30.3355 6.14605 29.2941 5.10465L27.4085 3.21904Z" />
</Svg>

export const Add = ({fill}) => <Svg viewBox="0 0 32 32" fill={fill} xmlns="http://www.w3.org/2000/svg">
    <Path d="M17.3333 6.66659C17.3333 5.93021 16.7364 5.33325 16 5.33325C15.2636 5.33325 14.6667 5.93021 14.6667 6.66659V14.6666H6.66667C5.93029 14.6666 5.33334 15.2635 5.33334 15.9999C5.33334 16.7363 5.93029 17.3333 6.66667 17.3333H14.6667V25.3333C14.6667 26.0696 15.2636 26.6666 16 26.6666C16.7364 26.6666 17.3333 26.0696 17.3333 25.3333V17.3333H25.3333C26.0697 17.3333 26.6667 16.7363 26.6667 15.9999C26.6667 15.2635 26.0697 14.6666 25.3333 14.6666H17.3333V6.66659Z" />
</Svg>

export const Attachment = ({fill}) => <Svg fill={fill} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
    <Path d="M21.0636 2.82284C21.2728 2.82284 21.4842 2.83366 21.6989 2.85423C23.2433 3.00252 24.7274 3.6877 25.7725 4.73224C26.8198 5.77787 27.4723 7.2543 27.5619 8.78269C27.6578 10.4215 27.1218 11.9185 26.053 12.9966L16.4334 22.6486C14.9849 24.1088 12.6207 24.1131 11.1636 22.6573C10.4582 21.9515 10.0688 21.0131 10.0667 20.014C10.0645 19.0149 10.4506 18.0743 11.1528 17.3674L17.8873 10.7148C18.4298 10.1758 19.3056 10.1855 19.8394 10.73C20.3744 11.2755 20.3679 12.1523 19.8243 12.6892L13.0996 19.3321C12.927 19.5063 12.8267 19.7499 12.8278 20.0086C12.8278 20.2673 12.9292 20.5108 13.1114 20.6937C13.2948 20.8767 13.5375 20.9763 13.7952 20.9763L13.7963 20.9763C14.0541 20.9763 14.2968 20.8756 14.479 20.6916L24.0986 11.0396C25.1588 9.97012 25.0294 7.89943 23.8247 6.69577C23.2326 6.10476 22.3395 5.69994 21.4346 5.61226C20.9255 5.56571 19.9678 5.5787 19.3185 6.23249L8.50063 17.0059C7.57631 17.9357 7.11253 19.2779 7.19882 20.7771C7.2851 22.2665 7.91066 23.6975 8.91587 24.702C11.0331 26.8171 14.6947 26.9978 16.5984 25.0787L24.3866 17.2311C24.9248 16.6877 25.7984 16.6877 26.3388 17.2267C26.8791 17.7669 26.8813 18.6436 26.3431 19.1859L18.5549 27.0335C15.5802 30.034 10.1659 29.8598 6.96801 26.6655C5.48716 25.1858 4.56715 23.0978 4.44204 20.9373C4.30938 18.6393 5.05789 16.547 6.54953 15.0445L17.3674 4.27113C18.3036 3.32833 19.6 2.82284 21.0636 2.82284Z" />
</Svg>

export const Logout = ({fill}) => <Svg fill={fill} viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
    <Path d="M9.5 10.5V12.5C9.5 12.7652 9.39464 13.0196 9.20711 13.2071C9.01957 13.3946 8.76522 13.5 8.5 13.5H1.5C1.23478 13.5 0.98043 13.3946 0.792893 13.2071C0.605357 13.0196 0.5 12.7652 0.5 12.5V1.5C0.5 1.23478 0.605357 0.98043 0.792893 0.792893C0.98043 0.605357 1.23478 0.5 1.5 0.5H8.5C8.76522 0.5 9.01957 0.605357 9.20711 0.792893C9.39464 0.98043 9.5 1.23478 9.5 1.5V3.5" stroke="#000001" stroke-linecap="round" stroke-linejoin="round" />
    <Path d="M6.5 7H13.5" stroke="#000001" stroke-linecap="round" stroke-linejoin="round" />
    <Path d="M11.5 5L13.5 7L11.5 9" stroke="#000001" stroke-linecap="round" stroke-linejoin="round" />
</Svg>

export const User = ({fill}) => <Svg fill={fill} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
    <Path d="M16.3333 5.33341C10.4493 5.33341 5.66667 10.1321 5.66667 16.0672C5.66667 17.7503 6.05069 19.3392 6.73391 20.7534C7.05423 21.4165 6.77639 22.2137 6.11333 22.534C5.45027 22.8543 4.65308 22.5765 4.33276 21.9134C3.4784 20.1449 3 18.1602 3 16.0672C3 8.67335 8.96254 2.66675 16.3333 2.66675C23.7041 2.66675 29.6667 8.67335 29.6667 16.0672C29.6667 18.1602 29.1883 20.1449 28.3339 21.9134C28.0136 22.5765 27.2164 22.8543 26.5533 22.534C25.8903 22.2137 25.6124 21.4165 25.9328 20.7534C26.616 19.3392 27 17.7503 27 16.0672C27 10.1321 22.2174 5.33341 16.3333 5.33341Z" />
    <Path fill-rule="evenodd" clip-rule="evenodd" d="M19.682 21.766C21.6662 20.6111 23 18.4614 23 16.0001C23 12.3182 20.0152 9.33342 16.3333 9.33342C12.6514 9.33342 9.66667 12.3182 9.66667 16.0001C9.66667 18.4614 11.0005 20.6111 12.9847 21.766C10.9438 22.319 9.38247 23.3267 8.25001 24.3396C7.41292 25.0883 6.81161 25.8374 6.41644 26.4045C6.21837 26.6888 6.07051 26.9296 5.96938 27.1051C5.91877 27.1929 5.87972 27.2646 5.85181 27.3174C5.83784 27.3438 5.82665 27.3656 5.81818 27.3823L5.8075 27.4036L5.80367 27.4114L5.80213 27.4145L5.80146 27.4159C5.80114 27.4165 5.80084 27.4172 7 28.0001L5.80084 27.4172C5.4789 28.0794 5.7548 28.8773 6.41708 29.1992C7.07755 29.5203 7.87288 29.2468 8.19652 28.5884L8.19728 28.5868L8.20972 28.563C8.22307 28.5377 8.2463 28.4948 8.27975 28.4367C8.34673 28.3205 8.45409 28.1447 8.60439 27.929C8.90598 27.4961 9.37412 26.9119 10.0278 26.3272C11.3223 25.1694 13.3503 24.0001 16.3333 24.0001C19.3163 24.0001 21.3444 25.1694 22.6389 26.3272C23.2925 26.9119 23.7607 27.4961 24.0623 27.929C24.2126 28.1447 24.3199 28.3205 24.3869 28.4367C24.4204 28.4948 24.4436 28.5377 24.457 28.563L24.4694 28.5868L24.4701 28.5884C24.7938 29.2468 25.5891 29.5203 26.2496 29.1992C26.9119 28.8773 27.1878 28.0794 26.8658 27.4172L25.6667 28.0001C26.8658 27.4172 26.8655 27.4165 26.8652 27.4159L26.863 27.4114L26.8592 27.4036L26.8485 27.3823C26.84 27.3656 26.8288 27.3438 26.8149 27.3174C26.7869 27.2646 26.7479 27.1929 26.6973 27.1051C26.5962 26.9296 26.4483 26.6888 26.2502 26.4045C25.8551 25.8374 25.2538 25.0883 24.4167 24.3396C23.2842 23.3267 21.7229 22.319 19.682 21.766ZM16.3333 20.0001C18.5425 20.0001 20.3333 18.2092 20.3333 16.0001C20.3333 13.7909 18.5425 12.0001 16.3333 12.0001C14.1242 12.0001 12.3333 13.7909 12.3333 16.0001C12.3333 18.2092 14.1242 20.0001 16.3333 20.0001Z" />
</Svg>
