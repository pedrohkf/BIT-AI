export type ParsedText = {
    titulo?: string;
    subtitulo?: string;
    texto?: string;
}

export function parseText(text: string): ParsedText {
    const lines = text.split("\n")
    const parsedData: ParsedText = {};

    lines.forEach((line) => {
        if(line.startsWith("# ")){
            parsedData.titulo = line.replace("# ", "").trim();
        } else if(line.startsWith("## ")){
            parsedData.subtitulo = line.replace("## ", "").trim();
        } else {
            parsedData.texto = (parsedData.texto ?? "") + line + "\n";
        }
    })

    parsedData.texto = parsedData.texto?.trim();
    return parsedData;
}