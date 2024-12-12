import './App.css'
import {createBrowserRouter, RouterProvider} from "react-router";
import {Dashboard} from "./component/dashboard.tsx";
import {AddCustomer} from "./component/addCustomer.tsx";
import {DeleteCustomer} from "./component/deleteCustomer.tsx";
import {UpdateCustomer} from "./component/updateCustomer.tsx";
import {RootLayout} from "./Components/RootLayout.tsx";
import {CustomerProvider} from "./Components/customerprovider.tsx";




function App() {
  const routes=createBrowserRouter([
      {
        path:'',
        element:<RootLayout/>,
        children:[
            {path :'',element :<Dashboard/>},
            {path :'/add',element :<AddCustomer/>},
            {path :'/update',element :<UpdateCustomer/>},
            {path :'/delete',element :<DeleteCustomer/>},
        ]
      },

  ])

  return (
      <>
          <CustomerProvider>
              <RouterProvider   router={routes}/>
          </CustomerProvider>
      </>
  )
}

export default App

