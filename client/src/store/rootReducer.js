import { combineReducers } from "redux"
import auth from "./auth"
import template from "./template"
import noeuds from "./noeuds"
import gateways from "./gateways"


const rootReducer = combineReducers({
  authentication: auth,
  template: template,
  noeuds: noeuds,
  gateways: gateways
})

export default rootReducer
