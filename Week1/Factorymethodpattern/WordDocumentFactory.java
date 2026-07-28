package Week1.Factorymethodpattern;

public class WordDocumentFactory extends DocumentFactory
{
    @Override
    public Document createDocument()
    {
        return new WordDocument();
    }
}