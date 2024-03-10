import InputError from "@/components/ui/InputError";
import InputLabel from "@/components/ui/InputLabel";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { PageProps } from "@/types";
import { Head, Link, useForm } from "@inertiajs/react";
import React from "react";

function CreateBranch({ auth }: PageProps) {
    const { data, setData, processing, post, errors } = useForm({
        name: "",
        phone: "",
        email: "",
        city: "",
        state: "",
        postal_code: "",
    });

    const submit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        post(route("branches.store"));
    };

    return (
        <Authenticated user={auth.user}>
            <Head title="Create Branch" />

            <Card>
                <CardHeader>
                    <div className="flex justify-between items-center">
                        <CardTitle>Create Branch</CardTitle>
                    </div>
                </CardHeader>
                <CardContent>
                    <form onSubmit={submit}>
                        <div className="grid grid-cols-6 gap-6">
                            <div className="col-span-6 sm:col-span-3">
                                <InputLabel htmlFor="name" value="Name" />
                                <Input
                                    id="name"
                                    type="text"
                                    value={data.name}
                                    autoFocus
                                    onChange={(e) =>
                                        setData("name", e.target.value)
                                    }
                                    className="mt-1 block w-full"
                                />
                                <InputError
                                    message={errors.name}
                                    className="mt-2"
                                />
                            </div>
                            <div className="col-span-6 sm:col-span-3">
                                <InputLabel htmlFor="phone" value="Phone" />
                                <Input
                                    id="phone"
                                    type="text"
                                    value={data.phone}
                                    onChange={(e) =>
                                        setData("phone", e.target.value)
                                    }
                                    className="mt-1 block w-full"
                                />
                                <InputError
                                    message={errors.phone}
                                    className="mt-2"
                                />
                            </div>
                            <div className="col-span-6 sm:col-span-3">
                                <InputLabel htmlFor="email" value="Email" />
                                <Input
                                    id="email"
                                    type="email"
                                    value={data.email}
                                    onChange={(e) =>
                                        setData("email", e.target.value)
                                    }
                                    className="mt-1 block w-full"
                                />
                                <InputError
                                    message={errors.email}
                                    className="mt-2"
                                />
                            </div>
                            <div className="col-span-6 sm:col-span-3">
                                <InputLabel htmlFor="city" value="City" />
                                <Input
                                    id="city"
                                    type="text"
                                    value={data.city}
                                    onChange={(e) =>
                                        setData("city", e.target.value)
                                    }
                                    className="mt-1 block w-full"
                                />
                                <InputError
                                    message={errors.city}
                                    className="mt-2"
                                />
                            </div>
                            <div className="col-span-6 sm:col-span-3">
                                <InputLabel htmlFor="state" value="State" />
                                <Input
                                    id="state"
                                    type="text"
                                    value={data.state}
                                    onChange={(e) =>
                                        setData("state", e.target.value)
                                    }
                                    className="mt-1 block w-full"
                                />
                                <InputError
                                    message={errors.state}
                                    className="mt-2"
                                />
                            </div>
                            <div className="col-span-6 sm:col-span-3">
                                <InputLabel
                                    htmlFor="postal_code"
                                    value="Postal Code"
                                />
                                <Input
                                    id="postal_code"
                                    type="text"
                                    value={data.postal_code}
                                    onChange={(e) =>
                                        setData("postal_code", e.target.value)
                                    }
                                    className="mt-1 block w-full"
                                />
                                <InputError
                                    message={errors.postal_code}
                                    className="mt-2"
                                />
                            </div>
                        </div>
                        <div className="flex justify-end items-center gap-4 mt-4">
                            <Button variant={"outline"}>
                                <Link href={route("branches.index")}>
                                    Cancel
                                </Link>
                            </Button>
                            <Button type="submit">Create</Button>
                        </div>
                    </form>
                </CardContent>
            </Card>
        </Authenticated>
    );
}

export default CreateBranch;
