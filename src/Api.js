import axios from 'axios';

export default axios.create({ baseURL: 'https://cotalogo-api.netlify.app/' });
// export default axios.create({ baseURL: 'https://erpjariomilitar.com/' });

// export default {
//   verifyResponse(res) {
//     if (res.unauthorized) {
//       alert(res.unauthorized);
//       return window.location.href = '/login';
//     };

//     if (res.msg) {
//       lib.message(res.msg);
//       return true;
//     };

//     return false;
//   },
//   response: async (func, param) => {
//     if (document.getElementById('loader')) { document.getElementById('loader').style.visibility = 'visible'; }
//     let element = await func(param);
//     if (document.getElementById('loader')) { document.getElementById('loader').style.visibility = 'hidden'; }
//     if (!element) { return false; }
//     return element;
//   }
// };