import re

def is_valid_phone_number(phone_number):
   
    return re.match(r'^\d{10}$', phone_number)