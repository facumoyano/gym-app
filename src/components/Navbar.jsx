import React from "react";
import { Link } from "react-router-dom";
import { Stack } from "@mui/material";

const Navbar = () => {
    return (
        <Stack
            direction="row"
            justifyContent="space-around"
            sx={{
                gap: { sm: "122px", xs: "30px" },
                mt: { sm: "32px", xs: "20px" },
                justifyContent: "none",
            }}
            px="20px"
        >
            <Link to="/"></Link>
            <Stack
                direction="row"
                gap="30px"
                fontSize="24px"
                alignItems="flex-end"
            >
                <Link
                    to="/"
                    style={{
                        textDecoration: "none",
                        color: "#3a1212",
                        borderBottom: "3px solid #ff2625",
                    }}
                >
                    Inicio
                </Link>
                <a
                    href="#exercises"
                    style={{ textDecoration: "none", color: "#3a1212" }}
                >
                    Ejercicios
                </a>
            </Stack>
        </Stack>
    );
};

export default Navbar;
