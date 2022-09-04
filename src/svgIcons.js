import Svg,{Path} from "react-native-svg";
import colors from "tailwindcss/colors";

export const LeftArrow = ({fill}) => <Svg viewBox="0 0 32 32" fill={fill} xmlns="http://www.w3.org/2000/svg">
    <Path fillRule="evenodd" clipRule="evenodd" d="M20.2761 24.2762C19.7554 24.7969 18.9112 24.7969 18.3905 24.2762L11.0572 16.9429C10.5365 16.4222 10.5365 15.578 11.0572 15.0573L18.3905 7.72394C18.9112 7.20324 19.7554 7.20324 20.2761 7.72394C20.7968 8.24464 20.7968 9.08886 20.2761 9.60956L13.8856 16.0001L20.2761 22.3906C20.7968 22.9113 20.7968 23.7555 20.2761 24.2762Z" />
</Svg>

export const RightArrow = ({fill}) => <Svg viewBox="0 0 32 32" fill={fill} xmlns="http://www.w3.org/2000/svg">
    <Path fillRule="evenodd" clipRule="evenodd" d="M11.7239 7.72378C12.2446 7.20308 13.0888 7.20308 13.6095 7.72378L20.9428 15.0571C21.4635 15.5778 21.4635 16.422 20.9428 16.9427L13.6095 24.2761C13.0888 24.7968 12.2446 24.7968 11.7239 24.2761C11.2032 23.7554 11.2032 22.9111 11.7239 22.3904L18.1144 15.9999L11.7239 9.60939C11.2032 9.0887 11.2032 8.24448 11.7239 7.72378Z" />
</Svg>

export const Close = ({fill}) => <Svg viewBox="0 0 32 32" fill={fill} xmlns="http://www.w3.org/2000/svg">
    <Path d="M21.6569 23.5424C22.1776 24.0631 23.0218 24.0631 23.5425 23.5424C24.0632 23.0217 24.0632 22.1774 23.5425 21.6567L17.8857 15.9999L23.5425 10.3431C24.0632 9.82237 24.0632 8.97815 23.5425 8.45745C23.0218 7.93675 22.1776 7.93675 21.6569 8.45745L16.0001 14.1143L10.3432 8.45742C9.8225 7.93672 8.97828 7.93672 8.45758 8.45742C7.93688 8.97812 7.93688 9.82234 8.45758 10.343L14.1144 15.9999L8.45758 21.6568C7.93688 22.1775 7.93688 23.0217 8.45758 23.5424C8.97828 24.0631 9.8225 24.0631 10.3432 23.5424L16.0001 17.8855L21.6569 23.5424Z" />
</Svg>

export const Delete = ({fill}) => <Svg viewBox="0 0 32 32" fill={fill} xmlns="http://www.w3.org/2000/svg">
    <Path d="M13.3333 24.0001C12.597 24.0001 12 23.4031 12 22.6667L12 13.3334C12 12.597 12.597 12.0001 13.3333 12.0001C14.0697 12.0001 14.6667 12.597 14.6667 13.3334L14.6667 22.6667C14.6667 23.4031 14.0697 24.0001 13.3333 24.0001Z" />
    <Path d="M17.3333 22.6667C17.3333 23.4031 17.9303 24.0001 18.6667 24.0001C19.403 24.0001 20 23.4031 20 22.6667V13.3334C20 12.597 19.403 12.0001 18.6667 12.0001C17.9303 12.0001 17.3333 12.597 17.3333 13.3334V22.6667Z" />
    <Path fillRule="evenodd" clipRule="evenodd" d="M10.8706 4.78439L9.86667 6.66675H5.33333C4.59695 6.66675 4 7.2637 4 8.00008C4 8.73646 4.59695 9.33342 5.33333 9.33342H5.40884L6.50226 28.0777C6.54339 28.7827 7.12711 29.3334 7.83333 29.3334H24.1667C24.8729 29.3334 25.4566 28.7827 25.4977 28.0777L26.5912 9.33342H26.6667C27.403 9.33342 28 8.73646 28 8.00008C28 7.2637 27.403 6.66675 26.6667 6.66675H22.1333L21.1294 4.7844C20.4342 3.48094 19.0772 2.66675 17.6 2.66675H14.4C12.9228 2.66675 11.5658 3.48094 10.8706 4.78439ZM14.4 5.33341C13.9076 5.33341 13.4553 5.60481 13.2235 6.0393L12.8889 6.66675H19.1111L18.7765 6.0393C18.5447 5.60481 18.0924 5.33341 17.6 5.33341H14.4ZM23.92 9.33342H8.08004L9.09116 26.6667H22.9088L23.92 9.33342Z" />
