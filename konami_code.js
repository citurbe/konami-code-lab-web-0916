const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  // your code here
  const body = document.getElementsByTagName('body')[0];

  var index = 0;
  body.addEventListener('keydown', function(e) {


    const key = parseInt(e.detail || e.which)
    console.log(`${key}`)
    console.log(`${index}`)
    if (key === code[index]){
      index++

    }
    else {
      index = 0;
    }
    if (index === code.length){
      alert("Superpowers!!!");
      index = 0
    }

})

}
init();
