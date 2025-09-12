"use client"
import FetchEbookById, { Ebook } from "@/actions/ebookId-get"
import styles from './Ebook.module.css'
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

// type HTMLContent = {
//     __html: string;
// };

export default function Page() {
    const params = useParams();
    const ebookId = params.ebookId as string;

    const [ebook, setEbook] = useState<Ebook | null>(null);
    const [dateEbook, setDateEbook] = useState<string>()



    const handleDownload = async () => {
        const element = document.getElementById('ebook-content');
        if (!element) return;

        const html2pdf = (await import('html2pdf.js')).default;

        const opt = {
            margin: 0.5,
            filename: `${ebook?.title.replace(/\s+/g, '_')}.pdf`,
            image: { type: 'jpeg', quality: 0.8 },
            html2canvas: { scale: 1.2 },
            jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' },
            pagebreak: { mode: ['avoid-all', 'css', 'legacy'] }
        };

        html2pdf().set(opt).from(element).save();
    }

    useEffect(() => {
        async function fetchEbook() {
            const data = await FetchEbookById(ebookId);
            setEbook(data);

            const date = data?.createdAt ? new Date(data.createdAt) : null;


            const formattedDate = new Intl.DateTimeFormat("pt-BR", {
                day: "2-digit",
                month: "long",
                year: "numeric",
                timeZone: "America/Sao_Paulo",
            }).format(date ?? new Date());


            setDateEbook(formattedDate)
        }

        fetchEbook()
    }, [ebookId])

    // const formattedIntroductoryText: HTMLContent = { __html: (ebook?.introductoryText || "").replace(/\.\s/g, ".<br/> <br/>") }

    // const formattedDevelopment: HTMLContent = { __html: (ebook?.developmentText || "").replace(/\.\s/g, ".<br/> <br/>") }


    return (
        <div className={styles.container}>
            <button onClick={handleDownload} className={styles.downloadButton}>
                📥 Baixar PDF
            </button>

            <div id='ebook-content' className={styles.content}>
                <h1>{ebook?.title}</h1>
                <p id={styles.catchyPhrase}>{ebook?.copyright}</p>
                <ul>
                    <li>{dateEbook}</li>
                </ul>
                <p>{ebook?.chapterReaderAvatar}</p>
                <p>{ebook?.chapterStorytelling}</p>
                <p>{ebook?.chapterConnection}</p>
                <p>{ebook?.chapterIntroduction}</p>
                <p>{ebook?.chapterProblem}</p>
                <p>{ebook?.chapterSolution}</p>
                <p>{ebook?.chapterInterest}</p>
                <p>{ebook?.chapterDevelopment}</p>
                <p>{ebook?.chapterAttention}</p>
                <p>{ebook?.chapterDesire}</p>
                <p>{ebook?.chapterAction}</p>
                <p>{ebook?.chapterCaseStudies}</p>
                <p>{ebook?.chapterCTA}</p>
            </div>
        </div>
    )
}