</Svg>

export const Reload = ({fill}) => <Svg viewBox="0 0 32 32" fill={fill} xmlns="http://www.w3.org/2000/svg">
    <Path d="M21.9298 4.20207C21.8184 3.47417 22.3181 2.79374 23.046 2.68229C23.7739 2.57084 24.4543 3.07057 24.5658 3.79847L25.3824 9.13159C25.487 9.8153 25.0515 10.4655 24.3794 10.629L18.8964 11.9623C18.1808 12.1364 17.4597 11.6974 17.2857 10.9818C17.1117 10.2663 17.5507 9.5452 18.2663 9.3712L20.8545 8.7418C17.2624 6.12767 12.3138 6.40168 9.21025 9.50519C5.76379 12.9517 5.80673 18.6736 9.41939 22.2862C13.0321 25.8989 18.754 25.9418 22.2004 22.4954C22.7211 21.9747 23.5654 21.9747 24.0861 22.4954C24.6068 23.0161 24.6068 23.8603 24.0861 24.381C19.5479 28.9192 12.1368 28.7749 7.53378 24.1718C2.93077 19.5688 2.78643 12.1578 7.32463 7.61957C11.3682 3.57602 17.6925 3.24986 22.279 6.48277L21.9298 4.20207Z" />
</Svg>

export const Edit = ({fill}) => <Svg viewBox="0 0 32 32" fill={fill} xmlns="http://www.w3.org/2000/svg">
    <Path fillRule="evenodd" clipRule="evenodd" d="M21.7516 12.6471L19.866 10.7615L8.33521 22.2923L7.42877 25.0843L10.2208 24.1779L21.7516 12.6471ZM11.6535 26.5165L3.27734 29.2358L5.99665 20.8596L19.866 6.99028L25.5228 12.6471L11.6535 26.5165Z" />
    <Path fillRule="evenodd" clipRule="evenodd" d="M27.4085 3.21904C26.3671 2.17764 24.6786 2.17764 23.6373 3.21904L21.7516 5.10465L27.4085 10.7615L29.2941 8.87589C30.3355 7.83449 30.3355 6.14605 29.2941 5.10465L27.4085 3.21904Z" />
</Svg>

export const Add = ({fill}) => <Svg viewBox="0 0 32 32" fill={fill} xmlns="http://www.w3.org/2000/svg">
    <Path d="M17.3333 6.66659C17.3333 5.93021 16.7364 5.33325 16 5.33325C15.2636 5.33325 14.6667 5.93021 14.6667 6.66659V14.6666H6.66667C5.93029 14.6666 5.33334 15.2635 5.33334 15.9999C5.33334 16.7363 5.93029 17.3333 6.66667 17.3333H14.6667V25.3333C14.6667 26.0696 15.2636 26.6666 16 26.6666C16.7364 26.6666 17.3333 26.0696 17.3333 25.3333V17.3333H25.3333C26.0697 17.3333 26.6667 16.7363 26.6667 15.9999C26.6667 15.2635 26.0697 14.6666 25.3333 14.6666H17.3333V6.66659Z" />
</Svg>

export const Attachment = ({fill}) => <Svg fill={fill} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
    <Path d="M21.0636 2.82284C21.2728 2.82284 21.4842 2.83366 21.6989 2.85423C23.2433 3.00252 24.7274 3.6877 25.7725 4.73224C26.8198 5.77787 27.4723 7.2543 27.5619 8.78269C27.6578 10.4215 27.1218 11.9185 26.053 12.9966L16.4334 22.6486C14.9849 24.1088 12.6207 24.1131 11.1636 22.6573C10.4582 21.9515 10.0688 21.0131 10.0667 20.014C10.0645 19.0149 10.4506 18.0743 11.1528 17.3674L17.8873 10.7148C18.4298 10.1758 19.3056 10.1855 19.8394 10.73C20.3744 11.2755 20.3679 12.1523 19.8243 12.6892L13.0996 19.3321C12.927 19.5063 12.8267 19.7499 12.8278 20.0086C12.8278 20.2673 12.9292 20.5108 13.1114 20.6937C13.2948 20.8767 13.5375 20.9763 13.7952 20.9763L13.7963 20.9763C14.0541 20.9763 14.2968 20.8756 14.479 20.6916L24.0986 11.0396C25.1588 9.97012 25.0294 7.89943 23.8247 6.69577C23.2326 6.10476 22.3395 5.69994 21.4346 5.61226C20.9255 5.56571 19.9678 5.5787 19.3185 6.23249L8.50063 17.0059C7.57631 17.9357 7.11253 19.2779 7.19882 20.7771C7.2851 22.2665 7.91066 23.6975 8.91587 24.702C11.0331 26.8171 14.6947 26.9978 16.5984 25.0787L24.3866 17.2311C24.9248 16.6877 25.7984 16.6877 26.3388 17.2267C26.8791 17.7669 26.8813 18.6436 26.3431 19.1859L18.5549 27.0335C15.5802 30.034 10.1659 29.8598 6.96801 26.6655C5.48716 25.1858 4.56715 23.0978 4.44204 20.9373C4.30938 18.6393 5.05789 16.547 6.54953 15.0445L17.3674 4.27113C18.3036 3.32833 19.6 2.82284 21.0636 2.82284Z" />
