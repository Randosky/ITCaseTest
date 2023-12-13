import React from 'react';

const BucketIcon = () => {
    return (
        <svg width="50" height="50" viewBox="0 0 69 70" fill="none" xmlns="http://www.w3.org/2000/svg"
             xmlnsXlink="http://www.w3.org/1999/xlink">
            <rect width="68.0822" height="70" fill="url(#pattern0)"/>
            <defs>
                <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                    <use xlinkHref="#image0_3_12" transform="matrix(0.00200814 0 0 0.00195312 -0.0140845 0)"/>
                </pattern>
                <image id="image0_3_12" width="512" height="512"
                       xlinkHref="data:image/png;base64,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"/>
            </defs>
        </svg>
    );
};

export default BucketIcon;
