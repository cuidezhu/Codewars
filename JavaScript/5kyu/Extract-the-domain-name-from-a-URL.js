/*
Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

domainName("http://github.com/carbonfive/raygun") == "github"
domainName("http://www.zombie-bites.com") == "zombie-bites"
domainName("https://www.cnet.com") == "cnet"
*/

function domainName(url){
  let domin = url;
  if (url.match(/\/\/(\S*?)\//)) {
    domin = url.match(/\/\/(\S*?)\//)[1];
  } else if (url.match(/\/\/(\S*)/)) {
    domin = url.match(/\/\/(\S*)/)[1];
  } else if (url.match(/\//)) {
    domin = url.match(/(\S*)\//)[1]
  }

  dominArr = domin.split('.');
  if (dominArr[0] === 'www') {
    return dominArr[1];
  } else {
    return dominArr[0];
  }
}
