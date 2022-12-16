
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
    ],
  } ,
    options: {},
  };
  var myChart = new Chart(document.getElementById("myChart"), config);

  Update()
  setInterval(()=>{
    Update();
  },500)

  function Update(){
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
      myChart.update()
    })
    .catch(err => {
      console.error(err)
    })
  }