from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import LatestNewsViewSet, OurBranchesViewSet, OurTechnologiesViewSet, CatalogueViewSet

router = DefaultRouter()
router.register(r'latest-news', LatestNewsViewSet)
router.register(r'our-branches', OurBranchesViewSet)
router.register(r'our-technologies', OurTechnologiesViewSet)
router.register(r'catalogues', CatalogueViewSet)

urlpatterns = [
    path('', include(router.urls)),
]










# from django.urls import path 
# from .views import *

# urlpatterns = [
#     path('', company, name='company'),
# ]
