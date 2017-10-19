let baseUrl = '';
let routerMode = 'history';

if(process.env.NODE_ENV == 'development'){
  baseUrl = 'http://dev.jdpay.com';
}else if(process.env.NODE_ENV == 'production'){
  baseUrl = 'http://www.jdpay.com';
}

export{
  baseUrl,
  routerMode
}
