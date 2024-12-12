import {useContext, useState} from "react";
import {CustomerContext} from "../Components/customerprovider.tsx";
import {Customer} from "../assets/Customer.ts";
import {useNavigate} from "react-router";
export function AddCustomer(){
    const[customer,setCustomer]=useContext(CustomerContext);

    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    function handleSubmit() {
        const newCustomer = new Customer(name, email, phone);
        setCustomer((customer: Customer[]) => [...customer, newCustomer]);
        navigate('/');
    }
    return(
        <>
            <header>
                <h1>Add Customer</h1>
            </header>
            <br/>
            <input type="text" placeholder="Name" onChange={(e)=>setName(e.target.value)} />
            <input type="text" placeholder="Email" onChange={(e)=>setEmail(e.target.value)}/>
            <input type="text" placeholder="Phone" onChange={(e)=> setPhone(e.target.value)} />
            <br/>
            <button onClick={handleSubmit}> Add Customer</button>


            {customer.map((customer: Customer) => (<div key={customer.email}>{customer.name + ' '+ customer.email + ' '+ customer.phone }</div>))}
        </>
    )
}