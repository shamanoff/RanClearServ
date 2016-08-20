import com.google.gson.Gson;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;

import java.io.File;
import java.io.FileWriter;
import java.io.IOException;
import java.util.ArrayList;

public class Func {

    public static void main(String[] args) {

        Func func = new Func();
        func.jsMet("ball");



    }

  /*  public Func() {
    }*/

    public void jsMet (String inputData) {
    ArrayList<String> imagesArr = new ArrayList<String>();
    try {
        // fetch the document over HTTP
        Document doc = Jsoup.connect("http://giphy.com/search/"+ inputData).get();

        // get the page title
        String title = doc.title();
        System.out.println("title: " + title);

        // get all links in page
        Elements images = doc.select("img[src]");
        for (Element image : images) {
            imagesArr.add(image.attr("data-animated"));
            // get the value from the href attribute
            //System.out.println("\nimg: " + image.attr("data-animated"));
            //System.out.println("text: " + image.text());
        }
    } catch (IOException e) {
        e.printStackTrace();
    }
    System.out.println(imagesArr.toString());

    //----------------------------------------------
    String json = new Gson().toJson(imagesArr);

        File file1 = new File("images.json");

    try {

        //FileWriter file = new FileWriter("c:\\test.json");
        FileWriter file = new FileWriter(file1);

        file.write(json);
        file.flush();
        file.close();
        System.out.println(file1.getAbsolutePath());
    } catch (IOException e) {
        e.printStackTrace();
    }

}
}
