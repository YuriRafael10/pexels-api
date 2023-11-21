const apiKey = "cUzMHx9MQddox97hvea9dXiPj8JkZzRbT9pUae48QCUa2cRc3UF4tG3q"
const apiUrl = "https://api.pexels.com/v1/"

fetch(apiUrl, {
  headers: {
    Authorization: apiKey,
  },
})
  .then((response) => {
    if (response.ok) {
      console.log("Solicitação bem-sucedida!")
      const ratelimitLimit = response.headers.get("X-Ratelimit-Limit")
      const ratelimitRemaining = response.headers.get("X-Ratelimit-Remaining")
      const ratelimitReset = response.headers.get("X-Ratelimit-Reset")

      console.log("Limite total:", ratelimitLimit)
      console.log("Solicitações restantes:", ratelimitRemaining)
      console.log("Tempo de redefinição:", new Date(ratelimitReset * 1000)) // Converter o timestamp UNIX para uma data legível
    } else {
      console.error("Erro na solicitação à API do Pexels")
    }
  })
  .catch((error) => {
    console.error("Erro:", error)
  })
