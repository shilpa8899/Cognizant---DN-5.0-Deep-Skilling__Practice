package Week1.Factorymethodpattern;

public class WordDocument implements Document
{
    @Override
    public void open()
    {
        System.out.println("Opening Word Document");
    }
}