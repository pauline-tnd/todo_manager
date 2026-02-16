import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function MainLayout() {
    const navigate = useNavigate();
    const [currentPage, setCurrentPage] = useState("todo");

    const handleInvalid = (e) => {
        e.preventDefault();
    }

    return (
        <div className="">
            Add new Task

            Status

            {/* Components */}
            List 

            Filter

            Settings
        </div>
    );
}