export async function getFood() {
    try {
      let response = await fetch(`https://api.nal.usda.gov/fdc/v1/food/544003?api_key=DEMO_KEY`);
      let jsonifiedResponse;
      if (response.ok && response.status == 200) {
        jsonifiedResponse = await response.json();
      } else {
        console.log(response.status, response.ok);
        jsonifiedResponse = false;
      }
      return jsonifiedResponse;
      } catch(error) {
        return false;
      }
  }
