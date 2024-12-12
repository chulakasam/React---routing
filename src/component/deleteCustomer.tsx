import {Link} from "react-router";
import {useContext, useState} from "react";
import {CustomerContext} from "../Components/customerprovider.tsx";
import {Customer} from "../assets/Customer.ts";
export function DeleteCustomer() {
    const [deleteEmail, setDeleteEmail] = useState('');
    const[customer,setCustomer]=useContext(CustomerContext);

    function deleteButton(){
        if (deleteEmail) {
            setCustomer((prevCustomers) =>
                prevCustomers.filter((customer) => customer.email !== deleteEmail)
            );
            setDeleteEmail(''); // Clear the delete email input
        } else {
            alert('Please enter an email to delete.');
        }
    }
    return(


        <>
            Delete Customer
            <Link to="/">Go Back</Link>
            <br/>
            <input type="text" placeholder="Email to delete" value={deleteEmail} onChange={(e) => setDeleteEmail(e.target.value)}/>
            <br/>
            <button onClick={deleteButton}>Delete</button>
            {customer.map((customer: Customer) => (<div key={customer.email}>{customer.name + ' '+ customer.email + ' '+ customer.phone }</div>))}
        </>
    )
}
