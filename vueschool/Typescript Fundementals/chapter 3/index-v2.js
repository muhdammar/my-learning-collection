var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//classes in typescript
var Sizes;
(function (Sizes) {
    Sizes[Sizes["small"] = 0] = "small";
    Sizes[Sizes["medium"] = 1] = "medium";
    Sizes[Sizes["large"] = 2] = "large";
})(Sizes || (Sizes = {}));
//classes in typescript
var InventoryItem = /** @class */ (function () {
    function InventoryItem(name, price) {
        (this.name = name), (this.price = price);
    }
    return InventoryItem;
}());
var Product = /** @class */ (function (_super) {
    __extends(Product, _super);
    function Product(name, price) {
        var _this = _super.call(this, name, price) || this;
        _this.color = "gray";
        return _this;
        //other stuff for product
    }
    Product.prototype.buy = function () {
        console.log(this.price);
    };
    //chainable means this
    //obj.buyChainableMethod().doSomethingElse().doAnotherThing();
    Product.prototype.buyChainableMethod = function () {
        console.log(this.price);
        return this;
    };
    return Product;
}(InventoryItem));
var tshirt = new Product("test product", 10.2);
tshirt.buy();
tshirt.buyChainableMethod();
tshirt.size = Sizes.medium;
tshirt.color = "green";
//extending class in typscripts & implementing interface
var Service = /** @class */ (function (_super) {
    __extends(Service, _super);
    function Service(name, price, startTime, endTime) {
        var _this = _super.call(this, name, price) || this;
        _this.startTime = startTime;
        _this.endTime = endTime;
        return _this;
        //other stuff for product
    }
    Service.prototype.buy = function () {
        console.log(this.price);
    };
    Service.prototype.emailBody = function () {
        return "thank u purchase";
    };
    Service.prototype.emailSubject = function () {
        return "thank u purchase";
    };
    return Service;
}(InventoryItem));
var photoShoot = new Service("test", 450, new Date("May 9, 2009 11:00:00"), new Date("May 9, 2009 11:00:00"));
photoShoot.buy();
function sendEmail(emailable, to) {
    console.log("emailBody", emailable.emailBody());
    console.log("emailSubject", emailable.emailSubject());
    console.log("to", to);
}
//sendEmail("give an error", "ammar@gmail.com"); //u will got error
sendEmail(photoShoot, "ammar@gmail.com");
//access modifiers
var Animal = /** @class */ (function () {
    function Animal() {
        this.color = "black";
        this.feet = 4;
    }
    return Animal;
}());
var animal = new Animal();
animal.color = "red";
console.log(animal);
