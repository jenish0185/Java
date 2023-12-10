public class task7 {
    public static double areaofcircle(int radius) {

        return Math.PI*Math.pow(radius, 2);
 
    }

    public static double circumferenceofcircle(int radius) {
        return 2*Math.PI*radius;
    }
    public static void main(String[] args) {
        int radius =7;

        System.out.println("area of circle = "+areaofcircle(radius));
        System.out.println("circumference of  circle = "+circumferenceofcircle(radius));
        
    }

    
    
}
