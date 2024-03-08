import Authenticated from "@/Layouts/AuthenticatedLayout";
import ActionLink from "@/components/action-Link";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Table,TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Branch } from "@/lib/schemas";
import { PageProps } from "@/types";
import { Head, Link } from "@inertiajs/react";
import { ArrowRightCircle } from "lucide-react";

const BranchIndex = ({ auth, branches }: PageProps<{ branches: Branch[] }>) => {
    return (
        <Authenticated user={auth.user}>
            <Head title="Branches" />

            <Card>
                <CardHeader>
                    <div className="flex justify-between items-center">
                        <CardTitle>Branches</CardTitle>
                        <Button>
                            <Link href={route('branches.create')}>Add Branch</Link>
                        </Button>
                    </div>
                </CardHeader>

                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Name</TableHead>
                            <TableHead>Phone</TableHead>
                            <TableHead>City</TableHead>
                            <TableHead>State</TableHead>
                            <TableHead colSpan={2}>Status</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {branches.map((branch) => (
                            <TableRow key={branch.id}>
                                <TableCell>{branch.name}</TableCell>
                                <TableCell>{branch.phone}</TableCell>
                                <TableCell>{branch.city}</TableCell>
                                <TableCell>{branch.state}</TableCell>
                                <TableCell>{branch.status}</TableCell>
                                <TableCell>
                                   <ActionLink url="branches.show" params={{branch: branch.id}} />
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Card>
        </Authenticated>
    );
};

export default BranchIndex;
