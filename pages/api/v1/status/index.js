function status(request, response) {
  response.status(200).json({ message: "deu certo" });
}

export default status;
