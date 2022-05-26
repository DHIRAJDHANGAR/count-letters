    /*input = AAAABBBCCDAABB
      output = 4A3B2C1D2A2B*/

      let data = "AAAABBBCCDAABB";
      let length = data.length;   //define lenght of data
      var output = [];
      let count = 1;
      
      for (let i=0; i<length; i++)
      {
          if(data[i] === data[i+1]){    //match first and second letter
              count++;                  //count how each letter is repeat
          }
          else{                         
              output.push(count + data[i]);  //push count and letter present in data
              count = 1;
          }
      }
      console.log("Output:", output);