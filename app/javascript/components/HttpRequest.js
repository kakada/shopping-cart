export default function HttpRequest() {
  get = (url, successCallback, failureCallback) => {
    try {
      const response = await fetch(url);
      
      if (!response.ok) {
        failureCallback()
        failureCallback(response)
        throw Error(response.statusText);
      }
      
      successCallback(response)
    } catch(error) {
      failureCallback(error);
    }
  }

  post = (url, successCallback, failureCallback) => { 
  }
}



async function request(url, callback) {
  console.log(url);
  try {
    const response = await fetch(url);
    
    if (!response.ok) {
      throw Error(response.statusText);
    }
    
    const products = await response.json();
    this.setState({
      isLoaded: true,
      items: products
    });
  } catch(error) {
    this.setState({
      isLoaded: true,
      error
    });
  }
}