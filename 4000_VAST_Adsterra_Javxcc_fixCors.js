let silvercat = async() => {
  	  let value = await document.querySelector('code').attributes.name.value
   	  let sc = await fetch("https://apixxx21.herokuapp.com/http://hostvideossxx.ddns.net:4000/streamvideo/" + value)
  						.then((res) => {return res.text()})
  						.then((result) => {return JSON.parse(result)})
  						.then((resul) => {return resul.video;})
  						.catch((err) => {return err});			  
			  const player = new OpenPlayerJS('video1');
  			  if(sc == false){
              	player.src = {src: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4'};
              }else{
                player.src = {src: sc};
              }
  			  
  	player.init().then(() => {
            player.loadAd('https://hentaivipz.xyz/https://www.videosprofitnetwork.com/watch.xml?key=4f753132c0c3804ad39265ca7ddedce3');

          
  	});

             }
  	silvercat();
