public class area {
    public static void main(String[] args) {
        int areaofreactangle, length = 10, breadth = 5;

        int  radius = 7;
        float areaofcircle, circumferenceofcircle,PI= 3.14f;
        

        areaofreactangle = length*breadth;
        areaofcircle = PI*radius*radius;
        circumferenceofcircle = 2*PI*radius;


        System.out.println("area of reactangle = "+areaofreactangle);
        System.out.println("area of circle = "+areaofcircle);
        System.out.println("circumference of  circle = "+circumferenceofcircle);


    }
    
}
