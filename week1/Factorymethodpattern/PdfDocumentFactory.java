package Week1.Factorymethodpattern;

public class PdfDocumentFactory extends DocumentFactory
{
    @Override
    public Document createDocument()
    {
        return new PdfDocument();
    }
}
