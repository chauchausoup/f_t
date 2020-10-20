import React, { useEffect, useState } from "react";
import axios from "axios";
const API_ENDPOINT = `https://opentdb.com/api.php?amount=5&category=18&difficulty=easy&type=multiple`;

export default function AppTest() {
  const [datas, setDatas] = useState({ hits: [] });
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(API_ENDPOINT);
      setDatas(result.data);
    };
    fetchData();
  }, []);

  useEffect(() => {
    console.log(datas);
  }, [datas]);

return (
        <div>
            HELLO
        </div>
)}


