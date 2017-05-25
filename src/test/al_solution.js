import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import template from '../family_friday.js'

chai.use(chaiChange)

describe('template', () => {

  it('returns an array with the same number of outputs as inputs', () => {
    const input = {
      "members": [
        {
          "id": 1,
          "email": "jill@mycompany.com",
          "name": "Jill",
          "team": "engineering"
        },
        {
          "id": 2,
          "email": "rohit@mycompany.com",
          "name": "Rohit",
          "team": "finance"
        },
        {
          "id": 3,
          "email": "maria@mycompany.com",
          "name": "Maria",
          "team": "operations"
        }
      ],
      "restaurant": {
          "logo": "https://vignette3.wikia.nocookie.net/logopedia/images/3/3f/Pizza_Hut_logo_old.svg/revision/latest/scale-to-width-down/200?cb=20121206223303",
          "name": "Pizza R Us",
          "yelp_link": "https://yelp.com/pizza-r-us"
      }
    }
    expect(template(input).length).to.eql(3)
  })
})

