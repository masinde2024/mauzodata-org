import Authenticated from '@/Layouts/AuthenticatedLayout'
import EmptyTablePlaceholder from '@/components/EmptyTablePlaceholder'
import ActionLink from '@/components/action-Link'
import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { paginatedCustomer } from '@/lib/schemas'
import { PageProps } from '@/types'
import { Head, Link, router } from '@inertiajs/react'
import { FilterIcon } from 'lucide-react'
import { useDebouncedCallback } from 'use-debounce'

const CustomerIndex = ({ auth, customers }: PageProps<{ customers: paginatedCustomer}>) => {
    const handleSearch = useDebouncedCallback((term: string) => {
        router.get(
            route("customers.index"),
            { search: term },
            { preserveScroll: true, preserveState: true }
        );
    }, 1000);
    return (
        <Authenticated user={auth.user}>
            <Head title="Customers" />

            <div className="flex justify-between items-center mb-3 px-4">
                <CardTitle className="dark:text-kado-50">Customers</CardTitle>
                <Link href={"/"}>
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
                { customers.data.length > 0 ? (
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead className='w-10'>S/N</TableHead>
                            <TableHead>Name</TableHead>
                            <TableHead>Contact</TableHead>
                            <TableHead>Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {customers.data.map((customer, index) => (
                            <TableRow key={customer.id}>
                                <TableCell className='w-10'>{index + 1}</TableCell>
                                <TableCell>{customer.name}</TableCell>
                                <TableCell>{customer.contact}</TableCell>
                                <TableCell>
                                    <ActionLink url={"customers.edit"} params={{ customer: customer.id }}  />
                                        
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
                ) : (
                    <EmptyTablePlaceholder />
                )}
            </Card>
        </Authenticated>
    )
}

export default CustomerIndex