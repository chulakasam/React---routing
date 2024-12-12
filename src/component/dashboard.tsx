//import {Link} from "react-router";


import {Customer} from "../assets/Customer.ts";
import {CustomerContext} from "../Components/customerprovider.tsx";
import {useContext} from "react";

export function Dashboard(){
    const [customer, setCustomer] = useContext(CustomerContext);
    return(
        <>

        <br/>
            DashBoard
            {/*<Link to="/add">add customer</Link>*/}
            {/*<Link to="/update">update customer</Link>*/}
            {/*<Link to="/delete">delete customer</Link>*/}
            {customer.map((customer: Customer) => (<div key={customer.email}>{customer.name + ' '+ customer.email + ' '+ customer.phone }</div>))}
        </>
    )

}