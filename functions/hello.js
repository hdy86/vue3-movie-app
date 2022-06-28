// http://localhost:8888/.netlify/functions/hello
// nodeJs 기반
exports.handler = async function(event, context) {
  return {
    statusCode: 200,
    body: JSON.stringify({
      name: 'HEROPY',
      age: 85,
      email: 'thesecon@gmail.com'
    })
  }
}