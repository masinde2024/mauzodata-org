import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Cart, Customer, PaginatedProduct, PaymentMethod } from "@/lib/schemas";
import { PageProps } from "@/types";
import { Head, Link } from "@inertiajs/react";
import CartItems from "./partials/CartItems";
import { CartDrawer } from "./partials/CartDrawer";
import { CartLayout } from "@/Layouts/CartLayout";

const OrdersIndex = ({
    auth,
    products,
    cart,
    customers,
    payments,
}: PageProps<{
    products: PaginatedProduct;
    cart: Cart;
    customers: Customer[];
    payments: PaymentMethod[];
}>) => {
    return (
        <CartLayout user={auth.user}>
            <Head title="Sale Point" />
            <div className="fixed right-8 bottom-20 shadow-2xl z-10" draggable>
                <CartDrawer cart={cart} products={products} />
            </div>

            <CartItems cart={cart} customers={customers} payments={payments} />
        </CartLayout>
    );
};

export default OrdersIndex;
