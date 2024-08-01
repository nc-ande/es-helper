export const downloadXMLFile = (content: string, fileName: string) => {
    const a = document.createElement('a');
    const file = new Blob([content], { type: 'application/xml;charset=utf-8' });
    a.href = URL.createObjectURL(file);
    a.download = fileName;
    a.click();
};