</Svg>

export const Logout = ({fill}) => <Svg fill="none" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
    <Path d="M9.5 10.5V12.5C9.5 12.7652 9.39464 13.0196 9.20711 13.2071C9.01957 13.3946 8.76522 13.5 8.5 13.5H1.5C1.23478 13.5 0.98043 13.3946 0.792893 13.2071C0.605357 13.0196 0.5 12.7652 0.5 12.5V1.5C0.5 1.23478 0.605357 0.98043 0.792893 0.792893C0.98043 0.605357 1.23478 0.5 1.5 0.5H8.5C8.76522 0.5 9.01957 0.605357 9.20711 0.792893C9.39464 0.98043 9.5 1.23478 9.5 1.5V3.5" stroke={fill} strokeLinecap="round" strokeLinejoin="round" />
    <Path d="M6.5 7H13.5" stroke={fill} strokeLinecap="round" strokeLinejoin="round"  fill={fill}/>
    <Path d="M11.5 5L13.5 7L11.5 9" stroke={fill} strokeLinecap="round" strokeLinejoin="round"  fill={fill}/>
</Svg>

export const User = ({fill}) => <Svg fill={fill} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
    <Path d="M16.3333 5.33341C10.4493 5.33341 5.66667 10.1321 5.66667 16.0672C5.66667 17.7503 6.05069 19.3392 6.73391 20.7534C7.05423 21.4165 6.77639 22.2137 6.11333 22.534C5.45027 22.8543 4.65308 22.5765 4.33276 21.9134C3.4784 20.1449 3 18.1602 3 16.0672C3 8.67335 8.96254 2.66675 16.3333 2.66675C23.7041 2.66675 29.6667 8.67335 29.6667 16.0672C29.6667 18.1602 29.1883 20.1449 28.3339 21.9134C28.0136 22.5765 27.2164 22.8543 26.5533 22.534C25.8903 22.2137 25.6124 21.4165 25.9328 20.7534C26.616 19.3392 27 17.7503 27 16.0672C27 10.1321 22.2174 5.33341 16.3333 5.33341Z" />
    <Path fillRule="evenodd" clipRule="evenodd" d="M19.682 21.766C21.6662 20.6111 23 18.4614 23 16.0001C23 12.3182 20.0152 9.33342 16.3333 9.33342C12.6514 9.33342 9.66667 12.3182 9.66667 16.0001C9.66667 18.4614 11.0005 20.6111 12.9847 21.766C10.9438 22.319 9.38247 23.3267 8.25001 24.3396C7.41292 25.0883 6.81161 25.8374 6.41644 26.4045C6.21837 26.6888 6.07051 26.9296 5.96938 27.1051C5.91877 27.1929 5.87972 27.2646 5.85181 27.3174C5.83784 27.3438 5.82665 27.3656 5.81818 27.3823L5.8075 27.4036L5.80367 27.4114L5.80213 27.4145L5.80146 27.4159C5.80114 27.4165 5.80084 27.4172 7 28.0001L5.80084 27.4172C5.4789 28.0794 5.7548 28.8773 6.41708 29.1992C7.07755 29.5203 7.87288 29.2468 8.19652 28.5884L8.19728 28.5868L8.20972 28.563C8.22307 28.5377 8.2463 28.4948 8.27975 28.4367C8.34673 28.3205 8.45409 28.1447 8.60439 27.929C8.90598 27.4961 9.37412 26.9119 10.0278 26.3272C11.3223 25.1694 13.3503 24.0001 16.3333 24.0001C19.3163 24.0001 21.3444 25.1694 22.6389 26.3272C23.2925 26.9119 23.7607 27.4961 24.0623 27.929C24.2126 28.1447 24.3199 28.3205 24.3869 28.4367C24.4204 28.4948 24.4436 28.5377 24.457 28.563L24.4694 28.5868L24.4701 28.5884C24.7938 29.2468 25.5891 29.5203 26.2496 29.1992C26.9119 28.8773 27.1878 28.0794 26.8658 27.4172L25.6667 28.0001C26.8658 27.4172 26.8655 27.4165 26.8652 27.4159L26.863 27.4114L26.8592 27.4036L26.8485 27.3823C26.84 27.3656 26.8288 27.3438 26.8149 27.3174C26.7869 27.2646 26.7479 27.1929 26.6973 27.1051C26.5962 26.9296 26.4483 26.6888 26.2502 26.4045C25.8551 25.8374 25.2538 25.0883 24.4167 24.3396C23.2842 23.3267 21.7229 22.319 19.682 21.766ZM16.3333 20.0001C18.5425 20.0001 20.3333 18.2092 20.3333 16.0001C20.3333 13.7909 18.5425 12.0001 16.3333 12.0001C14.1242 12.0001 12.3333 13.7909 12.3333 16.0001C12.3333 18.2092 14.1242 20.0001 16.3333 20.0001Z" />
