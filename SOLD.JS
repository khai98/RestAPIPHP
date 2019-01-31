1. Nguyên lí lập trình (KISS) 
   1.1 (Keep It Simple Stupid)
   -> “Hãy giữ cho mọi thứ càng đơn giản càng tốt, nhưng không có nghĩa là bỏ qua sự phức tạp của vấn đề cần giải quyết”.

2. Nguyên lí lập trình (DRY) 
    2.1 (Don’t Repeat Yourself)
    -> Nguyên tắc này có nghĩa là đừng có viết lặp bất kỳ lại một đoạn mã nào mà hãy đóng gói nó thành phương thức riêng. Đến khi cần thì chỉ cần gọi tên nó ra.
    -> Nguyên tắc này nó giống như tính chất kế thừa trong lập trình hướng đối tượng OOP mà chúng ta đã quá quen thuộc rồi.
    -> “Đừng lặp lại những gì giống nhau”.

3. Nguyên lí lập trình (SOLID)
    3.1 Single responsibility principle.
      3.1.1 Một class chỉ nên giữ 1 trách nhiệm duy nhất.
    3.2 Open/closed principle.
      3.2.1 “Mở class khi cần mở rộng nó, đóng class khi cần chỉnh sửa nó”
    3.3 Liskov Substitution Principle.
      3.3.1 “Subtype phải luôn có thể được thay thế bằng supertype”.
    4.3 Interface Segregation Principle.
      4.3.1 “Việc dùng nhiều interface cho các client khác nhau, tốt hơn là việc chỉ dùng 1 interface cho cùng lúc nhiều mục đích” hay nói cách khác “Không được phép hạn chế access vào những method mà client không sử dụng”.
    5.3 Dependency inversion principle.
      5.3.1 “Module tầng trên không được phụ thuộc vào module tầng dưới. Bất cứ module nào cũng phải phụ thuộc vào cái trừu tượng, không phải vào cái cụ thể”.
4. Example SOLID :
  4.1 Single responsibility principle.
  #Bad
    public class DuLieu()
    {
       public void DocDuLieu();
       public void TruyenDuLieu();
       public void XuatDuLieu();
    }
  #Good
    public class DocDuLieu() { 

    }

    public class TruyenDuLieu() {

     }

    public class XuatDuLieu() { 

    } 
  4.2 Open/closed principle.
  #Bad
    public class DuLieu()
    {
      public function DocDuLieu() {
        return DuLieu;
      };
    }
  #Good
    public class DuLieu() { 

    }
    public class DeleteDuLieu extends  DuLieu {

    }
  4.3 Liskov Substitution Principle.
  public class Animal {
      public void makeNoise() {
          System.out.println("making some noise");
      }
  }
  // class Cat và Dog extend từ class animal
  public class Dog extends Animal {
      @Override
      public void makeNoise() {
          System.out.println("gâu gâu");
      }
  }
  public class Cat extends Animal {
      @Override
      public void makeNoise() {
          System.out.println("meow meow");
      }
  }
  4.4 Interface Segregation Principle.
  