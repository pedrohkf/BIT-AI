interface Lead {
    id: number;
    name: string;
    email: string;
    status: string;
    createdAt: string;
}

export default function LeadsTable({ leads }: { leads: Lead[] }) {
    return (
        <div className="overflow-x-auto bg-white rounded-2xl shadow-md">
            <table className="min-w-full border-collapse">
                <thead className="bg-gray-100">
                    <tr>
                        <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">Nome</th>
                        <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">Email</th>
                        <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">Status</th>
                        <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">Criado em</th>
                    </tr>
                </thead>
                <tbody>
                    {leads.length === 0 ? (
                        <tr>
                            <td colSpan={4} className="text-center py-6 text-gray-500">
                                Nenhum lead encontrado.
                            </td>
                        </tr>
                    ) : (
                        leads.map((lead) => (
                            <tr
                                key={lead.id}
                                className="border-t hover:bg-gray-50 transition duration-150 ease-in-out"
                            >
                                <td className="py-3 px-4">{lead.name}</td>
                                <td className="py-3 px-4 text-gray-700">{lead.email}</td>
                                <td className="py-3 px-4">
                                    <span
                                        className={`px-2 py-1 rounded-xl text-xs font-medium ${lead.status === "Novo"
                                                ? "bg-blue-100 text-blue-700"
                                                : lead.status === "Em Contato"
                                                    ? "bg-yellow-100 text-yellow-700"
                                                    : "bg-green-100 text-green-700"
                                            }`}
                                    >
                                        {lead.status}
                                    </span>
                                </td>
                                <td className="py-3 px-4 text-sm text-gray-500">{lead.createdAt}</td>
                            </tr>
                        ))
                    )}
                </tbody>
            </table>
        </div>
    );
}
