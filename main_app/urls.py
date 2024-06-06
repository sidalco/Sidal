from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import (
    MainViewPageViewSet, MainPagePicsViewSet, ServicesViewSet, 
    ContactUsFormListCreateView, ContactUsInfoViewSet, ContactUsMapViewSet, AboutUSViewSet, SocialMediaLinksViewSet
)

router = DefaultRouter()
router.register(r'mainviewpage', MainViewPageViewSet, basename='mainviewpage')
router.register(r'mainpagepics', MainPagePicsViewSet, basename='mainpagepics')
router.register(r'services', ServicesViewSet, )
router.register(r'ContactUsInfo', ContactUsInfoViewSet, basename='contactus-info')
router.register(r'ContactUsMap', ContactUsMapViewSet, basename='contactus-map')
router.register(r'aboutus', AboutUSViewSet)
router.register(r'socialmedialinks', SocialMediaLinksViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('ContactUsForm/', ContactUsFormListCreateView.as_view(), name='contactus-list-create'),
    # path('ContactUsInfo/', ContactUsInfoViewSet.as_view(), name='contactus-info'),
    # path('ContactUsMap/', ContactUsMapViewSet.as_view(), name='contactus-map'),
]






# from django.urls import path 
# from .views import *

# urlpatterns = [
   
#     path('', index, name='index'),
#     path('contact_us/', contact_Us, name='contact_us'),
# ]
