var url ="https://raw.githubusercontent.com/GoldenOwlAsia/webdev-intern-assignment/main/app/data/shoes.json";
var img_url = "https://github.com/GoldenOwlAsia/webdev-intern-assignment/tree/main/app/assets";

const getJSON = async url => {
    const response = await fetch(url);
    if(!response.ok) // check if response worked (no 404 errors etc...)
      throw new Error(response.statusText);
  
    const data = response.json(); // get JSON from the response
    return data; // returns a promise, which resolves to this data value
  }
  

  function add_item {

  }

  function minus_item{

  }

  function remove_item{
      
  }