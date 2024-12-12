import {useContext, useState} from "react";
import {CustomerContext} from "../Components/customerprovider.tsx";
import {Link} from "react-router";


interface Customer {
    name: string;
    email: string;
    phone: string;
}

export function UpdateCustomer() {
    const [customers, setCustomers] = useContext(CustomerContext);
    const [searchEmail, setSearchEmail] = useState('');
    const [foundCustomer, setFoundCustomer] = useState<Customer | null>(null);
    const [newName, setNewName] = useState('');
    const [newPhone, setNewPhone] = useState('');

    // Search for a customer by email
    function searchCustomer() {
        const customer = customers.find((c: Customer) => c.email === searchEmail);
        if (customer) {
            setFoundCustomer(customer);
            setNewName(customer.name); // Pre-fill the current details
            setNewPhone(customer.phone);
        } else {
            alert('Customer not found.');
            setFoundCustomer(null);
        }
    }

    // Update customer details
    function updateCustomer() {
        if (foundCustomer) {
            const updatedCustomers = customers.map((customer: Customer) =>
                customer.email === foundCustomer.email
                    ? { ...customer, name: newName, phone: newPhone }
                    : customer
            );
            setCustomers(updatedCustomers);
            alert('Customer updated successfully.');
            setFoundCustomer(null);
            setSearchEmail('');
        }
    }

    return (
        <>
            <h2>Update Customer</h2>
            <Link to="/">Go back</Link>
            <br />

            <input
                type="text"
                placeholder="Email to search"
                value={searchEmail}
                onChange={(e) => setSearchEmail(e.target.value)}
            />
            <button onClick={searchCustomer}>Search Customer</button>
            <br />

            {foundCustomer && (
                <div>
                    <h3>Update Customer:</h3>
                    <p>
                        <strong>Current Name:</strong> {foundCustomer.name}
                        <br />
                        <strong>Current Phone:</strong> {foundCustomer.phone}
                    </p>
                    <input
                        type="text"
                        placeholder="New Name"
                        value={newName}
                        onChange={(e) => setNewName(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="New Phone"
                        value={newPhone}
                        onChange={(e) => setNewPhone(e.target.value)}
                    />
                    <button onClick={updateCustomer}>Update Customer</button>
                </div>
            )}

            {customers.length > 0 ? (
                <div>
                    <h2>Customer List:</h2>
                    {customers.map((customer: Customer, index: number) => (
                        <div key={index}>
                            <p>
                                <strong>Name:</strong> {customer.name}
                                <br />
                                <strong>Email:</strong> {customer.email}
                                <br />
                                <strong>Phone:</strong> {customer.phone}
                            </p>
                        </div>
                    ))}
                </div>
            ) : (
                <h3>No customers added yet.</h3>
            )}
        </>
    );
}
