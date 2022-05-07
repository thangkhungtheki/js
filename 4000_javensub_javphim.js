let silvercat = async() => {
  	  var value = await document.querySelector('code').attributes.name.value
      var num = 0;
      let element = await document.getElementById("video1")
      if(element){
	        await element.remove()
      }
   	  var sc = await fetch("https://hentaivipz.xyz/http://hostvideossxx.ddns.net:4000/streamvideo/" + value)
  						.then((res) => {return res.text()})
  						.then((result) => {return JSON.parse(result)})
  						.then((resul) => {num=resul.length; return resul.result;})
  						.catch((err) => {return err});
      console.log(num)
      console.log(sc)
  	if(num < 200){
	        document.getElementById('jpcc').innerHTML = "<iframe width='640' height='360' src='" + sc + "' frameborder='0' allowfullscreen></iframe>";
      }else{
	        document.getElementById('jpcc').innerHTML = "<video class='op-player op-player__media' id='video1' controls playsinline src='" + sc + "'>";
	        const player = new OpenPlayerJS('video1');
	        player.init();
      }
      
}
  	silvercat();
