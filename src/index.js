import React from "react";
import ReactDOM from "react-dom";
import dayjs from "dayjs";
import CalendarBoard from "./components/CalendarBoard";
import "dayjs/locale/ja";

dayjs.locale("ja");


const App = () => (
  <div>
    <CalendarBoard />
  </div>
);

ReactDOM.render(<App />, document.getElementById("root"));