import React from "react";
import { testData } from "../dbData";
import Card from "./Card";

const CardList = (props) => {
    return(
        <div>
            <Card {...testData[0]}/>
            <Card {...testData[1]}/>
            <Card {...testData[2]}/>
        </div>
    );
}

export default CardList;