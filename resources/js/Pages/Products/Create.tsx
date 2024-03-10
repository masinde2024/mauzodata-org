import Authenticated from "@/Layouts/AuthenticatedLayout";
import InputError from "@/components/ui/InputError";
import InputLabel from "@/components/ui/InputLabel";
import { NumericFormat } from "react-number-format";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { PageProps } from "@/types";
import { Head, Link, useForm } from "@inertiajs/react";
import Checkbox from "@/components/ui/Checkbox";
import { Switch } from "@/components/ui/switch";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import SubmitButton from "@/components/SubmitButton";
import { FormEventHandler } from "react";
import { toast } from "sonner";

const CreateProduct = ({ auth }: PageProps) => {
    const { data, setData, post, errors, processing, reset } = useForm({
        name: "",
        unit: "",
        barcode: "",
        buying_price: "",
        selling_price: "",
        stock: "",
        quantity_per_stock: "1",
        whole_sale: "1",
        discount: "0",
        stock_alert: "",
        expired_date: "",
        transport: "0",
        isActive: true,
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post(route("products.store"), {
            preserveScroll: true,
            onSuccess: () => {
                reset();
                toast.success("Created successfully.");
            },
            onError: (errors) => {
                console.dir(errors, { depth: null })
                toast.error(`Error occured. Please try again!`);
            },
        });
    };
    return (
        <Authenticated user={auth.user}>
            <Head title="Create Product" />

            <Card className="p-4">
                <CardHeader>
                    <CardTitle>Create Product</CardTitle>
                </CardHeader>

                <CardContent>
                    <form onSubmit={submit}>
                        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-4 mb-6">
                            <div className="space-y-2">
                                <InputLabel htmlFor="name">
                                    ProductName
                                </InputLabel>
                                <Input
                                    type="text"
                                    id="name"
                                    value={data.name}
                                    onChange={(e) =>
                                        setData("name", e.target.value)
                                    }
                                />
                                <InputError message={errors.name} />
                            </div>
                            <div className="space-y-2">
                                <InputLabel htmlFor="unit">Unit</InputLabel>
                                <Input
                                    type="text"
                                    id="unit"
                                    value={data.unit}
                                    onChange={(e) =>
                                        setData("unit", e.target.value)
                                    }
                                />
                                <InputError message={errors.unit} />
                            </div>
                            <div className="space-y-2 ">
                                <InputLabel htmlFor="buying_price">
                                    Buying Price
                                </InputLabel>
                                <NumericFormat
                                    customInput={Input}
                                    id="buying_price"
                                    value={data.buying_price}
                                    onChange={(e) =>
                                        setData("buying_price", e.target.value)
                                    }
                                    allowLeadingZeros
                                    allowNegative={false}
                                    thousandSeparator=","
                                />
                                <InputError message={errors.buying_price} />
                            </div>
                            <div className="space-y-2 ">
                                <InputLabel htmlFor="selling_price">
                                    Selling Price
                                </InputLabel>
                                <NumericFormat
                                    customInput={Input}
                                    id="selling_price"
                                    value={data.selling_price}
                                    onChange={(e) =>
                                        setData("selling_price", e.target.value)
                                    }
                                    allowLeadingZeros
                                    allowNegative={false}
                                    thousandSeparator=","
                                />
                                <InputError message={errors.selling_price} />
                            </div>
                            <div className="space-y-2 ">
                                <InputLabel htmlFor="stock">Stock</InputLabel>
                                <NumericFormat
                                    customInput={Input}
                                    id="stock"
                                    value={data.stock}
                                    onChange={(e) =>
                                        setData("stock", e.target.value)
                                    }
                                    allowLeadingZeros
                                    allowNegative={false}
                                    thousandSeparator=","
                                />
                                <InputError message={errors.stock} />
                            </div>
                            <div className="space-y-2 ">
                                <InputLabel htmlFor="quantity_per_stock">
                                    Quantity Per Stock
                                </InputLabel>
                                <NumericFormat
                                    customInput={Input}
                                    id="quantity_per_stock"
                                    value={data.quantity_per_stock}
                                    onChange={(e) =>
                                        setData(
                                            "quantity_per_stock",
                                            e.target.value
                                        )
                                    }
                                    allowLeadingZeros
                                    allowNegative={false}
                                    thousandSeparator=","
                                />
                                <InputError
                                    message={errors.quantity_per_stock}
                                />
                            </div>
                            <div className="space-y-2 ">
                                <InputLabel htmlFor="whole_sale">
                                    Whole Sale
                                </InputLabel>
                                <NumericFormat
                                    customInput={Input}
                                    id="whole_sale"
                                    value={data.whole_sale}
                                    onChange={(e) =>
                                        setData("whole_sale", e.target.value)
                                    }
                                    allowLeadingZeros
                                    allowNegative={false}
                                    thousandSeparator=","
                                />
                                <InputError message={errors.whole_sale} />
                            </div>
                            <div className="space-y-2 ">
                                <InputLabel htmlFor="discount">
                                    Discount
                                </InputLabel>
                                <NumericFormat
                                    customInput={Input}
                                    id="discount"
                                    value={data.discount}
                                    onChange={(e) =>
                                        setData("discount", e.target.value)
                                    }
                                    allowLeadingZeros
                                    allowNegative={false}
                                    thousandSeparator=","
                                />
                                <InputError message={errors.discount} />
                            </div>
                            <div className="space-y-2 ">
                                <InputLabel htmlFor="stock_alert">
                                    Stock Alert
                                </InputLabel>
                                <NumericFormat
                                    customInput={Input}
                                    id="stock_alert"
                                    value={data.stock_alert}
                                    onChange={(e) =>
                                        setData("stock_alert", e.target.value)
                                    }
                                    allowLeadingZeros
                                    allowNegative={false}
                                    thousandSeparator=","
                                />
                                <InputError message={errors.stock_alert} />
                            </div>
                            <div className="flex items-center justify-between gap-2">
                                <InputLabel htmlFor="isActive">
                                    Is Visible?
                                </InputLabel>
                                <Switch
                                    id="isActive"
                                    checked={data.isActive}
                                    onCheckedChange={(checked) =>
                                        setData("isActive", checked)
                                    }
                                />
                                <InputError message={errors.isActive} />
                            </div>
                        </section>

                        <Accordion
                            type={"single"}
                            collapsible
                            className="w-full"
                        >
                            <AccordionItem value="additional-info">
                                <AccordionTrigger>
                                    Additional information
                                </AccordionTrigger>
                                <AccordionContent>
                                    <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="space-y-2 ">
                                            <InputLabel htmlFor="expired_date">
                                                Expired Date
                                            </InputLabel>
                                            <Input
                                                type="date"
                                                id="expired_date"
                                                value={data.expired_date}
                                                onChange={(e) =>
                                                    setData(
                                                        "expired_date",
                                                        e.target.value
                                                    )
                                                }
                                            />
                                            <InputError
                                                message={errors.expired_date}
                                            />
                                        </div>
                                        <div className="space-y-2 ">
                                            <InputLabel htmlFor="barcode">
                                                Barcode
                                            </InputLabel>
                                            <Input
                                                type="text"
                                                id="barcode"
                                                value={data.barcode}
                                                onChange={(e) =>
                                                    setData(
                                                        "barcode",
                                                        e.target.value
                                                    )
                                                }
                                            />
                                            <InputError
                                                message={errors.barcode}
                                            />
                                        </div>
                                        <div className="space-y-2 ">
                                            <InputLabel htmlFor="transport">
                                                Transport
                                            </InputLabel>
                                            <NumericFormat
                                                customInput={Input}
                                                type="text"
                                                id="transport"
                                                value={data.transport}
                                                onChange={(e) =>
                                                    setData(
                                                        "transport",
                                                        e.target.value
                                                    )
                                                }
                                                allowLeadingZeros
                                                allowNegative={false}
                                                thousandSeparator=","
                                            />
                                            <InputError
                                                message={errors.transport}
                                            />
                                        </div>
                                    </section>
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                        <div className="flex gap-3 items-center justify-end mt-3">
                            <Link href={route("products.index")}>
                                <Button variant={"outline"}>Cancel</Button>
                            </Link>
                            <SubmitButton
                                label="Create"
                                processing={processing}
                            />
                        </div>
                    </form>
                </CardContent>
            </Card>
        </Authenticated>
    );
};

export default CreateProduct;
