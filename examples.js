// Your test code examples go here. Make sure you console.log() results.
//one()
console.log(md.one('.nav-sidebar'))

//all()
console.log(md.all('.sub-header'))

//remove()
console.log(md.all('.page-header'))
console.log(md.remove('.page-header'))

//addClass()
console.log(md.addClass('.nav-sidebar', 'newClass'))

// //removeClass()
console.log(md.removeClass('.placeholder'))
//
// //hasClass()
console.log(md.hasClass('.placeholder', 'col-sm-3'))
//
// //getAttr()
var match = md.one('.navbar')
var matchStyle = md.getAttr('.navbar', 'class')
console.log(matchStyle)
//
// //setAttr()
md.setAttr('.navbar', 'style', 'background-color: red;')
console.log(md.setAttr('.navbar', 'style'))
//
// //setHTML()
md.setHTML('.sub-header', 'Sup?')

//
// //getHTML()
console.log(md.getHTML('.sub-header'))

//ajax
