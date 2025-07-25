const jsonServer=require('json-server')

const Mpserver=jsonServer.create()

const middileware=jsonServer.defaults()

const route=jsonServer.router('data.json')

const PORT=process.env.PORT || 3000

Mpserver.use(middileware)
Mpserver.use(route)

Mpserver.listen(PORT,()=>{
    console.log(`Mpserver running at port ${PORT}`);
    
})





