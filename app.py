from flask import Flask, render_template, redirect, request, flash
from flask_mail import Mail, Message
from dotenv import load_dotenv
import os
load_dotenv()

app = Flask(__name__)
app.secret_key = os.getenv("KEY")

mail_settings = {
    "MAIL_SERVER": 'smtp.gmail.com',
    "MAIL_PORT": 465,
    "MAIL_USE_TLS": False,
    "MAIL_USE_SSL": True,
    "MAIL_USERNAME": os.getenv("EMAIL"),
    "MAIL_PASSWORD": os.getenv("PASSWORD")
}

app.config.update(mail_settings)
mail = Mail(app)

class Contact:
    def __init__(self, name, email, message):
        self.name = name
        self.email = email
        self.message = message

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/send', methods=['GET', 'POST'])
def send():
    if request.method == 'POST':
        form_contact = Contact(
            request.form["name"],
            request.form["email"],
            request.form["message"]
        )

        msg = Message(
            subject = f'{form_contact.name} has send you a message',
            sender = app.config.get("MAIL_USERNAME"),
            recipients= ['gabriel_eger01@hotmail.com', app.config.get("MAIL_USERNAME")],
            body = f'''
            
            {form_contact.name} with the e-mail {form_contact.email}, has send you the following message:
            {form_contact.message}
            '''
        )
        mail.send(msg)
        flash('Thank you. Your email has been sent!')
    return redirect('/')

if __name__ == '__main__':
    app.run(debug=False)
