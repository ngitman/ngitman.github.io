import cgi
import smtplib

form = cgi.FieldStorage()
name = form.getvalue('name')
message = form.getvalue('message')
print(name)
print(message)
