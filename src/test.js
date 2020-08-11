let OSS = require('ali-oss');

let client = new OSS({
  region: 'oss-cn-shanghai',

  // bucket: 'elansenshanghai'
  accessKeyId: 'STS.NSoWGqt9RNCkWTtpEHQJcP4ZL',
  accessKeySecret: 'AhaSxA8e6oKfUpnT3eFJEf31J289DxoKYyPHoDH4gqBG',
  stsToken: 'CAISxQJ1q6Ft5B2yfSjIr5DaHP3FmeZz+YGAVXLFlEUdXcVPv/Hxrjz2IHFFfHlqA+kbsfgwmm5Q7PYdlqtrU8fE/OVfvI0igK5M+CaNPqAL0q7ctM7w4f/IMGyXDAGBja22Su7lTdTbV+6wYlTf7EFayqf7cjPQFj7ANoaS26Z6cvMdXASzcVg+A8xNdCdvrMIGOFzbN/umLmTa4AzqAVFvpxB3hE5m9K272bf80BfFi0DgweJn8+aCK5O/Pc53J8U9AZXn0eh/cLHM1jVQ4h5F9K537tlN8iyVucqGURsDoUeLN+PS6dBpNw9wYKc6Eq8D7tqEzKwn6ryLzNium0YcY7kLAx6yHt7wnJH2f8qyLcs8eLrBPHDA78uCLJGdsXl/MCNDZFkQIod+diAuV0R2Gm7ASbWu/UvKawGsS6GEwA3zTWT8UfyDGoABbFio55bF0BAkZr8MsWch+MKLQSsB6Mlh1qf4mPq8Kxnlm0OndycrLaqiWa+x5G/6Q04Kjst0YwUQeQjC38ZhDan8ztMBx8+qJCJUyJVJ1YcXx+Qo/4MijfVgWayPu2MYCT76N9ClMe6FyFHkPzuVqaqJryxujwXQ93pa4D0+dEY=',
  bucket: 'elansenshanghai'

});
// http://elansenshanghai.oss-cn-shanghai.aliyuncs.com/5be3fad86be2670d9c9cfc9a
async function put () {
  try {
    let result = await client.put('/print/template/7897asdfjasdklojfasldk123.jrxml', 'D:/ossUpload/7897asdfjasdklojfasldk123.jrxml');
  //  let result = await client.put('13333', 'C:/OSSDemo/1/delivery_template_v1(1).xlsx');
    console.log(result);
   } catch (err) {
     console.log (err);
   }
}

put();

// async function delete12 () {
//   try {
//     let result = await client.delete('sdfdd/test8');
//     console.log("rrrr,: ", result);
//   } catch (e) {
//     console.log(e);
//   }
// }

export { put as oss }
//oss:/elansenshanghai/qrcode/ddbbdaoru.txt
// oss-cn-shanghai.aliyuncs.com

// delete12();
