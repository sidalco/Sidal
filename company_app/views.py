from rest_framework import viewsets
from .models import LatestNews, OurBranches, OurTechnologies, Catalogue
from .serializers import LatestNewsSerializer, OurBranchesSerializer, OurTechnologiesSerializer, CatalogueSerializer

class LatestNewsViewSet(viewsets.ModelViewSet):
    queryset = LatestNews.objects.all().order_by('dateofEvent')
    serializer_class = LatestNewsSerializer

class OurBranchesViewSet(viewsets.ModelViewSet):
    queryset = OurBranches.objects.all().order_by('name')
    serializer_class = OurBranchesSerializer

class OurTechnologiesViewSet(viewsets.ModelViewSet):
    queryset = OurTechnologies.objects.all().order_by('name')
    serializer_class = OurTechnologiesSerializer

class CatalogueViewSet(viewsets.ModelViewSet):
    queryset = Catalogue.objects.all().order_by('name')
    serializer_class = CatalogueSerializer









# from django.shortcuts import render
# from .models import *

# def company(request):
#     view_LatestNews = LatestNews.objects.all()
#     view_OurBranches = OurBranches.objects.all()
#     view_OurTechnologies = OurTechnologies.objects.all()
#     view_Catalogue = Catalogue.objects.all()
#     company_context = { 'html_LatestNews':view_LatestNews,
#                         'html_OurBranches':view_OurBranches,
#                         'html_OurTechnologies':view_OurTechnologies,
#                         'html_Catalogue':view_Catalogue}
   
#     return render(request,'company_app/cmpny_app.html',company_context)