</Svg>

export const Info = ({fill}) => <Svg fill={fill} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
<Path fillRule="evenodd" clipRule="evenodd" d="M16 29.3334C23.3638 29.3334 29.3333 23.3639 29.3333 16.0001C29.3333 8.63628 23.3638 2.66675 16 2.66675C8.63621 2.66675 2.66667 8.63628 2.66667 16.0001C2.66667 23.3639 8.63621 29.3334 16 29.3334ZM16 26.6667C21.891 26.6667 26.6667 21.8911 26.6667 16.0001C26.6667 10.109 21.891 5.33341 16 5.33341C10.109 5.33341 5.33334 10.109 5.33334 16.0001C5.33334 21.8911 10.109 26.6667 16 26.6667Z" fill={fill}/>
<Path d="M16 13.3334C16.7364 13.3334 17.3333 13.9304 17.3333 14.6667V22.6667C17.3333 23.4031 16.7364 24.0001 16 24.0001C15.2636 24.0001 14.6667 23.4031 14.6667 22.6667V14.6667C14.6667 13.9304 15.2636 13.3334 16 13.3334Z" fill={fill}/>
<Path d="M16 10.6667C16.7364 10.6667 17.3333 10.0698 17.3333 9.33342C17.3333 8.59704 16.7364 8.00008 16 8.00008C15.2636 8.00008 14.6667 8.59704 14.6667 9.33342C14.6667 10.0698 15.2636 10.6667 16 10.6667Z" fill={fill}/>
</Svg>

export const Home = ({fill}) => <Svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
<Path fillRule="evenodd" clipRule="evenodd" d="M47.2319 9.38571C48.8106 7.98243 51.1895 7.98243 52.7682 9.38571L90.2682 42.719C91.9882 44.2479 92.1431 46.8815 90.6143 48.6014C89.0854 50.3214 86.4518 50.4763 84.7319 48.9475L83.3334 47.7044V83.3333C83.3334 87.9356 79.6024 91.6666 75.0001 91.6666H25.0001C20.3977 91.6666 16.6667 87.9356 16.6667 83.3333V47.7044L15.2682 48.9475C13.5483 50.4763 10.9147 50.3214 9.38585 48.6014C7.85702 46.8815 8.01194 44.2479 9.73187 42.719L47.2319 9.38571ZM25.0001 40.297V83.3333H37.5001V54.1666C37.5001 49.5642 41.231 45.8333 45.8334 45.8333H54.1667C58.7691 45.8333 62.5001 49.5642 62.5001 54.1666V83.3333H75.0001V40.297L50.0001 18.0747L25.0001 40.297ZM54.1667 83.3333V54.1666H45.8334V83.3333H54.1667Z" fill={fill}/>
</Svg>

