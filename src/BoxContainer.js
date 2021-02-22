import React from "react";
import Topics from "./Topics";
import Grid from "./Grid";

function BoxContainer() {
    return (
        <div id="box-container">
            <div id="box-1">
                <Topics />
            </div>
            <div id="box-2">
                <Grid />
            </div>
        </div>
    )
}
export default BoxContainer;