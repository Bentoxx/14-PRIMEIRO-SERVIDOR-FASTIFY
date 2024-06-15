import fastify from "fastify";
//const servidor = fastify({})
const servidor = fastify({
    logger: true
})

servidor.get('/teste', function controlador(req, res) {
    const saudacao = 'Bem Vindo ao primeiro Servidor com Node.js com Typescript'
    return res.send(saudacao)
})
servidor.listen({
    port: 3000
})