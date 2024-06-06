from rest_framework import serializers
from .models import MainViewPage, MainPagePics, Services, ContactUsForm, ContactUsInfo, ContactUsMap, AboutUS, SocialMediaLinks

class MainViewPageSerializer(serializers.ModelSerializer):
    class Meta:
        model = MainViewPage
        fields = '__all__'

class MainPagePicsSerializer(serializers.ModelSerializer):
    class Meta:
        model = MainPagePics
        fields = '__all__'

class ServicesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Services
        fields = '__all__'


class ContactUsFormSerializer(serializers.ModelSerializer):
    class Meta:
        model = ContactUsForm
        fields = '__all__'

class ContactUsInfoSerializer(serializers.ModelSerializer):
    class Meta:
        model = ContactUsInfo
        fields = '__all__'

class ContactUsMapSerializer(serializers.ModelSerializer):
    class Meta:
        model = ContactUsMap
        fields = '__all__'


class AboutUSSerializer(serializers.ModelSerializer):
    class Meta:
        model = AboutUS
        fields = '__all__'

class SocialMediaLinksSerializer(serializers.ModelSerializer):
    class Meta:
        model = SocialMediaLinks
        fields = '__all__'
