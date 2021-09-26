let sc = await fetch(linksrc + '1873')
  						.then((res) => {return res.text()})
  						.then((result) => {return JSON.parse(result)})
  						.then((resul) => {return resul.video;})
  						.catch((err) => {return err});			  
			  const player = new OpenPlayerJS('video1',{ads: {src: [adssrc,adssrc1,adssrc2,adssrc3]}});
  			  player.src = { type: 'video/mp4', src: sc.toString()};
  			  player.init();
