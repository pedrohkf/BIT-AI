import styles from "./TableLeads.module.css"

interface Lead {
    id: string;
    name: string;
    email: string;
    phone: string;
    createdAt: string;
}

export default function LeadsTable({ leads }: { leads: Lead[] }) {

    function formatPhone(phone: string) {
        const apenasNumeros = phone.replace(/\D/g, ""); // tira tudo que não é número
        if (apenasNumeros.length === 11) {
            return `(${apenasNumeros.slice(0, 2)}) ${apenasNumeros.slice(2, 7)}-${apenasNumeros.slice(7)}`;
        } else if (apenasNumeros.length === 10) {
            return `(${apenasNumeros.slice(0, 2)}) ${apenasNumeros.slice(2, 6)}-${apenasNumeros.slice(6)}`;
        }
        return phone; // se for fora do padrão, mostra como veio
    }

    return (
        <div className={`overflow-x-auto bg-white shadow-md ${styles.container}`}>
            <table className="min-w-full border-collapse">
                <thead className="bg-gray-100">
                    <tr className={styles.title}>
                        <th className="py-3 px-3 text-left text-sm font-semibold text-gray-700">Nome</th>
                        <th className="py-3 px-3 text-left text-sm font-semibold text-gray-700">Email</th>
                        <th className="py-3 px-3 text-left text-sm font-semibold text-gray-700">Celular</th>
                        <th className="py-3 px-3 text-left text-sm font-semibold text-gray-700">Criado em</th>

                    </tr>
                </thead>
                <tbody>
                    {leads.length === 0 ? (
                        <tr>
                            <td colSpan={3} className="text-center py-6">
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
                                <td className="py-3 px-4 text-gray-700">{formatPhone(lead.phone)}</td>
                                <td className="py-3 px-4 text-gray-700 whitespace-nowrap">
                                    {new Date(lead.createdAt).toLocaleDateString("pt-BR")}
                                </td>
                            </tr>
                        ))
                    )}
                </tbody>
            </table>
        </div>
    );
}
