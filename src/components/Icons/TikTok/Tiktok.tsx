import React from "react";

export interface Props {
    class?: String;
}

const TiktokSVG = ({...props }: Props) => {

    return (
        <svg
        aria-hidden="true"
        focusable="false"
        data-icon="tiktok"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 2859 3333"
        className={"social--icons tiktok--svg " + props.class}
    >
        <path
            fill="currentColor"
            d="M2081 0c55 473 319 755 778 785v532c-266 26-499-61-770-225v995c0 1264-1378 1659-1932 753-356-583-138-1606 1004-1647v561c-87 14-180 36-265 65-254 86-398 247-358 531 77 544 1075 705 992-358V1h551z"
        ></path>
    </svg>
    );
};

export default TiktokSVG;