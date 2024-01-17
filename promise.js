const cookies = [{name:"Chocolate Cookies"},{name:"Macaron Cookies"}]
const newCookie = {name:"Biscotti Cookies"};

// Progression 1: create a function to get all the cookies
  // Progression 2: using setTimeout() -- use 1000 units for time parameter

//Progression 3: Create a function to creat cookies and create an object of Promise.

    // Progression 4: adding two parameters and using setTimeout() -- use 2000 units for time parameter
      
      // Progression 5: handling errors and adding new cookie to the list

// Progression 6: call function using `.then`


function getCookies(){
  var output = ""
  setTimeout(() => {
    cookies.forEach((Element) => {
      output += `<li>${Element.name}</li>`
    })
    document.body.innerHTML = output
  })
}

function createCookie(newCookie){
  return new Promise((resolve,reject) => {
    setTimeout(() => {
      cookies.push(newCookie)
      const con = false

      if (!con){
        resolve()
      }else{
        reject()
      }
    },2000)
  })
}

createCookie(newCookie).then(getCookies)