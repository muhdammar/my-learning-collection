//classes in typescript
enum Sizes {
  small,
  medium,
  large,
}
//classes in typescript
class InventoryItem {
  name: string;
  price: number;
  constructor(name: string, price: number) {
    (this.name = name), (this.price = price);
  }
}
class Product extends InventoryItem {
  color: string = "gray";
  size: Sizes | undefined;

  constructor(name: string, price: number) {
    super(name, price);
    //other stuff for product
  }

  buy(): void {
    console.log(this.price);
  }
  //chainable means this
  //obj.buyChainableMethod().doSomethingElse().doAnotherThing();

  buyChainableMethod(): this {
    console.log(this.price);
    return this;
  }
}

const tshirt = new Product("test product", 10.2);
tshirt.buy();
tshirt.buyChainableMethod();
tshirt.size = Sizes.medium;
tshirt.color = "green";

//extending class in typscripts & implementing interface
class Service extends InventoryItem implements Emailable {
  startTime: Date;
  endTime: Date;
  constructor(name: string, price: number, startTime: Date, endTime: Date) {
    super(name, price);
    this.startTime = startTime;
    this.endTime = endTime;
    //other stuff for product
  }
  buy(): void {
    console.log(this.price);
  }
  emailBody(): string {
    return "thank u purchase";
  }
  emailSubject(): string {
    return "thank u purchase";
  }
}

const photoShoot = new Service(
  "test",
  450,
  new Date("May 9, 2009 11:00:00"),
  new Date("May 9, 2009 11:00:00")
);

photoShoot.buy();

//interface implemented in classes
interface Emailable {
  emailBody(): string;
  emailSubject(): string;
}

function sendEmail(emailable: Emailable, to: string) {
  console.log("emailBody", emailable.emailBody());
  console.log("emailSubject", emailable.emailSubject());
  console.log("to", to);
}
//sendEmail("give an error", "ammar@gmail.com"); //u will got error
sendEmail(photoShoot, "ammar@gmail.com");

//access modifiers
//proctected - accessible with child
//public
//private - not accesible out of current class
//readonly - cannot set after initialized
class Animal {
  protected color: string = "black";
  public feet: number = 4;
}

const animal = new Animal();
animal.color = "red"; // error because of protected
console.log(animal);
