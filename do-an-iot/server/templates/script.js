
//temperature
const config = {
    type: "line",
    data:{
      labels: ["0", "10", "20", "30", "40", "50", "60", "70", "80", "90"],
      datasets: [
        {
          label: "Temperature",
          backgroundColor: "rgb(230, 0, 0)",
          borderColor: "rgb(230, 0, 0)",
          data: [0, 0, 0, 0, 0, 0,0, 0, 0, 0],
      },
      {
        label: "Humidity",
          backgroundColor: "rgb(0, 200, 250)",
          borderColor: "rgb(0, 200, 250)",
          data: [0, 0, 0, 0, 0, 0,0, 0, 0, 0],
      },
      {
        label: "Rainfall",
          backgroundColor: "rgb(0, 100, 255)",
          borderColor: "rgb(0, 100, 255)",
          data: [0, 0, 0, 0, 0, 0 ,0, 0, 0, 0],
      }
    ]
  } ,
    options: {
    }
  };
  var myChart = new Chart(document.getElementById("myChart4"), config);

  Update4()
  setInterval(()=>{
    Update4();
  },500)

  function Update4(){
    axios.get('http://127.0.0.1:5000/temp')
    .then((response) => {
      let index = 0;
      res = response.data;
      res.slice().reverse().forEach(element => {
        // console.log(element.id)
        myChart.data.labels[index] = element.hour;
        myChart.data.datasets[0].data[index] = element.temp
        console.log(index + ": " + element.temp)
        index++;
      });
      myChart.Update4()
    })
    .catch(err => {
      console.error(err)
    })
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
    axios.get('http://127.0.0.1:5000/rain')
    .then((response) => {
      let index = 0;
      res = response.data;
      res.slice().reverse().forEach(element => {
        // console.log(element.id)
        myChart1.data.labels[index] = element.hour;
        myChart1.data.datasets[0].data[index] = element.rain
        console.log(index + ": " + element.rain)
        index++;
      });
      myChart1.update()
    })
    .catch(err => {
      console.error(err)
    })
  }
