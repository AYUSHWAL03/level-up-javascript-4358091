// Write your code here
function urlify(blog){
  const symbols = /['^",!@&*()$#]/g;

  const blogwithoutsymbols = blog.replace(symbols,"");
  return blogwithoutsymbols.toLowerCase().trim().replaceAll(" ","-");
}
console.log(urlify("I am Ayush!! @AYUSHWAL)3"))
