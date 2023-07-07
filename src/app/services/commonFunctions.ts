export const getData = async (URL: string):Promise<any> => {
  if ( URL === "all") {
   try {
    const request = await fetch(`https://restcountries.com/v3.1/${URL}`);
    const respond = await request.json();
    return respond
   }
   catch (e) {
    console.log(e)
   }
  } else {
    try {
      const request = await fetch(`https://restcountries.com/v3.1/${URL}`);
      const respond = await request.json();
      return respond
    } catch (e) {
      console.log(e)
     }
    }
}

export const getSingleCountry = async (name:string):Promise<any> => {
  try {
    const request = await fetch(`https://restcountries.com/v3.1/name/${name.replaceAll(" ", "%20")}`);
    const respond = await request.json();
    return respond
   }
   catch (e) {
    console.log(e)
   }
}