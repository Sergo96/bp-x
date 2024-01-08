// function* accessToke() {
//   // return yield select(state => state.auth.token)
// }
//
// function* getCode(action: iAction) {
//   try {
//     yield put(appReducerActions.loadingStart())
//     console.log("start sending")
//     console.log(action.payload)
//     if (action.payload.phoneNumber) {
//       const phone_number = "374" + action.payload.phoneNumber.replace(/\s/g, "").replace(/-/g, "")
//       const device_id = Constants.deviceId || ""
//       const res = yield call(() => service.getCode({phone_number, device_id}))
//       if (res.data.accessToken) {
//         const {accessToken} = res.data
//         // const accessToken = "any token"
//         yield put(reducerActions.setToken(accessToken))
//         yield put(profileReducerActions.setPhoneNumber(phone_number))
//       }
//       console.log(res.data.code)
//
//     }
//   } catch (e) {
//     console.log(e)
//   } finally {
//     yield put(appReducerActions.loadingFinish())
//     // const phone_number = "374" + action.payload.phoneNumber.replace(/\s/g, "").replace(/-/g, "")
//     // const accessToken = "any token"
//     // yield put(reducerActions.setToken(accessToken))
//     // yield put(profileReducerActions.setPhoneNumber(phone_number))
//   }
// }
//
// function* logout() {
//   const accessToken = yield select(state => state.auth.token);
//   console.log(accessToken)
//   yield put(reducerActions.logout())
//   yield put(profileReducerActions.removeUserData())
//
// }
//
// import { auth } from "@vj-store/auth/index";



//
// function* saveUserData(action: iAction) {
//   console.log(action)
//   yield put(reducerActions.editUserType(action.payload.userType))
//   yield put(profileReducerActions.registerUserData({
//     location: action.payload.location,
//     name    : action.payload.fullName,
//   }))
//
//
// }
//
// function* resend() {
//   try {
//     yield put(appReducerActions.loadingStart())
//     const res = yield call(() => service.resend())
//
//
//     console.log("==>", res.data)
//     if (res.data.accessToken) {
//       const {accessToken} = res.data
//       // const accessToken = "any token"
//       yield put(reducerActions.setToken(accessToken))
//       yield put(reducerActions.resend())
//
//     }
//     console.log(res.data.code)
//
//     // yield put(reducerActions.resend())
//
//     // yield put(reducerActions.authenticate({token:res.headers["x-access-token"] as string,userType:res.data.user_type as tUser || "Guest"}))
//     //
//     // yield put(profileReducerActions.setUserData(res.data))
//
//   } catch (e) {
//     console.log("auth saga -> verify ", e.response.data.message)
//   } finally {
//     yield put(appReducerActions.loadingFinish())
//   }
// }
//
// function* verify(action: iAction) {
//   console.log("start verifying", action);
//
//   const code = action.payload.code
//   try {
//     yield put(appReducerActions.loadingStart())
//     const res = yield call(() => service.verifyCode({code}))
//     console.log("==>", res.headers["x-access-token"])
//     console.log("==>", res.data)
//     yield put(reducerActions.authenticate({token:res.headers["x-access-token"] as string,userType:res.data.user_type as tUser || "Guest"}))
//
//     yield put(profileReducerActions.setUserData(res.data))
//
//   } catch (e) {
//     console.log("auth saga -> verify ", e.response.data.message)
//   } finally {
//     yield put(appReducerActions.loadingFinish())
// //     const clientData = {
// //       type   : "Guest",
// //       profile: {
// //         location: "",
// //         name    : ""
// //       }
// //
// //     }
// //     // yield put(reducerActions.resend())
// //
// //     const data = [clientData][0]
// //
// //     console.log("put on reducerActions.authenticate")
// // // if true code
// //     yield put(reducerActions.authenticate({token:"some token",userType:data.type as tUser}))
// //     console.log("put on ReducerActions.profile.setUserData")
// //     yield put(profileReducerActions.registerUserData(data.profile))
// //
//   }
//
// }


import { Cookie }                from '@vj-helpers/cookies'
import { testUser }              from '@vj-store/auth/initialState'
import { reducerActions }        from '@vj-store/auth/reducer.actions'
import { types }                 from '@vj-store/auth/types'
import { cabinetReducerActions } from '@vj-store/cabinet'
import { userReducerActions }    from '@vj-store/user'
import { testUserData }          from '@vj-store/user/initialState'
import { put, takeLatest }       from 'redux-saga/effects'


function* logout() {
  Cookie.removeAuthToken()
  yield put(reducerActions.logout())
  yield put(userReducerActions.logout())
  yield put(cabinetReducerActions.setLinks([]))
}

function* login() {
  Cookie.setAuthToken("sgas;jglkasjd;")
  yield put(reducerActions.login(testUser))
  yield put(userReducerActions.setUser(testUserData))
}
function* checkIsUser() {
  const token = Cookie.getAuthToken()
  if(token) {
    yield put(reducerActions.login(testUser))
    yield put(userReducerActions.setUser(testUserData))
  }
  else yield logout()
}

export function* watch() {
  // yield takeLatest(types.getCode, getCode)
  yield takeLatest(types.logout, logout)
  yield takeLatest(types.login, login)
  yield takeLatest(types.checkIsUser, checkIsUser)
  // yield takeLatest(types.editPhoneNumber, editPhoneNumber)
  // yield takeLatest(types.resend, resend)
  // yield takeLatest(types.verify, verify)
  // yield takeLatest(types.saveUserData, saveUserData)

}
