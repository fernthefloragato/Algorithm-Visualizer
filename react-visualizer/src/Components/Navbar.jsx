import { Link } from "react-router-dom"
import { Button } from "./Button"

export function Navbar() {
    return (
        <div className="navbar">
            <Link to="/">
                <Button text={"Home"} color={"Gray"} width={"200px"} borderRadius={"20px"}/>
            </Link>
            <Link to="/page1">
                <Button text={"Page 1"} color={"Gray"} width={"200px"} borderRadius={"20px"}/>
            </Link>
            <Link to="/page2">
                <Button text={"Page 2"} color={"Gray"} width={"200px"} borderRadius={"20px"}/>
            </Link>
        </div>
    )
}