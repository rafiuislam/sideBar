import React, { useContext } from "react";
import { FaBars } from "react-icons/fa";
import { useGlobalContext } from "./context";

const Home = () => {
    const info = useGlobalContext();
    console.log(info);
    return (
        <main>
            <button className="sidebar-toggle">
                <FaBars />
            </button>
            <button className="btn">Show Modal</button>
        </main>
    );
};

export default Home;
