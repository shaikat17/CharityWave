const { default: NextAuth } = require("next-auth/next");


const handler = NextAuth({
    // providers:[
    //     GoogleProvider({
            
    //     })
    // ]
})

export {handler as GET, handler as POST}