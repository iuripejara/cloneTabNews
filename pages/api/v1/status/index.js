function status(request, response) {
  response.status(200).json({ chave: "deu certo" });
}

export default status;
