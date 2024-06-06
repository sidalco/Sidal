# views.py

from django.shortcuts import render
from django.http import JsonResponse
from .models import Contact

def contact_us(request):
    if request.method == 'POST':
        full_name = request.POST.get('full_name')
        email = request.POST.get('email')
        subject = request.POST.get('subject')
        phone_number = request.POST.get('phone_number')
        content = request.POST.get('content')

        contact = Contact.objects.create(
            full_name=full_name,
            email=email,
            subject=subject,
            phone_number=phone_number,
            content=content
        )
        contact.save()
        return JsonResponse({'message': 'Contact form submitted successfully'})

    return JsonResponse({'message': 'Invalid request method'}, status=400)
