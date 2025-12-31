// Source code is decompiled from a .class file using FernFlower decompiler (from Intellij IDEA).
public class removeDuplicate {
   public removeDuplicate() {
   }

   public static int RomanToInt(char var0) {
      switch (var0) {
         case 'C':
            return 100;
         case 'D':
            return 500;
         case 'E':
         case 'F':
         case 'G':
         case 'H':
         case 'J':
         case 'K':
         case 'N':
         case 'O':
         case 'P':
         case 'Q':
         case 'R':
         case 'S':
         case 'T':
         case 'U':
         case 'W':
         default:
            return 0;
         case 'I':
            return 1;
         case 'L':
            return 50;
         case 'M':
            return 1000;
         case 'V':
            return 5;
         case 'X':
            return 10;
      }
   }

   public static void main(String[] var0) {
      String var1 = "III";
      int var2 = 0;
      int var3 = 0;

      for(int var4 = var1.length() - 1; var4 >= 0; --var4) {
         int var5 = RomanToInt(var1.charAt(var4));
         if (var3 > var5) {
            var2 -= var5;
         } else {
            var2 += var5;
         }

         var3 = var5;
      }

      System.out.println(var2);
   }
}
