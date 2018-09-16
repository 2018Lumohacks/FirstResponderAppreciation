var name = createInput('1');
var content = createInput('2') ;
var image = createInput('3') ;
var data_time = createInput('4');
var location = createInput('5'); 
var type = createInput('6');

function setup() {

	//set the var to appropiate locations

	const database = firebase.database();
	submit();
};


function submit() {
  var data = {
    author  :   name.value(),
    content :   content.value(),
    image   :   image.value(),
    data_time : data_time.value(),
    laction :   location.value(),
    type    :   type.value()
  }

  console.log(data);
  var ref = database.ref('posts');
  ref.push(data);

}

