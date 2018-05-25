class Auth {

  static setToken(token){
    localStorage.setItem('token', token);
  }

  // To login
  static getToken(){
    return localStorage.getItem('token');
  }

  // To logout
  static logout(){
    localStorage.removeItem('token');
  }

  // Splits token into header, payload and signature
  static getPayload(){
    const token = this.getToken();
    if(!token) return null;
    const parts = token.split('.');
    if(parts.length < 3) return null;
    return JSON.parse(atob(parts[1]));
  }

  // Checking if there is a payload and if it has expired
  static isAuthenticated(){
    const payload = this.getPayload();
    if(!payload) return false;
    const now = Math.round(Date.now() / 1000);
    return now < payload.exp;
  }

  // Allows user to login
  static isCurrentUser(user){
    return this.isAuthenticated() && user._id === this.getPayload().sub;
  }
}


export default Auth;
