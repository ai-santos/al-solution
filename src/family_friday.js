const template = (input) => {
  let templateArr = []
  templateArr = input.members.map( (member) => {
    return `
      <div class="members">
        <h4>Hello ${member.name}</h4>
        <p>Thanks for coming to Family Friday lunch at:</p>
        <h4>${input.restaurant.name}</h4>
        <a href=${input.restaurant.yelp_link}><img src=${input.restaurant.logo} /></a>
        <p>We enjoyed having you and the ${member.team} team there. Please rate your experience</p>
        <form action="/save_rating.php" id="rating-form">
          <select name="rating">
            <option name="Bad" value="Bad">Bad</option>
            <option name="Mediocre" value="Mediocre">Mediocre</option>
            <option name="Good" value="Good">Good</option>
            <option name="Great" value="Great">Great</option>
            <option name="Awesome" value="Awesome">Awesome</option>
          </select>
          <input type="submit">
        </form>
      </div>
    `
  })
  return templateArr
}

// console.log(template(list))

export default template
