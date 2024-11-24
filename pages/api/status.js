function status(request,response) {
  if (request === "POST") {
    response.status(200).json({chave: "deu certo"})
  }else{
    request.status(201).json({chave:"teste do teste"})
  }
  
}

export default status