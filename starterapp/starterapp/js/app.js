var displayWikipediaData = () => {
    var $linksElement = $('#links')
    var searchString = $('#searchString').val()
    var wikiurl = "https://en.wikipedia.org/w/api.php?action=opensearch&search="+searchString+"&format=json&callback=wikiCallback"
 $.ajax({
     url: wikiurl,
     dataType: "jsonp",
     jsonp: "callback",
     success: (res) => {
         var linkslist = res[1]
         var linksUrl = res[3]
         console.log(linkslist)
         linkslist.forEach(item => {
             var i = linkslist.indexOf(item)
             var url = linksUrl[i]
             $linksElement.append('<li><a href="' + url +'">' + item+ '<a/></li>')
             return url
         });

        

     }

 })  
 return false 
}
$('#form').submit(displayWikipediaData)