let silvercat = async() => {
  	  let value = await document.querySelector('code').attributes.name.value
      var num = 0;
      let element = document.getElementById("video1")
      if(element){
	        element.remove()
      }
   	  var sc = await fetch("https://hentaivipz.xyz/http://hostvideossxx.ddns.net:3000/apigetlinkjavphe/" + value)
  						.then((res) => {return res.text()})
  						.then((result) => {return JSON.parse(result)})
  						.then((resul) => {num=resul.length; return resul.result;})
  						.catch((err) => {return err});
      if(num < 200){
	        document.getElementById('jp').innerHTML = ("<iframe width='640' height='360' src='" + sc +"' frameborder='0' allowfullscreen></iframe>");
      }else{
	        document.getElementById('jp').innerHTML = ("<video class='op-player op-player__media' id='video1' controls playsinline src='" + sc + "'>");
	        const player = new OpenPlayerJS('video1');
	        player.init();
      }
}
  	silvercat();
