var chai = require('chai')
var expect = chai.expect

function increment(value = -1, incrementBy = 1) {
    return value + incrementBy
}

describe('increment()', function() {
    it('should exist', function() {
        expect(increment).to.be.a('function')
    })
    it('should return 0 when value is undefined', function() {
        expect(increment()).to.toequal(0)
    })
    it('should return 1 when value is 0', function() {
        expect(increment(0)).to.toequal(1)
    })
    it('should return 10 when value is 0 and increment value ', function() {
        expect(increment(0, 10)).to.toequal(10)
    })
})
