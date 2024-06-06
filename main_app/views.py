from rest_framework import viewsets, generics
from rest_framework import generics
from .models import MainViewPage, MainPagePics, Services, ContactUsForm, ContactUsInfo, ContactUsMap, AboutUS, SocialMediaLinks
from rest_framework.response import Response
from rest_framework.decorators import action
from .serializers import (
    MainViewPageSerializer, MainPagePicsSerializer, ServicesSerializer, 
    ContactUsFormSerializer, ContactUsInfoSerializer, ContactUsMapSerializer, AboutUSSerializer, SocialMediaLinksSerializer
)


class MainViewPageViewSet(viewsets.ModelViewSet):
    serializer_class = MainViewPageSerializer

    def get_queryset(self):
        return MainViewPage.objects.filter(id=1)
    # Optional: Override retrieve method if you want a custom response format
    @action(detail=False)
    def get_specific_element(self, request):
        instance = self.get_queryset().first()
        if instance:
            serializer = self.get_serializer(instance)
            return Response(serializer.data)
        else:
            return Response({"detail": "Not found."}, status=404)
    # class MainViewPageViewSet(viewsets.ModelViewSet):
    #     queryset = MainViewPage.objects.all()
    #     serializer_class = MainViewPageSerializer

class MainPagePicsViewSet(viewsets.ModelViewSet):
    serializer_class = MainPagePicsSerializer

    def get_queryset(self):
        return MainPagePics.objects.filter(id=1)
    # class MainPagePicsViewSet(viewsets.ModelViewSet):
    # queryset = MainPagePics.objects.all()
    # serializer_class = MainPagePicsSerializer

class ServicesViewSet(viewsets.ModelViewSet):
    queryset = Services.objects.all()
    serializer_class = ServicesSerializer

class ContactUsFormListCreateView(generics.ListCreateAPIView):
    queryset = ContactUsForm.objects.all()
    serializer_class = ContactUsFormSerializer

class ContactUsInfoViewSet(viewsets.ModelViewSet):
    queryset = ContactUsInfo.objects.all()
    serializer_class = ContactUsInfoSerializer

class ContactUsMapViewSet(viewsets.ModelViewSet):
    queryset = ContactUsMap.objects.all()
    serializer_class = ContactUsMapSerializer


class AboutUSViewSet(viewsets.ModelViewSet):
    queryset = AboutUS.objects.all()
    serializer_class = AboutUSSerializer

class SocialMediaLinksViewSet(viewsets.ModelViewSet):
    queryset = SocialMediaLinks.objects.all()
    serializer_class = SocialMediaLinksSerializer


ContactUsForm
ContactUsInfo
ContactUsMap