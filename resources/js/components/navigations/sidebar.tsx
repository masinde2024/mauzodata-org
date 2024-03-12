import SideLink from "../side-link";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";


const Sidebar = () => {
    return (
        <nav className="p-3 dark:text-gray-200">
            <Select>
                <SelectTrigger className="">
                    <SelectValue placeholder="branches" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="light">Mwnananyamara Shop</SelectItem>
                    <SelectItem value="dark">Buguruni Store</SelectItem>
                    <SelectItem value="system">Miami Kilimanjaro Shop</SelectItem>
                </SelectContent>
            </Select>

            <ul className="space-y-2">
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
