import javax.servlet.annotation.WebServlet;
import java.io.IOException;

@WebServlet(name = "ServletOne", urlPatterns = "/ServletOne")
public class ServletOne extends javax.servlet.http.HttpServlet {



    protected void doPost(javax.servlet.http.HttpServletRequest request, javax.servlet.http.HttpServletResponse response) throws javax.servlet.ServletException, IOException {
        //HttpSession session = request.getSession();
        final String inputData = request.getParameter("name");

        //session.setAttribute("inputData", inputData);
        //------------------------------


         new Func().jsMet( inputData);




        //-------------
        response.sendRedirect("indexAfter.jsp");
        //request.getRequestDispatcher("indexAfter.jsp").forward(request,response);

    }

    protected void doGet(javax.servlet.http.HttpServletRequest request, javax.servlet.http.HttpServletResponse response) throws javax.servlet.ServletException, IOException {

    }
}
