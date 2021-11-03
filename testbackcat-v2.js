let blackcat = async() => {
  	  let value = await document.querySelector('code').attributes.name.value
   	  let sc = await fetch(linksrcjavphe + value)
  						.then((res) => {return res.text()})
  						.then((result) => {return JSON.parse(result)})
  						.then((resul) => {return resul.video;})
  						.catch((err) => {return err});
      if(sc == "false"){
          alert('Video bi loi')
      }else{
      		const player = new OpenPlayerJS('video1',{
    ads: {
        src: 'https://www.videosprofitnetwork.com/watch.xml?key=3034aeb4f3e60e1d6936607404d13934'
    },);
  			  player.src = {src: sc.toString()};
  			  player.init();
      }
}
  	blackcat();
