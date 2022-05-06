let silvercat = async() => {
  	  var value = await document.querySelector('code').attributes.name.value
      var num = 0;
      let element = await document.getElementById("video1")
      if(element){
	        await element.remove()
      }
   	  var sc = await fetch("https://hentaivipz.xyz/http://hostvideossxx.ddns.net:3000/apigetlinkjavphe/" + value)
  						.then((res) => {return res.text()})
  						.then((result) => {return JSON.parse(result)})
  						.then((resul) => {num=resul.length; return resul.result;})
  						.catch((err) => {return err});
      console.log(num)
      console.log(sc)
  	if(num < 200){
	        document.getElementById('jp').innerHTML = "<iframe width='640' height='360' src='https://stream123.xyz/player.html?v=HBh0OjIVL' frameborder='0' allowfullscreen></iframe>";
      }else{
	        document.getElementById('jp').innerHTML = "<video class='op-player op-player__media' id='video1' controls playsinline src='https://manifest.prod.boltdns.net/manifest/v1/hls/v4/clear/6303740618001/d32a1446-f173-4ba0-bf95-9371aa81f635/6s/master.m3u8?fastly_token=NjI3NTcwNTNfOTg3ODRiMTYzNWQ0MmI0ZGVlY2I3NzViNDE5MDBhZDNkOTUxZmFhNWEzOTliNTA4MTY3ZTAwMWJhZGYyNDg0ZQ%3D%3D'>";
	        const player = new OpenPlayerJS('video1');
	        player.init();
      }
      
}
  	silvercat();
