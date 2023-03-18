import TableHeader from "./table-header.component";
import TableBody from "./table-body.component";

function Table({ columns, items }) {
    return (
        <table className="container table">
            <TableHeader columns={columns} />
            <TableBody columns={columns} items={items} />
        </table>
    );
}

export default Table;
