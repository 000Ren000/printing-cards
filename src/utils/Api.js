class Api {
  constructor(options) {
  }

  getShtrihCode(number) {
    const options = {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'X-RapidAPI-Key': '4602c23a24msh8a1b7abe611f725p1c82b2jsn6f1223b2c824',
        'X-RapidAPI-Host': 'barcode-generator3.p.rapidapi.com'
      },
      body:
        {
          "background": "#ffffff",
          "displayValue": true,
          "font": "monospace",
          "fontOptions": "",
          "fontSize": 20,
          "format": "EAN13",
          "height": 100,
          "lineColor": "#000000",
          "margin": 10,
          "text": number.toString(),
          "textAlign": "center",
          "textMargin": 2,
          "textPosition": "bottom",
          "type": "png",
          "width": 2
        }
    };

    fetch('https://barcode-generator3.p.rapidapi.com/barcode-generator', options)
      .then(response => response.json())
      .then(response => console.log(response))
      .catch(err => console.error(err));
  }
}


export const api = new Api();
