import React, { useContext, useEffect, useState } from "react";
import { Quiz1Context } from "../context/Quiz1Context";

export default function Dashboard(props) {
  const { dNumber, dCategory } = useContext(Quiz1Context);
  const [dashNo, setDashNo] = dNumber;
  const [dashCategory, setDashCategory] = dCategory;
  
  return (
    <div>
      <p>{`${dashNo} rounds remaining of ${dashCategory}`}</p>
      <p>{`Game Mode: ${props.mode}`}</p>
    </div>
  );
}
