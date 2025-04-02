import requests
from bs4 import BeautifulSoup
from flask import Flask, jsonify

app = Flask(__name__)

def scrape_covid_data():
    url = "https://www.worldometers.info/coronavirus/"
    response = requests.get(url)
    soup = BeautifulSoup(response.text, "html.parser")

    # Extract global cases, deaths, recoveries
    counters = soup.find_all("div", class_="maincounter-number")
    
    covid_data = {
        "cases": counters[0].text.strip(),
        "deaths": counters[1].text.strip(),
        "recovered": counters[2].text.strip(),
    }
    
    return covid_data

@app.route("/covid", methods=["GET"])
def get_covid_data():
    data = scrape_covid_data()
    return jsonify(data)

if __name__ == "__main__":
    app.run(debug=True)
