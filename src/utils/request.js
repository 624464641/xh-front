import axios from 'axios'

//  function get(url, params){    
//     return new Promise((resolve, reject) =>{        
//         axios.get(url, {            
//             params: params        
//         }).then(res => {
//             resolve(res.data);
//         }).catch(err =>{
//             reject(err.data)        
//     })    
// })
// }
const brasUrl = 'http://localhost:10004'

 function get(url, params) {
  return new Promise((resolve, reject) => {
       axios.get(brasUrl+url)
      .then(res => {
          resolve(res.data);
      })
      .catch(err =>{
          reject(err.data)
      })
  });
}


export {get  }