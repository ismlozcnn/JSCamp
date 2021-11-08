import { BaseLogger, ElasticLogger } from "../crossCuttingConcerns/logging/logger.js"
import User from "../models/user.js"
import  UserService  from "../services/userService.js"

console.log("User component yüklendi")

let logger1=new ElasticLogger()
let userSevice=new UserService(logger1)


let user1=new User(1,"ismail","özcan","istanbul")
let user2=new User(2,"gökçe","yazici","istanbul")
userSevice.add(user1)
userSevice.add(user2)

console.log(userSevice.list())
console.log(userSevice.getById(2))





let customer={id:1,firstName:"Engin"}

//prototyping
customer.lastName="Demiroğ"

console.log(customer.lastName)



