    /*input = AAAABBBCCDAABB
      output = 4A3B2C1D2A2B*/

      let data = "AAAABBBCCDAABB";
      let length = data.length;
      var output = [];
      let count = 1;
      
      for (let i=0; i<length; i++)
      {
          if(data[i] === data[i+1]){
              count++;
          }
          else{
              output.push(count + data[i]);
              count = 1;
          }
      }
      console.log("Output:", output);