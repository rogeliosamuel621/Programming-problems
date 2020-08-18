public class Anagrams {
    public boolean isAnagram(String a, String b) {

        if(a.length() != b.length()) {
            return false;
        }
        for(int i=0; i<a.length(); i++) {
            int letterA = 0;
            int letterB = 0;
            char indexLetter = a.charAt(i);

            for(int j=0; j<a.length(); j++) {
                char upercaseIndexLetter = Character.toUpperCase(indexLetter);
                char currentlyLetter = Character.toUpperCase(a.charAt(j));

                if(upercaseIndexLetter == currentlyLetter) {
                    letterA++;
                }
            }
            for(int u=0; u<b.length(); u++) {
                char upercaseIndexLetter = Character.toUpperCase(indexLetter);
                char currentlyLetter = Character.toUpperCase(b.charAt(u));

                if(upercaseIndexLetter == currentlyLetter) {
                    letterB++;
                }
            }

            if(letterA != letterB) {
                return false;
            }
        }
        return true;
    }
}