export const Document = ({fill}) => <Svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
<Path fillRule="evenodd" clipRule="evenodd" d="M20.8333 8.33325C16.231 8.33325 12.5 12.0642 12.5 16.6666V83.3333C12.5 87.9356 16.231 91.6666 20.8333 91.6666H79.1667C83.769 91.6666 87.5 87.9356 87.5 83.3333V16.6666C87.5 12.0642 83.769 8.33325 79.1667 8.33325H20.8333ZM79.1667 16.6666H20.8333L20.8333 83.3333H56.509L79.1667 58.7875V16.6666ZM79.1667 83.3333H67.8499L79.1667 71.0735V83.3333Z" fill={fill}/>
<Path d="M33.3333 24.9999C31.0321 24.9999 29.1667 26.8654 29.1667 29.1666C29.1667 31.4678 31.0321 33.3333 33.3333 33.3333H66.6667C68.9679 33.3333 70.8333 31.4678 70.8333 29.1666C70.8333 26.8654 68.9679 24.9999 66.6667 24.9999H33.3333Z" fill={fill}/>
<Path d="M29.1667 45.8333C29.1667 43.5321 31.0321 41.6666 33.3333 41.6666H66.6667C68.9679 41.6666 70.8333 43.5321 70.8333 45.8333C70.8333 48.1344 68.9679 49.9999 66.6667 49.9999H33.3333C31.0321 49.9999 29.1667 48.1344 29.1667 45.8333Z" fill={fill}/>
<Path d="M33.3333 58.3333C31.0321 58.3333 29.1667 60.1987 29.1667 62.4999C29.1667 64.8011 31.0321 66.6666 33.3333 66.6666H50C52.3012 66.6666 54.1667 64.8011 54.1667 62.4999C54.1667 60.1987 52.3012 58.3333 50 58.3333H33.3333Z" fill={fill}/>
</Svg>

export const Star =  ({fill}) => <Svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
<Path fillRule="evenodd" clipRule="evenodd" d="M50 8.33337C53.6103 8.33337 56.8099 10.658 57.9255 14.0916L64.4738 34.2452H85.6647C89.2749 34.2452 92.4745 36.5699 93.5901 40.0034C94.7058 43.437 93.4836 47.1983 90.5629 49.3204L73.4191 61.776L79.9675 81.9297C81.0831 85.3632 79.8609 89.1246 76.9402 91.2467C74.0195 93.3687 70.0645 93.3687 67.1438 91.2467L50 78.791L32.8563 91.2467C29.9356 93.3687 25.9806 93.3687 23.0599 91.2467C20.1392 89.1246 18.917 85.3632 20.0326 81.9297L26.581 61.776L9.43722 49.3204C6.51649 47.1984 5.29434 43.437 6.40996 40.0034C7.52558 36.5699 10.7252 34.2452 14.3354 34.2452H35.5262L42.0746 14.0916C43.1902 10.658 46.3898 8.33337 50 8.33337ZM41.5808 42.5786H14.3354L36.3774 58.593L27.9581 84.5048L50 68.4904L72.042 84.5048L63.6227 58.593L85.6647 42.5786H58.4193L50 16.6667L41.5808 42.5786Z" fill={fill}/>
</Svg>

export const Calenlar = ({fill}) => <Svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
<Path d="M33.3333 54.1667C35.6345 54.1667 37.5 52.3012 37.5 50C37.5 47.6989 35.6345 45.8334 33.3333 45.8334C31.0322 45.8334 29.1667 47.6989 29.1667 50C29.1667 52.3012 31.0322 54.1667 33.3333 54.1667Z" fill={fill}/>
<Path d="M54.1667 50C54.1667 52.3012 52.3012 54.1667 50 54.1667C47.6988 54.1667 45.8333 52.3012 45.8333 50C45.8333 47.6989 47.6988 45.8334 50 45.8334C52.3012 45.8334 54.1667 47.6989 54.1667 50Z" fill={fill}/>
<Path d="M66.6667 54.1667C68.9679 54.1667 70.8333 52.3012 70.8333 50C70.8333 47.6989 68.9679 45.8334 66.6667 45.8334C64.3655 45.8334 62.5 47.6989 62.5 50C62.5 52.3012 64.3655 54.1667 66.6667 54.1667Z" fill={fill}/>
<Path d="M37.5 66.6667C37.5 68.9679 35.6345 70.8334 33.3333 70.8334C31.0322 70.8334 29.1667 68.9679 29.1667 66.6667C29.1667 64.3655 31.0322 62.5 33.3333 62.5C35.6345 62.5 37.5 64.3655 37.5 66.6667Z" fill={fill}/>
<Path d="M50 70.8334C52.3012 70.8334 54.1667 68.9679 54.1667 66.6667C54.1667 64.3655 52.3012 62.5 50 62.5C47.6988 62.5 45.8333 64.3655 45.8333 66.6667C45.8333 68.9679 47.6988 70.8334 50 70.8334Z" fill={fill}/>
<Path fillRule="evenodd" clipRule="evenodd" d="M33.3333 12.5C33.3333 10.1989 31.4679 8.33337 29.1667 8.33337C26.8655 8.33337 25 10.1989 25 12.5H16.6667C12.0643 12.5 8.33334 16.231 8.33334 20.8334V79.1667C8.33334 83.7691 12.0643 87.5 16.6667 87.5H83.3334C87.9357 87.5 91.6667 83.7691 91.6667 79.1667V20.8334C91.6667 16.231 87.9357 12.5 83.3334 12.5H75C75 10.1989 73.1345 8.33337 70.8333 8.33337C68.5322 8.33337 66.6667 10.1989 66.6667 12.5H33.3333ZM16.6667 29.1667V20.8334H83.3334V29.1667H16.6667ZM16.6667 37.5V79.1667H59.0483L83.3334 54.8817V37.5H16.6667ZM83.3334 66.6668L70.8335 79.1667H83.3334V66.6668Z" fill={fill}/>
</Svg>

