$(document).ready(function () {
  console.log('hello')

  function flavorPick() {
    const flavors = ['chocolate', 'salted caramel', 'caramel pecan', 'chocolate cherry'];
    flavors.forEach(function (flavor) {
      $('.flavors').append("<li>" + flavor + "</li>");

    })
  }
  flavorPick()
})

