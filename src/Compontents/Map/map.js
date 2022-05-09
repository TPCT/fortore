import React from "react";
import "./Assets/map.css";
import {hide} from "../Utils/animations";
import MainBackButton from "../Utils/MainBackButton";

// const toggle = (hide, show) => {
//     if (hide){
//         let parent_to_hide =
//     }
// }

const Map = ({id, content, next, hidden, back}) => {
    return (
        <section id={id} className="map-container" style={{display: hidden === true ? 'none' : 'flex'}}>
            {/*/!*<canvas className="canvas" width="10000" height="10000"></canvas>*!/*/}
            {/*<div className="background-click" onClick={function(){hide(id, back);}}></div>*/}
            <div className="map-items-container">
                {
                    content.map(function(item, index){
                        return (
                            <div key={index} className="col map-item map-clickable-item" onClick={()=>{hide(id, next ? next[index] : null)}}>
                                <span className="map-item-text">
                                    {item}
                                </span>
                            </div>
                        )
                    })

                }
                {/*<div className="map-down-fade"></div>*/}
            </div>
            <MainBackButton id={id} back={back}></MainBackButton>
        </section>
    )
}

Map.defaultProps = {
    id: "main",
    next: {},
    zoom: 1
}

export default Map;