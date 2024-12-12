import {Link} from "react-router";

export function Navigation(){
    return (
        <>
            <header>
                <nav>
                    <ul>
                        <Link to="/">DashBoard</Link>
                        <Link to="/add">Add Customer</Link>
                        <Link to="/update">Update Customer</Link>
                        <Link to="/delete">Delete Customer</Link>
                    </ul>
                </nav>
            </header>

        </>
    )
}

