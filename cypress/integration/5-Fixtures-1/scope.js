var firstName = "skd"
var lastName = "datir"


let info = {
    firstName: "sachin",
    lastName: "datir",
    display: function () {
        console.log(this.firstName + this.lastName)
        function display2() {
            console.log(this.firstName + this.lastName)
        }
        display2()
    }

}
info.display()
// var firstName = "skd"
// var lastName = "datir"

// let info2 = {
//     firstName: "sachin",
//     lastName: "datir",
//     display: function () {
//         console.log(this.firstName + this.lastName)
//         let display2 = () => {
//             console.log(this.firstName + this.lastName)
//         }
//      display2()
//     }

// }
// info2.display()