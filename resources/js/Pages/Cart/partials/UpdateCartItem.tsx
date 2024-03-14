import { Input } from "@/components/ui/input";
import { CartItem } from "@/lib/schemas";
import { router, useForm } from "@inertiajs/react";
import { error } from "console";
import { set } from "lodash";
import React, { FormEvent, FormEventHandler, useRef } from "react";
import { toast } from "sonner";
import { useDebouncedCallback } from "use-debounce";

const UpdateCartItem = ({ qty, item }: { qty: number; item: CartItem }) => {
    const formRef = useRef<HTMLFormElement>(null);
    const { data, setData, patch, errors, reset } = useForm({
        quantity: qty,
    });

    if (errors.quantity) toast.error(errors.quantity);

    const handleSubmit = useDebouncedCallback((e: FormEvent<Element>) => {
        e.preventDefault();

        patch(route("carts.update", item.id), {
            onSuccess: () => {
                toast.success("Cart item updated");
            },
            onError: (errors) => {
                if (errors.quantity) reset("quantity");
            },
            preserveScroll: true,
            preserveState: true,
        });

    }, 1000);

    return (
        <form ref={formRef} onSubmit={handleSubmit}>
            <Input
                type="number"
                defaultValue={qty}
                className="max-w-20 py-1"
                onChange={(e) => {
                    setData("quantity", parseFloat(e.target.value))
                    formRef.current?.dispatchEvent(new Event("submit", { bubbles: true }));
                }
                }
            />
        </form>
    );
};

export default UpdateCartItem;
