import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "../pages/dashboard/Home.tsx";

export default ()=> (
    <Router>
        <Routes>
            <Route path="/" element={<HomePage/>}></Route>
        </Routes>
    </Router>
)