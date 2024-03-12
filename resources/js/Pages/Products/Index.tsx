import Authenticated from "@/Layouts/AuthenticatedLayout";
import EmptyTablePlaceholder from "@/components/EmptyTablePlaceholder";
import ActionLink from "@/components/action-Link";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
    Table,
    TableHeader,
    TableHead,
    TableBody,
    TableRow,
    TableCell,
} from "@/components/ui/table";
import { PaginatedProduct } from "@/lib/schemas";
import { PageProps } from "@/types";
import { Head, Link, router } from "@inertiajs/react";
import { FilterIcon, PrinterIcon } from "lucide-react";
import { useDebouncedCallback } from "use-debounce";

const ProductIndex = ({
    auth,
    products,
}: PageProps<{ products: PaginatedProduct }>) => {
    const handleSearch = useDebouncedCallback((term: string) => {
        router.get(
            route("products.index"),
            { search: term },
            { preserveScroll: true, preserveState: true }
        );
    }, 1000);
    return (
        <Authenticated user={auth.user}>
            <Head title="Products" />

            <div className="flex justify-between items-center mb-3 px-4">
                <CardTitle className="dark:text-kado-50">Products</CardTitle>
                <Link href={route("products.create")}>
                    <Button>Create</Button>
                </Link>
            </div>
            <Card>
                <CardHeader>
                    <div className="flex justify-between gap-4">
                        <div className="">
                            <Button variant={"outline"}>Export</Button>
                        </div>
                        <div className="shrink flex-1 flex justify-end gap-2 items-center">
                            <Input
                                type="search"
                                placeholder="Search..."
                                className="w-full rounded-2xl max-w-sm md:min-w-sm"
                                onChange={(e) => handleSearch(e.target.value)}
                            />
                            <Button variant={"outline"} size={"icon"}>
                                <FilterIcon className="size-4" />
                            </Button>
                        </div>
                    </div>
                </CardHeader>

                { products.data.length > 0 ? (
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>S/N</TableHead>
                            <TableHead>Name</TableHead>
                            <TableHead className="text-right">
                                B.Price
                            </TableHead>
                            <TableHead className="text-right">
                                S.Price
                            </TableHead>
                            <TableHead className="text-right">Stock</TableHead>
                            <TableHead className="text-right">
                                Quantity
                            </TableHead>
                            <TableHead className="text-right">W.Sale</TableHead>
                            <TableHead colSpan={2}>Discount</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {products.data.map((product, index) => (
                            <TableRow key={product.id}>
                                <TableCell>{index + 1}</TableCell>
                                <TableCell>{`${product.name} / ${product.unit}`}</TableCell>
                                <TableCell className="text-right">
                                    {Intl.NumberFormat().format(
                                        product.buying_price
                                    )}
                                </TableCell>
                                <TableCell className="text-right">
                                    {Intl.NumberFormat().format(
                                        product.selling_price
                                    )}
                                </TableCell>
                                <TableCell className="text-right">
                                    {Intl.NumberFormat().format(product.stock)}
                                </TableCell>
                                <TableCell className="text-right">
                                    {product.quantity_per_stock}
                                </TableCell>
                                <TableCell className="text-right">
                                    {product.whole_sale}
                                </TableCell>
                                <TableCell className="text-right">
                                    {Intl.NumberFormat().format(
                                        product.discount
                                    )}
                                </TableCell>
                                <TableCell>
                                    <ActionLink
                                        url="products.edit"
                                        params={{ product: product.id }}
                                    />
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
                ): (
                    <EmptyTablePlaceholder />
                )}
            </Card>
        </Authenticated>
    );
};

export default ProductIndex;
