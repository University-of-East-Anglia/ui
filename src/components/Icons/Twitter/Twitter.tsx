import React from "react";

export interface Props {
    class: string;
}

const TwitterSVG = (props: any) => {
    return (
        <svg
            aria-hidden="true"
            focusable="false"
            data-icon="twitter"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 1227"
            className={"social--icons twitter--svg " + props.class}
        >
            <path d="m706.64,528.85L1116.76,52.12h-97.19l-356.11,413.94L379.05,52.12H51l430.1,625.95L51,1178h97.19l376.06-437.14,300.37,437.14h328.05l-446.05-649.15h.02Zm-133.12,154.73l-43.58-62.33L183.21,125.28h149.28l279.82,400.26,43.58,62.33,363.73,520.28h-149.28l-296.82-424.55v-.02Z"/>
        </svg>
    );
};

export default TwitterSVG;

