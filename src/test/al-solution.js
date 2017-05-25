import chai, { expect } from 'chai'
import chaiChange from 'chai-change'

chai.use(chaiChange)

describe('template', () => {

  it('returns html markup', () => {


    expect(bst.root).to.eql({value: 3, left: {value:2, left: null, right: null}, right: {value:5, left: null, right: null} })
  })

})

