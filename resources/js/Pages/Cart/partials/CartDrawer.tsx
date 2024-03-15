import * as React from "react";
import { MinusIcon, PlusIcon, ShoppingCart, ShoppingCartIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer";
import { Cart, PaginatedProduct } from "@/lib/schemas";
import { Input } from "@/components/ui/input";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Link, router } from "@inertiajs/react";
import { useDebouncedCallback } from "use-debounce";
import { toast } from "sonner";
import EmptyTablePlaceholder from "@/components/EmptyTablePlaceholder";
import { useState } from "react";

export function CartDrawer({
    products,
    cart,
}: {
    products: PaginatedProduct;
    cart: Cart;
}) {
    const [open, setOpen] = useState(false);
    const handleSearch = useDebouncedCallback((term: string) => {
        router.get(
            route("carts.index"),
            { search: term },
            { preserveScroll: true, preserveState: true, only: ["products"] }
        );
    }, 1000);

    return (
        <Drawer open={open} onOpenChange={setOpen}>
            <DrawerTrigger asChild>
                <Button
                    className="animate-bounce transition-all duration-700 hover:animate-none"
                    size={"icon"}
                >
                    <ShoppingCartIcon size={25} />
                </Button>
            </DrawerTrigger>
            <DrawerContent>
                <div className="mx-auto w-full max-w-md lg:max-w-2xl">
                    <DrawerHeader>
                        <DrawerTitle>Products</DrawerTitle>
                        <DrawerDescription>
                            Find product and add to cart.
                        </DrawerDescription>
                    </DrawerHeader>
                    <div className="p-2 pb-4 dark:text-kado-50">
                        <div>
                            <Input
                                type="search"
                                placeholder="Search by name/barcode"
                                className="rounded-2xl"
                                onChange={(e) => handleSearch(e.target.value)}
                            />
                        </div>
                        <ScrollArea className="w-md lg:w-2xl">
                            <div className="mt-4">
                                {products.data.length > 0 ? (
                                    <Table>
                                        <TableHeader>
                                            <TableRow>
                                                <TableHead>Product</TableHead>
                                                <TableHead>Prices</TableHead>
                                                <TableHead></TableHead>
                                            </TableRow>
                                        </TableHeader>
                                        <TableBody>
                                            {products.data.map((product) => (
                                                <TableRow key={product.id}>
                                                    <TableCell>
                                                        <div className="flex items-center">
                                                            <div className="ml-2">
                                                                <div className="font-medium">
                                                                    {`${product.name}/${product.unit}`}
                                                                </div>
                                                                <ul className="text-kado-400">
                                                                    <li>
                                                                        <span>
                                                                            Stock:{" "}
                                                                        </span>
                                                                        <span className="text-green-500">
                                                                            {
                                                                                product.stock
                                                                            }
                                                                        </span>
                                                                    </li>
                                                                    <li>
                                                                        <span>
                                                                            Jumla:{" "}
                                                                        </span>
                                                                        <span>
                                                                            {
                                                                                product.whole_sale
                                                                            }
                                                                        </span>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </TableCell>
                                                    <TableCell>
                                                        <div className="flex items-center">
                                                            <div className="ml-2">
                                                                <div className="font-medium">
                                                                    {Intl.NumberFormat().format(
                                                                        product.selling_price
                                                                    )}
                                                                </div>
                                                                <ul className="text-kado-400">
                                                                    <li>
                                                                        <span>
                                                                            Jumla:{" "}
                                                                        </span>
                                                                        <span>
                                                                            {Intl.NumberFormat().format(
                                                                                product.selling_price -
                                                                                    product.discount
                                                                            )}
                                                                        </span>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </TableCell>

                                                    <TableCell>
                                                        <Button
                                                            variant={"ghost"}
                                                            size={"icon"}
                                                            onClick={() =>
                                                                router.post(
                                                                    route(
                                                                        "carts.store"
                                                                    ),
                                                                    {
                                                                        product_id:
                                                                            product.id,
                                                                        quantity: 1,
                                                                        price: product.selling_price,
                                                                    },
                                                                    {
                                                                        onSuccess:
                                                                            () => {
                                                                                setOpen(
                                                                                    false
                                                                                );
                                                                                toast.success(
                                                                                    `${product.name} added to the cart`
                                                                                );
                                                                            },
                                                                        onError:
                                                                            () => {
                                                                                toast.error(
                                                                                    "Could not add product to the cart, please try again."
                                                                                );
                                                                            },
                                                                    }
                                                                )
                                                            }
                                                        >
                                                            <ShoppingCart className="text-emerald-600 size-5" />
                                                        </Button>
                                                    </TableCell>
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                ) : (
                                    <EmptyTablePlaceholder />
                                )}
                            </div>

                            <ScrollBar orientation="horizontal" />
                        </ScrollArea>
                    </div>
                </div>
            </DrawerContent>
        </Drawer>
    );
}
