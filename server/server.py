from flask import Flask, render_template

app = Flask(__name__, static_folder="../public", template_folder="../public")


@app.route("/")
def index():
    return render_template("index.html")


@app.route("/api")
def api():
    return "here's some garbage!"


if __name__ == "__main__":
    app.run()
