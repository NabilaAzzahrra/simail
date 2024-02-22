<script src="{{ asset('js/Pages/Criteria/Index.jsx') }}"></script>

import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function Dashboard(props) {
return (
<AuthenticatedLayout auth={props.auth} errors={props.errors} header={<h2
    className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
    >

    <Head title="Dashboard" />

    <div className="py-12">
        <div className='flex w-full'>
            <div className="w-full mx-auto sm:px-6 lg:px-8">
                <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                    <div className="p-6 text-gray-900">
                        <form action="" method="post">
                            <div>
                                <InputLabel htmlFor="criteria" className='font-bold'>
                                    Kriteria <span className="text-red-500">*</span>
                                </InputLabel>

                                <TextInput id="criteria" name="criteria" className="mt-1 block w-full"
                                    autoComplete="criteria" isFocused={true} placeholder="Silahkan masukkan kriteria" required />
                                <InputError className="mt-2" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className="w-full mx-auto sm:px-6 lg:px-8">
                <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                    <div className="p-6 text-gray-900">You're logged in!</div>
                </div>
            </div>
        </div>
    </div>
</AuthenticatedLayout>
);
}
