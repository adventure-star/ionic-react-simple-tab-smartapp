import { Component, useEffect } from "react";
import auth from "../services/authService";

const Logout = () => {

    useEffect(() => {

        auth.logout();

    }, []);

    return null;
}

export default Logout;
