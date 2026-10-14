export function fillTheme(text: string, theme: string) {
    return text.split("{tema}").join(theme.trim());
}
