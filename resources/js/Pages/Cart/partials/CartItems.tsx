import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Cart, Customer, PaymentMethod } from "@/lib/schemas";
import { SearchCustomer } from "./SeachCustomer";
import { NumericFormat } from "react-number-format";
import InputLabel from "@/components/ui/InputLabel";
import InputError from "@/components/ui/InputError";
import { router, useForm } from "@inertiajs/react";
import SubmitButton from "@/components/SubmitButton";
import { Button } from "@/components/ui/button";
import UpdateCartItem from "./UpdateCartItem";
import { toast } from "sonner";
import { Trash, TrashIcon } from "lucide-react";
import { CartDrawer } from "./CartDrawer";

const CartItems = ({
    cart,
    customers,
    payments,
}: {
    cart: Cart;
    customers: Customer[];
    payments: PaymentMethod[];
}) => {
    let subtotal = 0;
    const { data, setData, post, processing, errors, reset } = useForm({
        customer_id: "",
        payment_method_id: "",
        paid: "",
    });
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <Card>
                <CardContent>
                    <h2 className="text-xl font-bold">Cart Items</h2>
                    <ScrollArea className="max-w-md">
                        <table className="w-full">
                            <thead>
                                <tr className="border-b *:py-2 border-kado-500/20">
                                    <th className="text-left">Product</th>
                                    <th className="text-right">Price</th>
                                    <th className="text-right">Quantity</th>
                                    <th className="text-right">Total</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody className="divide-y text-sm divide-kado-500/20">
                                {cart.items &&
                                    cart.items.map((item, index) => {
                                        subtotal += item.price * item.quantity;
                                        return (
                                            <tr
                                                key={item.id}
                                                className="*:py-2 active:bg-kado-600/10"
                                            >
                                                <td className="text-left">
                                                    {item.product.name}
                                                </td>
                                                <td className="text-right">
                                                    {Intl.NumberFormat().format(
                                                        item.price
                                                    )}
                                                </td>
                                                <td className="text-right flex justify-end">
                                                    <UpdateCartItem
                                                        item={item}
                                                        qty={item.quantity}
                                                    />
                                                </td>
                                                <td className="text-right">
                                                    {Intl.NumberFormat().format(
                                                        item.quantity *
                                                            item.price
                                                    )}
                                                </td>
                                                <td className="flex justify-center">
                                                    <Button
                                                        className="p-1"
                                                        variant={"destructive"}
                                                        onClick={() => {
                                                            router.visit(
                                                                route(
                                                                    "carts.destroy",
                                                                    {
                                                                        item: item.id,
                                                                    }
                                                                ),
                                                                {
                                                                    method: "delete",
                                                                    preserveScroll:
                                                                        true,
                                                                    onSuccess:
                                                                        () => {
                                                                            toast.success(
                                                                                "Item removed from cart"
                                                                            );
                                                                        },
                                                                    onError:
                                                                        () => {
                                                                            toast.error(
                                                                                "Failed to remove item from cart"
                                                                            );
                                                                        },
                                                                }
                                                            );
                                                        }}
                                                        size={"icon"}
                                                    >
                                                        <Trash className="size-5" />
                                                    </Button>
                                                </td>
                                            </tr>
                                        );
                                    })}
                            </tbody>
                        </table>
                        <ScrollBar orientation="horizontal" />
                    </ScrollArea>
                </CardContent>
            </Card>
            <Card>
                <CardContent className="space-y-3">
                    <p>
                        <strong>Subtotal:</strong>{" "}
                        {Intl.NumberFormat().format(subtotal)}
                    </p>

                    <SearchCustomer customers={customers} />
                    <div className="space-y-2 ">
                        <InputLabel htmlFor="payment_method">
                            Payment Method
                        </InputLabel>
                        <Select
                            onValueChange={(value) =>
                                setData("payment_method_id", value)
                            }
                        >
                            <SelectTrigger id="payment_method">
                                <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                                {payments &&
                                    payments.map((payment) => (
                                        <SelectItem
                                            key={payment.id}
                                            value={payment.id.toString()}
                                        >
                                            {payment.name}
                                        </SelectItem>
                                    ))}
                            </SelectContent>
                        </Select>
                        <InputError message={errors.payment_method_id} />
                    </div>

                    <div className="space-y-2 ">
                        <InputLabel htmlFor="whole_sale">Paid</InputLabel>
                        <NumericFormat
                            customInput={Input}
                            id="paid"
                            // value={data.paid}
                            defaultValue={subtotal}
                            onChange={(e) => setData("paid", e.target.value)}
                            allowLeadingZeros
                            allowNegative={false}
                            thousandSeparator=","
                        />
                        <InputError message={errors.paid} />
                    </div>
                    <Button disabled={processing}>
                        {processing ? "Processing..." : "Complete"}
                    </Button>
                </CardContent>
            </Card>
        </div>
    );
};

export default CartItems;
