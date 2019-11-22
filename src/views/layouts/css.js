/* eslint-disable no-unused-expressions */
import {createGlobalStyle} from "styled-components";

export default () => {
    createGlobalStyle` 
        body {
            background-color: levander;
            color: navy-blue;
            div {
                padding: 4px;
            }

            a {
                padding: 0 10px;
                text-decoration: none;
            }

            a:hover {
                color: blue;
            }
        }
    `;

    return null;
};
