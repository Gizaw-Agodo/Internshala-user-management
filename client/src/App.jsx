import "./index.css";
import Table from "./Components/Table";
import QuerySelector from "./Components/QuerySelector";
import { useState } from "react";

function App() {
  const [data,setData] = useState([])
  const [dataType , setDataType] = useState('user')
  return (
    <div>
      <QuerySelector setData= {setData} setDataType= {setDataType}/>
      <Table data = {data} dataType={dataType}/>
    </div>
  );
}

export default App;
