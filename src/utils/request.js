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
const brasUrl = 'http://localhost:10003'

 function post(url, params) {
  return new Promise((resolve, reject) => {
       axios.post(brasUrl+url, JSON.stringify(params))
      .then(res => {
          resolve(res.data);
      })
      .catch(err =>{
          reject(err.data)
      })
  });
}


export {post  }