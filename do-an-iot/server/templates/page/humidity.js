  //humidity
  const config2 = {
    type: "line",
    data:{
      labels: ["0", "10", "20", "30", "40", "50", "60", "70", "80", "90"],
      datasets: [
        {
          label: "Humidity",
          backgroundColor: "rgb(0, 200, 250)",
          borderColor: "rgb(0, 200, 250)",
          data: [0, 0, 0, 0, 0, 0,0, 0, 0, 0],
      },
    ],
  } ,
    options: {},
  };
  var myChart2 = new Chart(document.getElementById("myChart2"), config2);
  
  Update2()
  setInterval(()=>{
    Update2();
  },500)

  function Update2(){
    axios.get('http://127.0.0.1:5000/humi')
    .then((response) => {
      let index = 0;
      res = response.data;
      res.slice().reverse().forEach(element => {
        // console.log(element.id)
        myChart2.data.labels[index] = element.hour;
        myChart2.data.datasets[0].data[index] = element.hud
        console.log(index + ": " + element.hud)
        index++;
      });
      myChart2.update()
    })
    .catch(err => {
      console.error(err)
    })
  }