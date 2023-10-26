export default async function authHeader(contentType = "application/json") {

    return {
  
      "Content-Type": contentType,
  
    };
  
  }