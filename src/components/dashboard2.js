import React, { useContext, useEffect, useState } from "react";
import { Quiz2Context } from "../context/Quiz2Context";

export default function Dashboard2(props) {
  const { dNumber2, dCategory2 } = useContext(Quiz2Context);
  const [dashNo2, setDashNo2] = dNumber2;
  const [dashCategory2, setDashCategory2] = dCategory2;
  
  return (
    <div>
      <p>{`${dashNo2} rounds remaining of ${dashCategory2}`}</p>
      
    </div>
  );
}
