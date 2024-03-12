import Authenticated from "@/Layouts/AuthenticatedLayout";
import ActionLink from "@/components/action-Link";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import {
    Table,
    TableHeader,
    TableBody,
    TableRow,
    TableHead,
    TableCell,
} from "@/components/ui/table";
import { PaymentMethod } from "@/lib/schemas";
import { PageProps } from "@/types";
import { Head } from "@inertiajs/react";
import React from "react";
import { CreatePayment } from "./partials/CreatePayment";
import EmptyTablePlaceholder from "@/components/EmptyTablePlaceholder";

const PaymentIndex = ({
    auth,
    payments,
}: PageProps<{ payments: PaymentMethod[] }>) => {
    return (
        <Authenticated user={auth.user}>
            <Head title="Payment Methods" />

            <Card>
                <CardHeader>
                    <div className="flex items-center justify-between">
                        <CardTitle>Payment Methods</CardTitle>
                        <CreatePayment />
                    </div>
                </CardHeader>

                { payments.length > 0 ? (
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="w-16">S/N</TableHead>
                            <TableHead>Name</TableHead>
                            <TableHead>Number</TableHead>
                            <TableHead colSpan={2}>Action</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {payments.map((payment, index) => (
                            <TableRow key={payment.id}>
                                <TableCell>{index + 1}</TableCell>
                                <TableCell>{payment.name}</TableCell>
                                <TableCell>{payment.number}</TableCell>
                                <TableCell>
                                    <ActionLink
                                        url="payments.edit"
                                        params={{ payment: payment.id }}
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

export default PaymentIndex;
