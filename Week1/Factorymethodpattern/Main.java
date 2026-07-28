package Week1.Factorymethodpattern;

public class Main
{
    public static void main(String[] args)
    {
        DocumentFactory factory;

        factory = new WordDocumentFactory();
        Document document = factory.createDocument();
        document.open();

        factory = new PdfDocumentFactory();
        document = factory.createDocument();
        document.open();

        factory = new ExcelDocumentFactory();
        document = factory.createDocument();
        document.open();
    }
}