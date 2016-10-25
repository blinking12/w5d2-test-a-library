// Your DOM library code goes here inside of an IIFE and must set a global variables called md.

(function() {
    'use strict'
    //1.
    var one = function(selector) {
        return document.querySelector(selector)
    }

    //2.
    var all = function(selector) {
        return document.querySelectorAll(selector)
    }

    //For 3 I selected text using another function with innerHTML.  I then returned querySelector and removed the HTML.
    var remove = function(selector, words) {
        var words = selector.innerHTML
        return document.querySelector(selector).remove(words)
    }

    //4.  Adding a css class to an element.  So my thought is that I need to decide what element I want, and then add a different class onto it.
    var addClass = function(existingClass, newClass) {
        return document.querySelector(existingClass).classList.add(newClass)
    }

    //5.  Right this looks quite similar to 4.
    var removeClass = function(selector) {
        return document.querySelector(selector).classList.remove(selector)
    }

    //6.
    var hasClass = function(selector, className) {
        return document.querySelector(selector).classList.contains(className)
    }

    //7.
    var getAttr = function(selector, attribute) {
        return one(selector).getAttribute(attribute)
    }

    //8.
    var setAttr = function(selector, attribute, value) {
        one(selector).setAttribute(attribute, value)
    }

    //9.
    var setHTML = function(selector, value) {
        one(selector).innerHTML = value
    }

    // //10.
    var getHTML = function(selector) {
        return one(selector).innerHTML
    }
    //11.
    var flipPage = function(selector) {
        return one(selector).style.transform = 'rotate(180deg)'
    }

    // // Add an ajax() function that fetches API data.
    // var ajax = function(url, successCallback) {
    //     fetch(url)
    //     .then(res => res.json())
    //     .then(successCallback)
    // }
    //
    // // Add a getProp() function that gets an element's object property value.
    // var getProp = function(selector, property) {
    //     return one(selector)[property]
    // }
    //
    // // Add a setProp() function that sets an element's object property value.
    // var setProp = function(selector, property, value) {
    //     one(selector)[property] = value
    // }
    //
    // // Add a getValue() function that sets an form field's value attribute.
    // var getValue = function(selector) {
    //     return one(selector).value
    // }
    //
    // // Add a setValue() function that sets an form field's value attribute.
    // var setValue = function(selector, value) {
    //     one(selector).value = value
    // }

    var add = function() {
        var numbers = Array.from(arguments)

        var total = numbers.reduce(function(previousNumber, currentNumber) {
            return previousNumber + currentNumber
        }, 0)

        return total
    }

    window.md = {
        one: one,
        all: all,
        remove: remove,
        addClass: addClass,
        removeClass: removeClass,
        hasClass: hasClass,
        getAttr: getAttr,
        setAttr: setAttr,
        setHTML: setHTML,
        getHTML: getHTML,
        add: add,
        flipPage: flipPage,
    }

}())
