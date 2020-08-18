public class main {
    public static void main(String[]args){
        String a = "aanagram";
        String b = "Moargana";

        Anagrams anagram = new Anagrams();
        boolean isAnagram = anagram.isAnagram(a, b);
        System.out.println(isAnagram);
    }
}