export const Clock = ({fill}) => <Svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<Path d="M17.3333 9.33342C17.3333 8.59704 16.7364 8.00008 16 8.00008C15.2636 8.00008 14.6667 8.59704 14.6667 9.33342V16.0001C14.6667 16.7365 15.2636 17.3334 16 17.3334H21.3333C22.0697 17.3334 22.6667 16.7365 22.6667 16.0001C22.6667 15.2637 22.0697 14.6667 21.3333 14.6667H17.3333V9.33342Z" fill={fill}/>
<Path fillRule="evenodd" clipRule="evenodd" d="M29.3333 16.0001C29.3333 23.3639 23.3638 29.3334 16 29.3334C8.63619 29.3334 2.66666 23.3639 2.66666 16.0001C2.66666 8.63628 8.63619 2.66675 16 2.66675C23.3638 2.66675 29.3333 8.63628 29.3333 16.0001ZM26.6667 16.0001C26.6667 21.8911 21.891 26.6667 16 26.6667C10.109 26.6667 5.33332 21.8911 5.33332 16.0001C5.33332 10.109 10.109 5.33341 16 5.33341C21.891 5.33341 26.6667 10.109 26.6667 16.0001Z" fill={fill}/>
</Svg>

export const Contact =  ({fill}) => <Svg viewBox="0 0 101 101" fill="none" xmlns="http://www.w3.org/2000/svg">
<Path d="M50.5 58.1923C61.1209 58.1923 69.7308 49.5823 69.7308 38.9615C69.7308 28.3406 61.1209 19.7307 50.5 19.7307C39.8791 19.7307 31.2692 28.3406 31.2692 38.9615C31.2692 49.5823 39.8791 58.1923 50.5 58.1923Z" stroke="#000001" strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M75.9611 79.3461C68.9323 73.1379 59.8775 69.7117 50.4996 69.7117C41.1216 69.7117 32.0668 73.1379 25.038 79.3461" stroke="#000001" strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M100.5 77.4231V92.8077C100.5 94.8478 99.6896 96.8044 98.247 98.247C96.8044 99.6896 94.8478 100.5 92.8077 100.5H77.4231" stroke="#000001" strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M77.4231 0.5H92.8077C94.8478 0.5 96.8044 1.31044 98.247 2.75302C99.6896 4.19561 100.5 6.15218 100.5 8.19231V23.5769" stroke="#000001" strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M0.5 23.5769V8.19231C0.5 6.15218 1.31044 4.19561 2.75302 2.75302C4.19561 1.31044 6.15218 0.5 8.19231 0.5H23.5769" stroke="#000001" strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M23.5769 100.5H8.19231C6.15218 100.5 4.19561 99.6896 2.75302 98.247C1.31044 96.8044 0.5 94.8478 0.5 92.8077V77.4231" stroke="#000001" strokeLinecap="round" strokeLinejoin="round"/>
</Svg>


