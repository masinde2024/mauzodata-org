import SideLink from "../side-link";

const Sidebar = () => {
    return (
        <nav className="p-3 dark:text-gray-200">
            <ul className="space-y-1">
                <li>
                    <SideLink url="dashboard" label="Dashboard" />
                </li>
                <li>
                    <SideLink url="branches.index" label="Branches" />
                </li>
                <li>
                    <SideLink url="payments.index" label="Payment Methods" />
                </li>
                <li>
                    <SideLink url="customers.index" label="Customers" />
                </li>
                <li>
                    <SideLink url="products.index" label="Products" />
                </li>
            </ul>
        </nav>
    );
};

export default Sidebar;
