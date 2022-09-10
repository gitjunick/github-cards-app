import React from "react";
import { testData } from "../dbData";
import Card from "./Card";

const CardList = (props) => {
    return(
        <div>
            {testData.map(profile => <Card {...profile} />)}
        </div>
    );
}

export default CardList;