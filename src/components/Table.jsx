import React from "react";
import  './Table.css'
import {BsFillTrashFill, BsFillPencilFill} from 'react-icons/bs'


const Table = () => {
    return <div className="table-wrapper">
        <table className="table"> 
            <thead><tr>
                <th>Page</th>
                <th className="expand">Desciption</th>
                <th>Status</th>
                <th>Actions</th>
                </tr>
            </thead>
            <tbody><tr>
                <td>Home</td>
                <td>This the main page</td>
                <td><span className="label label-live">Live</span></td>
                <td><span className="actions"><BsFillTrashFill className="label-btn"/><BsFillPencilFill/></span></td>
                </tr>
            </tbody>
            <tbody><tr>
                <td>Page2</td>
                <td>This the second page</td>
                <td><span className="label label-draft">Draft</span></td>
                <td><span className="actions"><BsFillTrashFill className="label-btn"/><BsFillPencilFill/></span></td>
                </tr>
            </tbody>
            <tbody><tr>
                <td>Page3</td>
                <td>This the third page</td>
                <td><span className="label label-error">Error</span></td>
                <td><span className="actions"><BsFillTrashFill className="label-btn"/><BsFillPencilFill/></span></td>
                </tr>
            </tbody>
        </table>
    </div>;
}
 
export default  Table;