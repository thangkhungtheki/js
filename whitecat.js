let whitecat = async() => {
  	  let value = await document.querySelector('code').attributes.name.value
   	  let sc = await fetch("https://apixxx21.herokuapp.com/http://hostvideossxx.ddns.net:4000/streamvideo/" + value)
  						.then((res) => {return res.text()})
  						.then((result) => {return JSON.parse(result)})
  						.then((resul) => {return resul.video;})
  						.catch((err) => {return err});			  
			  const player = new OpenPlayerJS('video1');
  			  player.src = {src: sc.toString()};
  			  player.init();
             }
  	whitecat();
