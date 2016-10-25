// Mocha & Chai Test Suite (for Tuesday's assignment)
var expect = chai.expect;

describe('MoDom', function() {
  describe('md Global Variable', function() {
    it('should exist', function() {
      expect(md).to.exist
    })
  })
  describe('one() Function', function(){
      it('should find one matching element', function(){
          expect(typeof md.one('div')).to.equal('object')
      })
  })
  describe('all() Function', function(){
      it('should find all matching element', function(){
          expect(md.all('.text-muted').length).to.equal(4)
      })
  })
  describe('remove() Function', function(){
      it('should remove element', function(){
          md.remove('.icon-bar')
          expect(document.body.classList.contains('icon-bar')).to.be.false
      })
  })
  describe('addClass()', function() {
    it('should add a CSS class', function() {
      md.addClass('body', 'test')
      expect(document.body.classList.contains('test')).to.be.true
    })
  })
  describe('removeClass()', function() {
    it('should remove a CSS element', function() {
      md.removeClass('body', 'text-muted')
      expect(document.body.classList.contains('text-muted')).to.be.false
    })
  })
  describe('hasClass()', function() {
    it('should have a class', function() {
         expect(md.hasClass('nav', 'navbar')).to.be.true
      })
  })
  describe('getAttr()', function() {
     it('should get an HTML attribute from an element', function() {
         expect(md.getAttr('button', 'aria-expanded')).to.contain('false')
      })
  })
  describe('setAttr()', function() {
     it('should set an HTML attribute from an element', function() {
         md.setAttr('input', 'placeholder', 'foo')
         expect(md.getAttr('input', 'placeholder')).to.contain('foo')
      })
  })
  describe('setHTML()', function() {
     it('should set the innerHTML of an element', function() {
         md.setHTML('.navbar-brand', 'Foo Again')
         expect(md.getHTML('.navbar-brand')).to.contain('Foo Again')
      })
  })
  describe('getHTML()', function() {
     it('should get an innerHTML attribute of an element', function() {
         expect(md.getHTML('.sub-header')).to.contain('Current Quarter Details')
      })
  })
  describe('flipPage()', function() {
    it('should flip the page upside down', function() {
         md.flipPage('body')
        expect(document.body.style.transform).to.equal('rotate(180deg)')
    })
})
})