export const Mail = ({fill}) => <Svg viewBox="0 0 102 103" fill="none" xmlns="http://www.w3.org/2000/svg'">
<Path d="M41.3649 82.32L58.1306 99.0088C59.1593 100.063 60.4454 100.831 61.8617 101.235C63.278 101.64 64.7754 101.668 66.2058 101.316C67.6451 100.981 68.9742 100.282 70.0651 99.2855C71.1561 98.2888 71.9723 97.0282 72.4353 95.6249L99.9679 13.1039C100.543 11.5577 100.661 9.87898 100.31 8.26737C99.9579 6.65576 99.151 5.17899 97.9846 4.0126C96.8182 2.84622 95.3414 2.03927 93.7298 1.68769C92.1182 1.3361 90.4395 1.45465 88.8933 2.02926L6.37228 29.5619C4.92066 30.0577 3.62779 30.9322 2.62728 32.095C1.62677 33.2577 0.954923 34.6666 0.681169 36.1759C0.398607 37.5486 0.46151 38.97 0.864226 40.3124C1.26694 41.6548 1.99685 42.8761 2.98838 43.8666L24.0609 64.9391L23.3687 91.6258L41.3649 82.32Z" stroke="#000001" strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M97.5072 3.72119L24.0611 64.9391" stroke="#000001" strokeLinecap="round" strokeLinejoin="round"/>
</Svg>


export const Phone = ({fill}) => <Svg viewBox="0 0 102 101" fill="none" xmlns="http://www.w3.org/2000/svg'">
<Path d="M64.9689 96.4382C69.6961 99.4879 75.3293 100.817 80.9212 100.202C86.5131 99.5867 91.7226 97.065 95.6739 93.0606L99.1283 89.6831C100.643 88.134 101.491 86.0538 101.491 83.8875C101.491 81.7212 100.643 79.6409 99.1283 78.0919L84.4666 63.5838C82.9306 62.0742 80.8631 61.2283 78.7094 61.2283C76.5557 61.2283 74.4882 62.0742 72.9522 63.5838C71.4032 65.0982 69.3229 65.9461 67.1566 65.9461C64.9903 65.9461 62.9101 65.0982 61.361 63.5838L38.3323 40.555C37.564 39.7979 36.954 38.8957 36.5376 37.9007C36.1212 36.9058 35.9068 35.838 35.9068 34.7594C35.9068 33.6808 36.1212 32.613 36.5376 31.6181C36.954 30.6231 37.564 29.7209 38.3323 28.9638C39.8418 27.4278 40.6877 25.3603 40.6877 23.2066C40.6877 21.053 39.8418 18.9855 38.3323 17.4494L23.7474 2.86454C22.1984 1.35013 20.1181 0.502197 17.9518 0.502197C15.7855 0.502197 13.7052 1.35013 12.1562 2.86454L8.77866 6.31886C4.7743 10.2702 2.25257 15.4797 1.63746 21.0716C1.02235 26.6635 2.35139 32.2967 5.4011 37.0239C21.2913 60.4421 41.5098 80.6084 64.9689 96.4382Z" stroke="#000001" strokeLinecap="round" strokeLinejoin="round"/>
</Svg>

export const Done = ({fill}) => <Svg viewBox="0 0 106 106" fill="none" xmlns="http://www.w3.org/2000/svg">
<Path d="M29.9231 60.6923L45.6923 73.3077C46.1158 73.6565 46.6117 73.9065 47.144 74.0395C47.6762 74.1726 48.2314 74.1854 48.7692 74.0769C49.3122 73.9751 49.8268 73.7575 50.2781 73.4389C50.7295 73.1203 51.1068 72.7083 51.3846 72.2308L76.0769 29.9231" stroke={fill} strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M53 103C80.6142 103 103 80.6142 103 53C103 25.3858 80.6142 3 53 3C25.3858 3 3 25.3858 3 53C3 80.6142 25.3858 103 53 103Z" stroke={fill} strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
</Svg>

