export const access_Token = (id) =>{
     return jwt.sign({userId, name , email}, process.env.ACCESS_TOKEN_SECRET, {
          expiresIn: "20s"
     });
}

export const refresh_Token = (id) =>{
     return jwt.sign({userId, name , email}, process.env.Refresh_TOKEN_SECRET, {
          expiresIn: "1d"
     })
}