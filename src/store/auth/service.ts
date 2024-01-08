// const url =`${process.env.API_URL}auth/`
const url =`https://084c-46-70-115-253.ngrok.io/api/auth`


export const service = {
  // resend :()=>axios.post(`auth/resend`),
  // getCode  :  (body: { phone_number: string,device_id:string })  => axios.post(`auth/phone`,body),
  //
  // verifyCode: (body:{code:string}) => axios.post(`auth/verify`,body),
  //
  // logout:(accessToken:string)=>axios.post(`auth/phone`,{},{headers:{accessToken}}),
  //
  // getExpoId: async ():Promise<string> => {
  //
  //   // const {status} = await Permissions.getAsync(Permissions.NOTIFICATIONS)
  //   const {status} = await Notifications.requestPermissionsAsync()
  //   if(status !== "granted"){
  //     alert("Please turn on push notification assess for get news")
  //     return ""
  //   }
  //   if(Platform.OS === "web")return "any token"
  //   return (await Notifications.getExpoPushTokenAsync()).data
  // }


};