export const Meeting = ({fill}) => <Svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
<Path d="M50.0002 49.9999C50.0002 52.3011 51.8656 54.1666 54.1668 54.1666C56.468 54.1666 58.3335 52.3011 58.3335 49.9999C58.3335 47.6987 56.468 45.8333 54.1668 45.8333C51.8656 45.8333 50.0002 47.6987 50.0002 49.9999Z" fill={fill}/>
<Path d="M37.5002 54.1666C35.199 54.1666 33.3335 52.3011 33.3335 49.9999C33.3335 47.6987 35.199 45.8333 37.5002 45.8333C39.8014 45.8333 41.6668 47.6987 41.6668 49.9999C41.6668 52.3011 39.8014 54.1666 37.5002 54.1666Z" fill={fill}/>
<Path d="M66.6668 49.9999C66.6668 52.3011 68.5323 54.1666 70.8335 54.1666C73.1347 54.1666 75.0002 52.3011 75.0002 49.9999C75.0002 47.6987 73.1347 45.8333 70.8335 45.8333C68.5323 45.8333 66.6668 47.6987 66.6668 49.9999Z" fill={fill}/>
<Path fillRule="evenodd" clipRule="evenodd" d="M83.3335 20.8333C87.9359 20.8333 91.6668 24.5642 91.6668 29.1666V70.8333C91.6668 75.4356 87.9359 79.1666 83.3335 79.1666L25.9806 79.1666C21.3782 79.1666 17.6472 75.4356 17.6472 70.8333L17.6472 65.3119C17.6472 62.8672 16.5737 60.5458 14.711 58.9624L11.6368 56.3494C7.72181 53.0217 7.72181 46.9782 11.6368 43.6504L14.711 41.0374C16.5737 39.4541 17.6472 37.1327 17.6472 34.6879L17.6472 29.1666C17.6472 24.5642 21.3782 20.8333 25.9806 20.8333L83.3335 20.8333ZM83.3335 29.1666V70.8333L25.9806 70.8333V65.3119C25.9806 60.4225 23.8335 55.7796 20.108 52.6129L17.0339 49.9999L20.108 47.3869C23.8335 44.2202 25.9806 39.5774 25.9806 34.6879V29.1666L83.3335 29.1666Z" fill={fill}/>
</Svg>
 
 
 export const LocationIcon = ({fill}) => <Svg viewBox="0 0 101 100" fill="none" xmlns="http://www.w3.org/2000/svg">
 <Path fillRule="evenodd" clipRule="evenodd" d="M62.8334 37.4999C62.8334 44.4035 57.2369 49.9999 50.3334 49.9999C43.4298 49.9999 37.8334 44.4035 37.8334 37.4999C37.8334 30.5964 43.4298 24.9999 50.3334 24.9999C57.2369 24.9999 62.8334 30.5964 62.8334 37.4999ZM54.5001 37.4999C54.5001 39.8011 52.6346 41.6666 50.3334 41.6666C48.0322 41.6666 46.1667 39.8011 46.1667 37.4999C46.1667 35.1987 48.0322 33.3333 50.3334 33.3333C52.6346 33.3333 54.5001 35.1987 54.5001 37.4999Z" fill={fill}/>
 <Path fillRule="evenodd" clipRule="evenodd" d="M79.5001 37.4999C79.5001 52.6297 64.1174 74.352 55.6946 85.1119C52.5195 89.1682 50.3334 91.6666 50.3334 91.6666C50.3334 91.6666 48.1473 89.1682 44.9721 85.1119C36.5494 74.352 21.1667 52.6297 21.1667 37.4999C21.1667 21.3916 34.2251 8.33325 50.3334 8.33325C66.4417 8.33325 79.5001 21.3916 79.5001 37.4999ZM71.1667 37.4999C71.1667 40.9737 69.8904 45.6931 67.348 51.3226C64.8673 56.8157 61.4848 62.5205 57.983 67.7733C55.3103 71.7823 52.628 75.439 50.3334 78.4267C48.0388 75.439 45.3565 71.7823 42.6838 67.7733C39.182 62.5205 35.7995 56.8157 33.3188 51.3226C30.7764 45.6931 29.5001 40.9737 29.5001 37.4999C29.5001 25.994 38.8275 16.6666 50.3334 16.6666C61.8393 16.6666 71.1667 25.994 71.1667 37.4999Z" fill={fill}/>
 </Svg>
 
 export const DownArrow = ({fill}) => <Svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
 <Path fillRule="evenodd" clipRule="evenodd" d="M24.2761 11.7238C24.7968 12.2445 24.7968 13.0887 24.2761 13.6094L16.9428 20.9427C16.4221 21.4634 15.5779 21.4634 15.0572 20.9427L7.72386 13.6094C7.20316 13.0887 7.20317 12.2445 7.72386 11.7238C8.24456 11.2031 9.08878 11.2031 9.60948 11.7238L16 18.1143L22.3905 11.7238C22.9112 11.2031 23.7554 11.2031 24.2761 11.7238Z" fill={fill}/>
 </Svg>
 