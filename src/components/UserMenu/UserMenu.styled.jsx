import styled from "@emotion/styled";
import { HiLogout } from "react-icons/hi";
import { NavLink } from "react-router-dom";

export const Header = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 10px 20px;
    background-color: #a8a09f;
    border-bottom: 1px solid gray;
    box-shadow: 0 0 8px 0px black;
    height: 50px;
`;

export const UserInfo = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`;

export const NavMenu = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
`;

export const UserEmail = styled.p`
    margin: 0;
    font-weight: 600;
`;

export const StyledNavLink = styled(NavLink)`
    color: black;
    text-decoration: none;
    font-size: 20px;
    line-height: 1.5;

    &.active {
        color: white;
    }
`;

export const LogOutIcon = styled(HiLogout)`
    cursor: pointer;
    font-size: 24px;
`;