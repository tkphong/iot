  //rain
  const config1 = {
    type: "line",
    data:{
      labels: ["0", "10", "20", "30", "40", "50", "60", "70", "80", "90"],
      datasets: [
        {
          label: "Rainfall",
          backgroundColor: "rgb(0, 100, 255)",
          borderColor: "rgb(0, 100, 255)",
          data: [0, 0, 0, 0, 0, 0 ,0, 0, 0, 0],
      },
    ],
  } ,
    options: {},
  };
  var myChart1 = new Chart(document.getElementById("myChart1"), config1);
  
  Update1()
  setInterval(()=>{
    Update1();
  },500)
  
  function Update1(){
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