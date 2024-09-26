import java.io.BufferedReader;
import java.io.IOException;
import javax.json.Json;
import javax.json.JsonObject;
import javax.json.JsonReader;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/submitForm")
public class FormServlet extends HttpServlet {

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {

        // Set the content type to JSON
        response.setContentType("application/json");
        response.setCharacterEncoding("UTF-8");

        // Get the request body (JSON data)
        StringBuilder jsonBuffer = new StringBuilder();
        BufferedReader reader = request.getReader();
        String line;
        while ((line = reader.readLine()) != null) {
            jsonBuffer.append(line);
        }

        // Convert the JSON data into a JsonObject
        try (JsonReader jsonReader = Json.createReader(new java.io.StringReader(jsonBuffer.toString()))) {
            JsonObject jsonObject = jsonReader.readObject();

            // Get form values from the JSON object
            String name = jsonObject.getString("name");
            String email = jsonObject.getString("email");

            // Perform business logic or save the data to a database (omitted here)

            // Create response JSON object
            JsonObject jsonResponse = Json.createObjectBuilder()
                    .add("message", "Form submission successful")
                    .add("name", name)
                    .add("email", email)
                    .build();

            // Send response back to client
            response.getWriter().write(jsonResponse.toString());
        } catch (Exception e) {
            response.setStatus(HttpServletResponse.SC_BAD_REQUEST);
            response.getWriter().write("{\"error\": \"Invalid JSON data\"}");
        }
    }
}
