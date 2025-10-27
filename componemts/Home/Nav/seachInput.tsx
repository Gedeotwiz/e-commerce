"use client";

import Input from "antd/es/input/Input";
import { IoIosSearch } from "react-icons/io";

export const SeaRchInput = () => {
    return (
           <Input suffix={<IoIosSearch />} placeholder="Search..." />
    )
}
