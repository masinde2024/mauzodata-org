import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { PageProps } from '@/types';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export default function Dashboard({ auth }: PageProps) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Dashboard</h2>}
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <Card>
                    <CardContent>
                        <div className="p-6 text-gray-900 dark:text-gray-100">You're logged in!</div>
                        <br />
                        <Input type='text' placeholder='Enter username' />
                        <br />
                        <Button className='bg-indigo-950 text-indigo-50'>mauzodata</Button>
                    </CardContent>
                </Card>
            </div>
        </AuthenticatedLayout>
    );
}
