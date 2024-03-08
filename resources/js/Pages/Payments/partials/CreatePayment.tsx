import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import SubmitButton from "@/components/SubmitButton";
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useForm } from "@inertiajs/react";
import { RotateCwIcon } from "lucide-react";
import React from "react";
import { toast } from "sonner";

export function CreatePayment() {
    const [open, setOpen] = React.useState(false);
    const { data, setData, post, processing, errors, reset} = useForm({
        name: "",
        number: "",
        isActive: true,
    })

    const submit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        post(route("payments.store"), {
            onSuccess: () => {
                reset();
                setOpen(false);
                toast.success("Payment method created successfully.");
            },
            onError: () => toast.error("An error occurred. Please try again."),
        });
    }

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button>Add Payment</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <form onSubmit={submit}>
                    <DialogHeader>
                        <DialogTitle>Add Payment Method</DialogTitle>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                        <div className="space-y-1.5">
                            <InputLabel htmlFor="name" value="Name" />
                            <Input
                                id="name"
                                type="text"
                                value={data.name}
                                onChange={(e) =>
                                    setData("name", e.target.value)
                                }
                                className="col-span-3"
                            />
                            <InputError message={errors.name} />
                        </div>
                        <div className="space-y-1.5">
                            <InputLabel htmlFor="number" value="Card Number" />
                            <Input
                                id="number"
                                type="number"
                                value={data.number}
                                onChange={(e) =>
                                    setData("number", e.target.value)
                                }
                                className="col-span-3"
                            />
                            <InputError message={errors.number} />
                        </div>
                    </div>
                    <DialogFooter>
                        <SubmitButton label="Create" processing={processing} />
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );
}
